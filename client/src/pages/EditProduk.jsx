import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

 const EditProduk = () => {
  
    const [nama_barang, setNama_barang] = useState("");
    const [stok, setStok] = useState("");
    const [jumlah_terjual, setJumlah_terjual]  = useState("");
    const [jenis_barang, setJenis_barang] = useState("");
    // const [tanggal_transaksi, setTanggal_transaksi] = useState("");

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        const getProductById = async () => {
          const response = await axios.get(`http://localhost:5000/editproduk/${id}`);
          setNama_barang(response.data.nama_barang);
          setStok(response.data.stok);
          setJumlah_terjual(response.data.jumlah_terjual);
          setJenis_barang(response.data.jenis_barang);
        //   setTanggal_transaksi(response.data.tanggal_transaksi);
        };
        getProductById();
        
      }, [id])
      
      const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/editproduk/${id}`, {
            nama_barang,
            stok,
            jumlah_terjual,
            jenis_barang,
            // tanggal_transaksi

        });
        navigate("/das");
      };
    return (
    
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <form onSubmit={updateProduct} className="my-10">
          <div className="flex flex-col">
            <div className="mb-5">
              <label className="font-bold text-slate-700"> Nama Barang</label>
              <input
                type="text"
                className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Nama Barang"
                value={nama_barang}
                onChange={(e) => setNama_barang(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="font-bold text-slate-700">Stok Barang</label>
              <input
                type="text"
                className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Stok "
                value={stok}
                onChange={(e) => setStok(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="font-bold text-slate-700">Jumlah Terjual </label>
              <input
                type="text"
                className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Jumlah Terjual"
                value={jumlah_terjual}
                onChange={(e) => setJumlah_terjual(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="font-bold text-slate-700">Jenis Barang</label>
              <input
                type="text"
                className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Jenis Barang"
                value={jenis_barang}
                onChange={(e) => setJenis_barang(e.target.value)}
              />
            </div>
            {/* <div className="mb-5">
              <label className="font-bold text-slate-700">Waktu Transaksi</label>
              <input
                type="text"
                className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Price"
                value={tanggal_transaksi}
                onChange={(e) => setTanggal_transaksi(e.target.value)}
              />
            </div> */}
            <button
              type="submit"
              className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
            >
              Update
            </button>
          </div>
        </form>
      </div>
  )
}

export default EditProduk