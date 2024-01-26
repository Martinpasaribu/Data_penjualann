
import mongoose from "mongoose";
import { Schema } from "mongoose";
import {Koneksi} from "../config/Koneksi.js"

const productSchema = new Schema(
    {
        id: {
          type: String,
          default: () => new mongoose.Types.ObjectId(),
        },
        nama_barang: {
          type: String,
          required: true,
        },
        stok: {
          type: Number,
          required: true,
        },
        jumlah_terjual: {
          type: Number,
          default: 0,
        },
        tanggal_transaksi: {
          type: Date,
          default: Date.now,
        },
        jenis_barang: {
          type: String,
          required: true,
        },
      },
      {
        timestamps: true,
        collection: 'Produk',
      }
      
      );

const Product = Koneksi.model('produk',productSchema);
export default  Product;