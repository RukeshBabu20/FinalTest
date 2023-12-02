import express from "express";
import dbConnnection from "./database/database";
import cors from "cors";
import router from "./routes/cartRoute";
const app = express();
const PORT = 5000;

dbConnnection();
app.use(express.json());
app.use(cors());

app.use("/eCart/admin", router);

app.listen(PORT, () => {
  console.log(`Server Running on port number: ${PORT}`);
});
