import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Melu’s Cafe | Menu",
    description: "Full menu on specialty drinks and drinks offered."
}

export default function MenuPage(){
    return(
        <>
            <Navbar/>
            <main className="menu-page">

            </main>

            <Footer/>
        </>
    );
}