import { Noto_Sans,DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammad Apon",
  description: "Portfolio of Apon",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-[#131313]`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
