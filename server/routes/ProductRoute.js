import express from "express";

import { TambahProduct, GetProduct} from "../controllers/Produk.js";

const router = express.Router();

router.get('/getproduct', GetProduct);
router.post('/tambahproduk', TambahProduct);




// router.post('/save-bill', SaveBill);


export default router;