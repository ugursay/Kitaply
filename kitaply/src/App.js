import { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [book, setBook] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("Lütfen kitap adı girin");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5000/search?query=${query}`
      );
      setBook(response.data);
    } catch (error) {
      console.error("Arama sırasında hata oluştu:", error);
      alert("Kitap bilgisi alınamadı");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <nav className="bg-blue-600 p-4 text-white text-center text-2xl font-bold rounded">
        📚 Book Price Comparison
      </nav>

      <div className="mt-10 flex flex-col items-center">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Kitap adı girin..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 rounded-l-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
          >
            Ara
          </button>
        </form>

        {book && (
          <div className="mt-8 w-full max-w-md">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Kitap Bilgisi:</h2>
              <p>
                <strong>Başlık:</strong> {book.title}
              </p>
              <p>
                <strong>Yazar:</strong> {book.author}
              </p>
              <p>
                <strong>Fiyat:</strong> {book.price}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
