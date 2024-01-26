import Product from "../models/Produk.js";
import {mongoose} from "mongoose";
import { Types } from "mongoose";


export const Cari = async (req, res) => {
  try {
    const { nama_barang, jenis_barang } = req.query;

    const results = await Product.find({
        $or: [
        { nama_barang: { $regex: new RegExp(nama_barang, 'i') } },
        { jenis_barang: { $regex: new RegExp(jenis_barang, 'i') } }
      ] // Pencarian case-insensitive
    });

    res.status(200).json(results);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ msg: 'Kesalahan data' });
  }
};

export const Transaksi = async (req, res) => {
  const { jenis_barang } = req.params;
  try {
    const terbanyak = await Product.findOne({ jenis_barang }).sort({ jumlah_terjual: -1 });
    const terendah = await Product.findOne({ jenis_barang }).sort({ jumlah_terjual: 1 });
    res.json({ terbanyak, terendah });
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan server');
  }
};

export const Dates = async (req, res) => {
  const { start, end } = req.query;
  console.log('Received start:', start);
  console.log('Received end:', end);

  try {
    const filteredTransaksi = await Product.find({
      date: { $gte: new Date(start), $lte: new Date(end) },
    });

    res.json(filteredTransaksi);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const Transaksii = async (req, res) => {
  const { jenis_barang } = req.params;
  const { start, end } = req.query;

  try {
    const filter = { jenis_barang };

    if (start && end) {
      filter.tanggal = { $gte: new Date(start), $lte: new Date(end) };
    }

    const dataTransaksi = await Product.find(filter);
    res.json(dataTransaksi);
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan server');
  }
};