// import "./App.css";

import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <nav className="bg-blue-600 p-4 text-white text-center text-2xl font-bold rounded">
        {" "}
        📚 Kitaply ile Fiyatlar Tam Karşında
      </nav>
      <div className="mt-10 flex flex-col items-center">
        <form className="flex">
          <input
            type="text"
            placeholder="kitap adı girin..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 rounded-1-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
