import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const HeaderSaveMoney = ({ saveMoneyAccount }) => {
  const { setModal,modal } = useContext(ModalContext);
  return (
    <section>
      <div className="headerSaver container">
        <div className=" mt-10 flex justify-evenly items-center">
          <button
            onClick={() => {
              setModal("AddSaver");
              console.log(modal);
              
            }}
            className="bg-[#A7ADC6] text-[#2C1320]! p-2 rounded-pill transition hover:brightness-90 flex items-center"
          >
            پس انداز جدید
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#2C1320"
                viewBox="0 0 24 24"
              >
                <path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path>
              </svg>
            </span>
          </button>
          <p className="m-0">
            مقدر کل پس انداز:
            <span className="text-[#A7ADC6]">{saveMoneyAccount} تومان</span>
          </p>
          <button
            onClick={() => alert("بزودی باز میشود")}
            className="bg-[#A7ADC6] px-4 text-[#2C1320]! p-2 rounded-pill transition hover:brightness-90 flex items-center"
          >
            فیلتر
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#2C1320"
                viewBox="0 0 24 24"
              >
                <path d="M20 2H4c-.55 0-1 .45-1 1v2c0 .22.07.43.2.6L9 13.33V21a1 1 0 0 0 1 1c.15 0 .31-.04.45-.11l4-2A1 1 0 0 0 15 19v-5.67l5.8-7.73c.13-.17.2-.38.2-.6V3c0-.55-.45-1-1-1m-1 2.67-5.8 7.73c-.13.17-.2.38-.2.6v5.38l-2 1V13c0-.22-.07-.43-.2-.6L5 4.67V4h14z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default HeaderSaveMoney;
