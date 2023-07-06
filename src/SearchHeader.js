import "./App.css";
import { useState } from "react";

function SearchHeader({ search }) {
  const [value, setValue] = useState("");

  const handleFromSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="main-header">
      <form onSubmit={handleFromSubmit}>
        <label>Search 10 Images</label>
        <input value={value} onChange={handleChange}></input>
      </form>
    </div>
  );
}

export default SearchHeader;
