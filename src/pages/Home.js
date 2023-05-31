import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const onClickCheck = () => {
    setIsChecked(!isChecked);
  };
  const onClickOffersHelp = () => {
    if (isChecked) {
      navigate("/offers-help");
    } else {
      document.getElementById("agree").textContent = "יש לאשר את התנאים";
    }
  };
  const onClickNeedsHelp = () => {
    if (isChecked) {
      navigate("/need-help");
    } else {
      document.getElementById("agree").textContent = "יש לאשר את התנאים";
    }
  };
  return (
    <div className="w-full h-screen">
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">HealthMate</h1>

            <div className="w-full flex flex-col py-4">
              <div className="flex flex-col">
                <button className="flex justify-center rounded-full bg-slate-500 text-2xl px-3 py-3 shadow-md">
                  <BsInfoCircle className="text-blue-500 text-4xl pr-2   " />
                  מידע כללי
                </button>
              </div>
              <button
                onClick={onClickOffersHelp}
                className="bg-red-600 py-5 mt-5 mb-2 rounded font-bold"
              >
                אני מעוניינ.ת לעזור
              </button>
              <button
                onClick={onClickNeedsHelp}
                className="bg-red-600 py-5 my-3 rounded font-bold"
              >
                אני צריכ.ה עזרה
              </button>
              <div className="flex justify-center items-center mt-3  ">
                <p className="text-lg">
                  <input
                    onChange={onClickCheck}
                    className="mr-2  "
                    type="checkbox"
                  />
                  קראתי ואני מאשר.ת את תנאי השימוש
                </p>
              </div>
              <div className="mt-2">
                <strong className="text-blue-600 underline">תנאי השימוש</strong>
              </div>

              <div className="flex flex-col">
                <p
                  className="text-red-600 py-3 my-6 rounded font-bold text-xl"
                  id="agree"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
