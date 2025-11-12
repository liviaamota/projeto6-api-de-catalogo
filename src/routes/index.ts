import express from "express";
import produtosRouter from "./produtos";


const router = express.Router();
router.use("/produtos", produtosRouter)

router.use("/ping", (req, res) => {
  router.get("/", (req, res) => {
    res.json({ pong: true });
  });
});

router.get("/", (req, res) => {
  let nome: string = "Thierry";
  let idade: number = 16;
  res.json({ nome, idade });
});

export default router;
