
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export const Cari = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cari',{
            params: {
                nama_barang: searchQuery,
                jenis_barang: searchQuery // Gantilah ini dengan nilai yang sesuai jika jenis konsumsi tidak diambil dari searchQuery
              }
        }); 
        setSearchResults(response.data);
    }
        catch (error) {
        console.error('Error searching products:', error);
      }
    };
  


    const deleteProduct = async (productId) => {
        try {
          await axios.delete(`http://localhost:5000/hapusproduk/${productId}`);
        
        } catch (error) {
          console.error("Error deleting product:", error.message);
          // Lakukan sesuatu jika terjadi kesalahan saat menghapus produk,
          // seperti menampilkan pesan kepada pengguna atau melakukan penanganan lebih lanjut.
        }
      };
      
    return (
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari produk..."
        />
        <button onClick={handleSearch}>Cari</button>
  
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
        {searchResults.length > 0 ? (
      
      
        <tbody>
        {searchResults.map((Produk, index) => (
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
        ) : (
          <p>Tidak ada produk ditemukan.</p>
        )}
      </table>      

          <div>
          <Link
          to="/"
          className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg"
        >
         menu
        </Link>
          </div>
      </div>
    );
  };

  