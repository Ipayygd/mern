import Express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(ProductRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server is running on port", process.env.APP_PORT);
});
