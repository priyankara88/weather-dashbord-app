import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_DB_URL as string)
  .then(() => {
    console.log("Database Conected");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => console.error("Database Error:", err));
