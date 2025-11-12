
import "./globals.css";


export const metadata = {
  title: "Melu's Cafe | coffee cart catering",
  description: "Melu’s Cafe offers artisan coffee cart catering for private events, weddings, and corporate gatherings in the NYC area.",
  icons: {
    icon: "/images/Melus_Cafe_Logo_Blue_3.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/images/Melus_Cafe_Logo_Blue_3.png" type="image/png" />

        {/* Fonts -*/}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap" rel="stylesheet"/>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
        {/* Font Awesome for icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
        
        {/* Custom CSS */}
        <link rel="stylesheet" href="css/styles.css"/>
        <link rel="stylesheet" href="css/responsive.css"/>
    </head>
      
      <body>{children}</body>
    </html>
  );
}
