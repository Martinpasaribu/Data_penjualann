import Product from "../models/Produk.js";



export const GetProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: error.message });
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

