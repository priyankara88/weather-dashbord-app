import express from "express";
import cors from "cors";
import widgetRoutes from "./routes/widgets";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/widgets", widgetRoutes);

export default app;
