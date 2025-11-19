import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Melu’s Cafe | Bookings",
    description: "Let's book your next event"
}

export default function BookingPage(){
    return(
        <>
            <Navbar/>
            <main className="booking-page">

            </main>

            <Footer/>
        </>
    );
}