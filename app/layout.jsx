import "./globals.css";

export const metadata = {
  title: "Ali Raza - Full Stack Developer | Next.js Portfolio",
  description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio showcasing innovative web applications, clean code, and scalable solutions. Based in Hyderabad, Pakistan.",
  keywords: [
    "Ali Raza",
    "Ali Raza Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Hyderabad Pakistan"
  ],
  authors: [{ name: "Ali Raza" }],
  creator: "Ali Raza",
  publisher: "Ali Raza",
  metadataBase: new URL('https://aliportfoliov2-ebon.vercel.app/'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ali Raza - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my innovative projects and skills in web development.",
    url: "https://aliportfoliov2-ebon.vercel.app/", // Replace with your actual domain
    siteName: "Ali Raza Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // Add this image to your public/images folder
        width: 1200,
        height: 630,
        alt: "Ali Raza - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Raza - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio and innovative projects.",
    images: ["/images/twitter-image.jpg"], // Add this image to your public/images folder
    creator: "@your-twitter-handle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Add your Google verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/my-image.png" />
        <meta name="google-site-verification" content="i4uMsW0sMxCpghMtsx7x9yV7xAmOOe_QFrj7yZN1c6U" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
