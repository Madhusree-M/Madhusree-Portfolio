import Navbar from "@/components/Navbar";
import "./globals.css";

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;