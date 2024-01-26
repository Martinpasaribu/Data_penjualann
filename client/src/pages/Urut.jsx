import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

export const Urut = () => {
  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/getproduct");
    return response.data;
  };

  const { data } = useSWR("products", fetcher);
  if (!data) return <h2>Loading...</h2>;

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/hapusproduk/${productId}`);
      mutate("products");
    } catch (error) {
      console.error("Error deleting product:", error.message);
      // Lakukan sesuatu jika terjadi kesalahan saat menghapus produk,
      // seperti menampilkan pesan kepada pengguna atau melakukan penanganan lebih lanjut.
    }
  };

  // Fungsi untuk mengurutkan data Nama_barang berdasarkan abjad
  const sortByName = () => {
    const sortedData = [...data].sort((a, b) =>
      a.nama_barang.localeCompare(b.nama_barang)
    );
    mutate("products", sortedData, false);
  };

  // Fungsi untuk mengurutkan data berdasarkan tanggal transaksi
  const sortByDate = () => {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.tanggal_transaksi) - new Date(a.tanggal_transaksi)
    );
    mutate("products", sortedData, false);
  };


  return (
    <div className="relative shadow rounded-lg mt-3">
      <button
        onClick={sortByDate}
        className="bg-kuning hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3"
      >
        Waktu
      </button>
      <button
      onClick={sortByName}
      className="bg-kuning hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3"
    >
      Nama Barang
    </button>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="py-3 px-1 text-center">No</th>
            <th className="py-3 px-6">Nama_barang</th>
            <th className="py-3 px-6">stok</th>
            <th className="py-3 px-6">jumlah_terjual</th>
            <th className="py-3 px-6">jenis_barang</th>
            <th className="py-3 px-6">tanggal_transaksi</th>
            <th className="py-3 px-1 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Produk, index) => (
            <tr className="bg-white border-b" key={Produk._id}>
              <td className="py-3 px-1 text-center">{index + 1}</td>
              <td className="py-3 px-6 font-medium text-gray-900">
                {Produk.nama_barang}
              </td>
              <td className="py-3 px-6">{Produk.stok}</td>
              <td className="py-3 px-6">{Produk.jumlah_terjual}</td>
              <td className="py-3 px-6">{Produk.jenis_barang}</td>
              <td className="py-3 px-6">{Produk.tanggal_transaksi}</td>
              <td className="py-3 px-1 text-center">
                <Link
                  to={`/edit/${Produk._id}`}
                  className="font-medium bg-kuning hover:bg-blue-500 px-3 py-1 rounded text-white mr-1"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(Produk._id)}
                  className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
