import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahProduk = () => {
  
    const [nama_barang, setNama_barang] = useState("");
    const [stok, setStok] = useState("");
    const [jumlah_terjual, setJumlah_terjual]  = useState("");
    const [jenis_barang, setJenis_barang] = useState("");

  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/tambahproduk", {
        nama_barang,
        stok,
        jumlah_terjual,
        jenis_barang,
      });
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form onSubmit={saveProduct} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Product Name</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Product Name"
              value={nama_barang}
              onChange={(e) => setNama_barang(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Stok</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Price"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
            />
          </div>
          <div className="mb-5">
          <label className="font-bold text-slate-700">jumlah_terjual</label>
          <input
            type="text"
            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="Price"
            value={jumlah_terjual}
            onChange={(e) => setJumlah_terjual(e.target.value)}
          />
        </div>
        <div className="mb-5">
        <label className="font-bold text-slate-700">Jenis barang</label>
        <input
          type="text"
          className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
          placeholder="Price"
          value={jenis_barang}
          onChange={(e) => setJenis_barang(e.target.value)}
        />
      </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahProduk;
