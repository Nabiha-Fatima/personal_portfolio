import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/footer";

const AppLayout = () =>{
  const { pathname } = useLocation();

  // jab bhi route change ho, top pe scroll karo
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

    return(
        <>
          <Navbar/>
          <main className="pt-16">
            <Outlet/>
          </main>
          <Footer/>
        </>
    )
}
export default AppLayout;