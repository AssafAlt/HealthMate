import React, { useState, useEffect } from "react";
import WalkingPanda from "../components/animation/WalkingPanda";

const HelpWaiting = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    // Retrieve items from localStorage on component mount
    const storedItem = JSON.parse(localStorage.getItem("item"));
    if (storedItem) {
      setItem(storedItem);
    }
  }, [item]);
  return (
    <div>
      {item?.status === "ממתין לסיוע" && (
        <h1 className="rtl-grid mt-4 text-8xl md:text-5x xs:text-2xl font-bold text-blue-500">
          בקשתך התקבלה ממתין לעזרה
        </h1>
      )}
      {item?.status === "בטיפול" && (
        <>
          <h1 className="rtl-grid mt-4 text-8xl md:text-5x xs:text-2xl font-bold text-blue-500">
            עזרה בדרך אלייך
          </h1>
          <p className="rtl-grid mt-4 text-6xl md:text-5x  xs:text-2xl font-bold text-blue-500">
            שם מסייע: {item?.helperName}
          </p>
          <p className="rtl-grid mt-4 text-6xl md:text-5x xs:text-2xl font-bold text-blue-500">
            מספר טלפון: {item?.helperPhone}
          </p>
          <WalkingPanda />
        </>
      )}
      {item?.status === "טופל" && (
        <h1 className="rtl-grid mt-4 text-8xl md:text-5x xs:text-2xl font-bold text-blue-500">
          שמחים שהיינו לך HealthMate
        </h1>
      )}
    </div>
  );
};

export default HelpWaiting;
