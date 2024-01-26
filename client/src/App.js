import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import  { Tampilan } from "./pages/tampilan";
import  TambahProduct from "./pages/TambahProduk";
import {Home} from "./pages/Home";
function App() {
  return (
    <div >
    
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/das" element={<Dashboard/>}/>
          <Route path="/cek" element={<Tampilan/>}/>
          <Route path="/add" element={<TambahProduct/>}/>
        </Routes>


    </div>
  );
}



export default App;
