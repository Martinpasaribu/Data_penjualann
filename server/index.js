import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
// import Koneksi from "./config/Koneksi.js";

dotenv.config();

const app = express();

app.use(cors(
{
    origin: ["https://www.postman.com","http://localhost:3000","https://alan-resto-one.vercel.app","http://localhost:5000"],
    methods: ["POST", "GET", "PATCH", "DELETE","OPTIONS" ], // Perubahan disini ke 'methods'
    credentials: true,
}));

app.use(express.json());

app.use(express.static("public"));
app.use(ProductRoute);
// app.use(Koneksi);


app.use("/", (req, res) => {
    res.send("Server is running");
});

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...' + process.env.APP_PORT);
});
