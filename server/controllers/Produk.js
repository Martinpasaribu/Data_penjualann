import Product from "../models/Produk.js";
import {mongoose} from "mongoose";
import { Types } from "mongoose";



export const GetProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const response = await Product.findOne({ 
      _id: new Types.ObjectId(productId) // Use 'new' keyword here
    });

    if (!response) {
      return res.status(404).json({ msg: 'Produk tidak ditemukan' });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ msg: 'Kesalahan data' });
  }
};

export const TambahProduct = async (req, res) => {
  const { nama_barang, stok, jumlah_terjual, jenis_barang } = req.body;

  try {
    const newProduct = new Product({
      nama_barang,
      stok,
      jumlah_terjual,
      jenis_barang,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


export const HapusProduk = async (req, res) => {
  const productId = req.params.id;

  try {
    // Validasi ID
    const isValidObjectId = mongoose.Types.ObjectId.isValid(productId);

    if (!isValidObjectId) {
      return res.status(400).json({ msg: 'ID produk tidak valid' });
    }

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ msg: 'Produk tidak ditemukan' });
    }

    res.status(200).json({ msg: 'Produk berhasil dihapus', deletedProduct });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ msg: 'Terjadi kesalahan saat menghapus produk' });
  }
};


  export const EditProduct = async (req, res) => {
    const productId = req.params.id;
    const { nama_barang, stok, jumlah_terjual, jenis_barang } = req.body;
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $set: {
          nama_barang: nama_barang,
          stok: stok,
          jumlah_terjual: jumlah_terjual,
          jenis_barang: jenis_barang,
        },
      },
      { new: true }
    );

  
      if (!updatedProduct) {
        return res.status(404).json({ msg: 'Produk tidak ditemukan' });
      }
      
      res.status(200).json({ msg: 'Produk berhasil diperbarui', updatedProduct });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  