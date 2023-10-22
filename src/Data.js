import { useState, useEffect } from "react";
import axios from "axios";

function Data() {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchResult = list.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Search Item</h1>
      <input
        placeholder="type to search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <li>
        {searchResult.map((item) => (
          <li key={item}>{item.name}</li>
        ))}
      </li>
    </div>
  );
}

export default Data;
