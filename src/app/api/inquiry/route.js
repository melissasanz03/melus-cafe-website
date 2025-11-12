export async function GET() {
    // Health check: curl http://localhost:3000/api/inquiry
    return new Response(JSON.stringify({ ok: true, hint: "POST here to forward to GAS" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  
  export async function POST(req) {
    try {
      const data = await req.json().catch(() => null);
      if (!data?.name || !data?.email || !data?.message) {
        return json({ ok: false, error: "Missing fields: name, email, message" }, 400);
      }
  
      const url = process.env.GAS_URL;
      if (!url) {
        return json({ ok: false, error: "GAS_URL is not set (check .env.local and restart dev)" }, 500);
      }
  
      const upstream = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const text = await upstream.text(); // read body once
      if (!upstream.ok) {
        return json({
          ok: false,
          error: `Upstream ${upstream.status}`,
          upstreamBody: truncate(text, 500),
        }, 502);
      }
  
      // Try to parse JSON if GAS returns JSON; otherwise pass raw text
      let parsed;
      try { parsed = JSON.parse(text); } catch { parsed = { raw: text }; }
  
      return json({ ok: true, upstream: parsed }, 200);
    } catch (err) {
      return json({ ok: false, error: String(err) }, 500);
    }
  }
  
  function json(obj, status = 200) {
    return new Response(JSON.stringify(obj), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  }
  function truncate(s, n) { return (s || "").slice(0, n); }
  