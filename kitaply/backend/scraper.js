const axios = require("axios");
const cheerio = require("cheerio");

const getBookInfo = async (bookUrl) => {
  try {
    const { data } = await axios.get(bookUrl);
    const $ = cheerio.load(data);

    // Kitap başlığı
    const title = $("h1.product-title").text().trim();

    // Yazar
    const author = $("span[itemprop='author']").text().trim();

    // Fiyat
    const price = $(".product-price").text().trim();

    return {
      title,
      author,
      price,
    };
  } catch (error) {
    console.error("Error fetching book info:", error);
    throw new Error("Kitap bilgisi alınamadı");
  }
};

module.exports = getBookInfo;
