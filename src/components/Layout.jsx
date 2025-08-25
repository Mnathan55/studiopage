import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen gap-0">
      <Navbar />
      <main className="flex-grow mt-[74px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

