import { Noto_Sans } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammad Apon",
  description: "Portfolio of Apon",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0f172a]`}>{children}</body>
    </html>
  );
};
export default RootLayout;
