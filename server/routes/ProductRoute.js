import express from "express";

import { TambahProduct, GetProduct , EditProduct , HapusProduk, getProductById} from "../controllers/Produk.js";
import {Cari , Transaksi,Transaksii, Dates} from "../controllers/CU_TR.js"
const router = express.Router();

router.get('/getproduct', GetProduct);
router.delete('/hapusproduk/:id',HapusProduk);
router.patch('/editproduk/:id', EditProduct);
router.get('/editproduk/:id', getProductById);
router.post('/tambahproduk', TambahProduct);
router.get('/cari', Cari);
router.get('/transaksi/:jenis_barang', Transaksi);
router.get('/transaksii/:jenis_barang', Transaksii);
router.get('/date', Dates)



// router.post('/save-bill', SaveBill);


export default router;