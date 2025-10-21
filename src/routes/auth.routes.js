import express from "express";

const router = express.Router();

router.post("/sign-up", (req, res) => {
  res.send("post from api/auth/sign-up");
});

router.post("/sign-in", (req, res) => {
  res.send("post from api/auth/sign-in");
});

router.post("/sign-out", (req, res) => {
  res.send("post from api/auth/sign-out");
});

export default router;
