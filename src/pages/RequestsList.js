import React, { useState, useEffect } from "react";
import RequestCard from "../components/RequestCard";

const RequestsList = () => {
  const [item, setItem] = useState();

  useEffect(() => {
    // Retrieve items from localStorage on component mount
    const storedItem = JSON.parse(localStorage.getItem("item"));
    if (storedItem) {
      setItem(storedItem);
    }
  }, [item]);
  return (
    <div>
      {/*items?.map((request) => (
        <RequestCard props={request} />
      ))*/}
      {item && <RequestCard props={item} setItem={setItem} />}
    </div>
  );
};

export default RequestsList;
