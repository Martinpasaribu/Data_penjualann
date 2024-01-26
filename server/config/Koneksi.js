import {mongoose} from 'mongoose';

mongoose.connect('mongodb+srv://data-produku:Martin1208__+@data.fczjtnr.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: 'data-produku', // Ganti dengan nama pengguna MongoDB jika diperlukan
  pass: 'Martin1208__+', // Ganti dengan kata sandi MongoDB jika diperlukan
});

export const Koneksi = mongoose.connection;

Koneksi.on('error', (err) => {
  console.error('Koneksi ke database gagal: ', err);
});

Koneksi.once('open', () => {
  console.log('Koneksi ke database berhasil');
  // Lakukan operasi yang diperlukan setelah berhasil terhubung ke database di sini
});
