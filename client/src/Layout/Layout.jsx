import Navbar from "../main_comp/Navbar";
import { Footer } from "../main_comp/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />

        <div className=" bg-gray-100 w-full ">
          <main className="p-4">{children}</main>
      
        </div>
      <Footer />
    </>
  );
}

export default Layout;