import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/footer";

const AppLayout = () =>{
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