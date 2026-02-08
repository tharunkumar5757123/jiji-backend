import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/* ✅ TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Jiji backend is running 🚀");
});

app.post("/ask-jiji", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const { data: resources, error } = await supabase
    .from("resources")
    .select("title, type, url");

  if (error) {
    return res.status(500).json({ error: "Failed to fetch resources" });
  }
const clean = (str) => str?.trim();
  res.json({
  answer:
    "RAG stands for Retrieval Augmented Generation. It combines retrieving external knowledge with generative models for better answers.",
  resources: {
    ppt: resources
      .filter(r => clean(r.type) === "ppt")
      .map(r => ({
        title: clean(r.title),
        type: clean(r.type),
        url: clean(r.url),
      })),
    video: resources
      .filter(r => clean(r.type) === "video")
      .map(r => ({
        title: clean(r.title),
        type: clean(r.type),
        url: clean(r.url),
      })),
  },
});
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
