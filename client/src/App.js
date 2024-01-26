import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import  { Tampilan } from "./pages/tampilan";
import  EditProduk  from "../src/pages/EditProduk";
import  TambahProduct from "./pages/TambahProduk";
import  { Cari }  from "./pages/Cari";
import  { Urut } from "./pages/Urut";
import { Transaksi } from "./pages/Transaksi";
import { Date } from "./pages/Date";
import {Home} from "./pages/Home";
function App() {
  return (
    <div >
    
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/das" element={<Dashboard/>}/>
          <Route path="/cek" element={<Tampilan/>}/>
          <Route path="/edit/:id" element={<EditProduk/>}/>
          <Route path="/tambahproduk" element={<TambahProduct/>}/>
          <Route path="/cari" element={<Cari/>}/>
          <Route path="/urut" element={<Urut/>}/>
          <Route path="/transaksi" element={<Transaksi/>}/>
          <Route path="/date" element={<Date/>}/>

        
        </Routes>


    </div>
  );
}



export default App;
