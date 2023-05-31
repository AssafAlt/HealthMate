import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const NeedHelp = () => {
  //const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [isProf, setIsProf] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      fullName: "",
      phone: "",
      requestContent: "",
      location: "עמדה מספר 2",
      estimatedTime: "",
      status: "ממתין לסיוע",
    },
  });

  const onClickIsProf = () => {
    setIsProf(!isProf);
  };

  /*useEffect(() => {
    // Retrieve items from localStorage on component mount
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);*/

  const onSubmit = (data) => {
    /*const updatedItems = [...items, data];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));*/
    data.isProfessional = isProf ? "כן" : "לא";

    localStorage.setItem("item", JSON.stringify(data));
    navigate("/waiting");
  };

  return (
    <div className="w-full h-screen">
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-12">
            <h1 className="text-3xl font-bold">בקשה לסיוע</h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              className="w-full flex flex-col py-4"
            >
              <input
                className="p-3 my-2 bg-gray-700 rouded rtl-grid"
                type="text"
                placeholder="כותרת"
                {...register("title")}
              />

              <input
                className="p-3 my-2 bg-gray-700 rouded rtl-grid"
                type="text"
                placeholder="שם מלא"
                {...register("fullName")}
              />
              <input
                className="p-3 my-2 bg-gray-700 rouded rtl-grid"
                type="text"
                placeholder="מספר פלאפון"
                {...register("phone")}
              />
              <textarea
                className=" p-3 bg-gray-700 my-2 rtl-grid"
                placeholder="תיאור הבקשה"
                {...register("requestContent")}
              />
              <input
                className="p-3 my-2 bg-gray-700 rouded rtl-grid"
                type="number"
                step={1}
                placeholder="זמן מוערך לסיוע בדקות"
                {...register("estimatedTime")}
              />
              <p className="p-3 my-2 bg-gray-700 text-right">
                <input
                  onClick={onClickIsProf}
                  className="mr-2  "
                  type="checkbox"
                />
                הבעיה דורשת איש מקצוע
              </p>

              <button className="bg-blue-600 py-3 my-6 rounded font-bold">
                הוסף אותי לרשימה
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
