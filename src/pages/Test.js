import React, { useState, useEffect } from "react";
import RequestCard from "../components/RequestCard";

const Test = () => {
  const [items, setItems] = useState([]);
  const [isClicked, setIsClicked] = useState();
  useEffect(() => {
    // Retrieve items from localStorage on component mount
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);
  return (
    <div className="w-full flex justify-end">
      {items?.map((request) => (
        <button onClick={() => setIsClicked(true)}>
          <RequestCard className="ml-auto w-full" props={request} />
        </button>
      ))}
    </div>
  );
};

export default Test;
