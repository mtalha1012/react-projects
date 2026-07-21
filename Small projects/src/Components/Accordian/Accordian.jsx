import { useState } from "react";
import "../../App.css";
import { data } from "./data.js";

export default function Accordian() {
  const [multiple, setMultiple] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  function handleClick(id) {
    if (multiple) {
      setSelectedIds((prev) =>
        prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
      );
    } else {
      setSelectedIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  }

  return (
    <div className="wrapper">
      <button 
      className="single-button"
      onClick={() => setMultiple((prev) => !prev)}>
        {multiple ? "Single Selection" : "Multiple Selection"}
      </button>

      {data && data.length > 0 ? (
        data.map((item) => {
          const isOpen = selectedIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="item"
              onClick={() => handleClick(item.id)}
            >
              <h2>{item.question}</h2>
              <span>{isOpen ? "−" : "+"}</span>
              {isOpen && <h3>{item.answer}</h3>}
            </div>
          );
        })
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}