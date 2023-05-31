import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const OffersHelp = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("helper", JSON.stringify(data));
    navigate("/requests");
  };

  return (
    <div className="w-full h-screen">
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[450px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">מעוניינ.ת לעזור</h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              className="w-full flex flex-col py-4"
            >
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

              <button className="bg-blue-600 py-3 my-6 rounded font-bold">
                עבור לרשימת בקשות לסיוע
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersHelp;
