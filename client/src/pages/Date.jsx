import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

export const Date = () => {
    const [dataTransaksiKonsumsi, setDataTransaksiKonsumsi] = useState(null);
    const [dataTransaksiPembersih, setDataTransaksiPembersih] = useState(null);
    const [endDate, setEndDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const [isDateSelected, setIsDateSelected] = useState(false);

  
    const fetchDataByJenisBarang = async (jenis_barang, setDataTransaksi, start, end) => {
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:5000/transaksi/${jenis_barang}?start=${start}&end=${end}`);
          setDataTransaksi(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
    

    // Memanggil fungsi fetchDataByJenisBarang pada saat komponen dimount dan ketika startDate atau endDate berubah
    useEffect(() => {
        fetchDataByJenisBarang('Konsumsi', setDataTransaksiKonsumsi, startDate, endDate);
        fetchDataByJenisBarang('Pembersih', setDataTransaksiPembersih, startDate, endDate);
      }, [startDate, endDate]);
    

  return (
    <div className='bg-gray-300'>
            <div className='pt-10 ml-10 flex '>
            <Link
                to="/"
                className="bg-ungukeren hover:bg-ungukeren border border-slate-200 text-white font-bold py-2 px-4 rounded-lg"
            >
            Kembali
            </Link>

            <div>
                            {/* Formulir untuk memilih rentang waktu */}
          <form className='mb-4'>
          <label>
            Tanggal Mulai:
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </label>
          <label className='ml-4'>
            Tanggal Akhir:
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </label>
        </form>
            </div>
        </div>
    <div className='flex justify-center gap-5 h-screen items-center bg-gray-300'>
     
      <div className='flex flex-col items-center h-40'>


        <h1 className='mb-5 font-bold text-ijo'>Konsumsi</h1>
        {dataTransaksiKonsumsi && dataTransaksiKonsumsi.terbanyak  &&  dataTransaksiKonsumsi.terendah && (
          <div>
            <table className='text-center mx-10'>
            <thead className='text-md '>
            <tr className='border-b-2 border-black mx-5'>
              <th className='bg- text-ungukeren px-5 ' colSpan="4">
                Penjualan Terbanyak
              </th>

            </tr>
            <tr className='bg-white'>
            
              <th className=' px-5'  >
              Nama Barang
              </th>   
              <th className=' px-5' >
              Stok 
              </th> 
              <th className='px-5' >
              Terjual
              </th> 
            </tr>
            
          </thead>
              <tbody>
                <tr className=' text-ungukeren font-bold '>
                  <td className='px-5'>{dataTransaksiKonsumsi.terbanyak.nama_barang}</td>

                  <td className='px-5'>{dataTransaksiKonsumsi.terbanyak.stok}</td>
                  <td className='px-5'>{dataTransaksiKonsumsi.terbanyak.jumlah_terjual}</td>
                </tr>
              </tbody>
              <thead className='pb-5'>
              <tr className='border-b-2 border-black mx-5'>
                <th className='bg- text-red-600 pt-10' colSpan="4">
                    Penjualan Terendah
                </th>
              </tr>
              <tr className='bg-white'>
                
                  <th className='0 px-5' >
                  Nama Barang
                  </th>   
                  <th className=' px-5' >
                  Stok 
                  </th> 
                  <th className=' px-5' >
                  Terjual
                  </th> 
              </tr>
              </thead>
              <tbody className='pb-10'>
                <tr className='text-red-600 font-bold'>
                  <td className='px-5'>{dataTransaksiKonsumsi.terendah.nama_barang}</td>
                  
                  <td className='px-5'>{dataTransaksiKonsumsi.terendah.stok}</td>
                  <td className='px-5'>{dataTransaksiKonsumsi.terendah.jumlah_terjual}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className='flex flex-col items-center h-40'>
      <h1 className='mb-5 font-bold text-ijo'>Pembersih</h1>
      {dataTransaksiPembersih && dataTransaksiPembersih.terbanyak  &&  dataTransaksiPembersih.terendah && (
        <div>
          <table className='text-center mx-5 text-md'>
          <thead className='text-md '>
            <tr className='border-b-2 border-black mx-5'>
                <th className='bg- text-ungukeren px-5 ' colSpan="4">
                Penjualan Terbanyak
                </th>

            </tr>
            <tr className='bg-white'>
            
                <th className=' px-5'  >
                Nama Barang
                </th>   
                <th className=' px-5' >
                Stok 
                </th> 
                <th className='px-5' >
                Terjual
                </th> 
            </tr>
            
            </thead>
            <tbody className='pb-4'>
              <tr className=' text-ungukeren font-bold '>
                <td className='px-5'>{dataTransaksiPembersih.terbanyak.nama_barang}</td>
               
                <td className='px-5'>{dataTransaksiPembersih.terbanyak.stok}</td>
                <td className='px-5'>{dataTransaksiPembersih.terbanyak.jumlah_terjual}</td>
              </tr>
            </tbody>
            <thead className='pb-5'>
            <tr className='border-b-2 border-black mx-5'>
              <th className='bg- text-red-600 pt-10 ' colSpan="4">
                  Penjualan Terendah
              </th>
            </tr>
            <tr className='bg-white'>
              
                <th className='0 px-5' >
                Nama Barang
                </th>   
                <th className=' px-5' >
                Stok 
                </th> 
                <th className=' px-5' >
                Terjual
                </th> 
            </tr>
            </thead>
            <tbody>
              <tr className='text-red-600 font-bold'>
                <td className='px-5'>{dataTransaksiPembersih.terendah.nama_barang}</td>
           
                <td className='px-5'>{dataTransaksiPembersih.terendah.stok}</td>
                <td className='px-5'>{dataTransaksiPembersih.terendah.jumlah_terjual}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      </div>
    </div>
    </div>
  );
};