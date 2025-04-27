const express = require("express");
const cors = require("cors");
const getBookInfo = require("./scraper");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/search", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Kitap adı girin" });
  }

  try {
    const bookUrl = `https://www.kitapyurdu.com/kitap/${query
      .replace(/\s/g, "-")
      .toLowerCase()}/`;
    const bookData = await getBookInfo(bookUrl);
    res.json(bookData);
  } catch (error) {
    res.status(500).json({ error: "Kitap bilgisi alınamadı" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
