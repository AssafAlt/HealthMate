import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/*title: "",
      fullName: "",
      phone: "",
      requestContent: "",
      estimatedTime: "",*/
const RequestCard = ({ props, setItem }) => {
  const [isFullDetailed, setIsFullDetailed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const onClickCheck = () => {
    setIsChecked(!isChecked);
  };

  const onClickHelp = () => {
    if (props.isProfessional === "כן" && !isChecked) {
      document.getElementById("agree-prof").textContent =
        "יש לאשר שהנך בעל מקצוע רלוונטי";
      return;
    }
    const storedHelper = JSON.parse(localStorage.getItem("helper"));
    var storedItem = JSON.parse(localStorage.getItem("item"));
    storedItem.status = "בטיפול";
    storedItem.helperName = storedHelper.fullName;
    storedItem.helperPhone = storedHelper.phone;
    localStorage.setItem("item", JSON.stringify(storedItem));
  };
  const onClickFinish = () => {
    var storedItem = JSON.parse(localStorage.getItem("item"));
    storedItem.status = "טופל";
    localStorage.setItem("item", JSON.stringify(storedItem));
    setItem(storedItem);
    navigate("/thanks");
  };
  return (
    <div className="w-full mx-auto flex justify-end">
      <div className="bg-white shadow-md border border-blue-200 rounded-lg mb-5">
        <div className="p-5 ">
          <h5 className="text-gray-900 font-bold rtl-grid tracking-tight mb-2 text-sm text-right">
            <p className=" text-5xl rtl-grid  text-gray-700">
              שם: {props?.fullName}
            </p>
          </h5>
          <p className="font-normal rtl-grid text-3xl text-gray-700 mb-3 text-right">
            מספר: {props?.phone}
          </p>
          <p className="font-normal rtl-grid text-3xl text-gray-700 mb-3 text-right">
            כותרת: {props?.title}
          </p>
          <p className="font-normal rtl-grid text-3xl text-gray-700 mb-3 text-right">
            נדרש איש מקצוע: {props?.isProfessional}
          </p>
          {isFullDetailed && (
            <>
              <p className="font-normal rtl-grid text-3xl text-gray-700 mb-3 text-right">
                תיאור הבקשה: {props?.requestContent}
              </p>
              <p className="font-normal rtl-grid text-3xl text-gray-700 mb-3 text-right">
                זמן מוערך בדקות: {props?.estimatedTime}
              </p>
              <p className="font-normal rtl-grid text-3xl text-gray-700 mb-3 text-right">
                מיקום: {props?.location}
              </p>
            </>
          )}
          <p className="font-normal rtl-grid text-3xl text-gray-700 mb-3 text-right">
            סטטוס: {props?.status}
          </p>
          {!isFullDetailed && (
            <button
              className="text-black"
              onClick={() => setIsFullDetailed(true)}
            >
              לפרטים מלאים
            </button>
          )}
          {isFullDetailed && !props.helperName && (
            <>
              {props.isProfessional === "כן" && (
                <p className="text-xl font-normal text-right">
                  <input
                    onClick={onClickCheck}
                    className="mr-2  "
                    type="checkbox"
                  />
                  הנני מאשר שאני איש מקצוע רלוונטי
                </p>
              )}
              <p
                className="text-red-600 py-3 my-6 rounded font-bold text-xl"
                id="agree-prof"
              ></p>

              <div className="flex justify-start">
                <button
                  onClick={onClickHelp}
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                >
                  יכול לעזור
                </button>
              </div>
            </>
          )}
          {isFullDetailed && props.helperName && (
            <>
              <>
                <p className="font-normal rtl-grid text-3xl text-gray-700 mb-3 text-right">
                  שם מסייע: {props?.helperName}
                </p>
                <p className="font-normal rtl-grid text-3xl text-gray-700 mb-3 text-right">
                  טלפון מסייע: {props?.helperPhone}
                </p>
                <div className="flex justify-start">
                  <button
                    onClick={onClickFinish}
                    className="bg-green-600 py-3 my-6 rounded font-bold"
                  >
                    סיימתי לעזור
                  </button>
                </div>
              </>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
