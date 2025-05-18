import "dotenv/config"
import express from "express"
import { toNodeHandler } from "better-auth/node"
import { auth } from "./lib/auth"
import cors from "cors"

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.all('/api/auth/*', toNodeHandler(auth))
app.use(express.json());

app.listen(process.env.PORT, ()=> {
    console.log(`Server listening on PORT: ${process.env.PORT} ✅`)
})