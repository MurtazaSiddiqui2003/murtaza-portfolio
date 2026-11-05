import "./globals.css";

export const metadata = {
  title: "Murtaza Siddiqui — Web Developer & Digital Solutions Specialist",
  description:
    "I build, improve and develop thoughtful websites and e-commerce experiences for businesses ready to grow.",
  metadataBase: new URL("https://murtaza-portfolio.vercel.app"),
  openGraph: {
    title: "Murtaza Siddiqui — Web Developer",
    description:
      "Thoughtful websites and e-commerce experiences for growing businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
