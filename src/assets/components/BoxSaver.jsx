import { useContext, useState } from "react";
import { PaymentItemsContext } from "../context/PaymentItemContext";
import { motion } from "motion/react";
import Personal from "../../../public/image/clothes.png";
import Essential from "../../../public/image/essential.png";
import FreeTime from "../../../public/image/freeTime.png";
import SaveMoney from "../../../public/image/saveMoney.png";
const BoxSaver = ({
  amoutSave,
  id,
  title,
  amount,
  tage,
  saverItems,
  setSaverItems,
  currentAmount,
  saveMoneyAccount,
  setSaveMoneyAccount,
}) => {
  const { account, setAccount } = useContext(PaymentItemsContext);
  const [openOptions, setOpenOptions] = useState(false);
  const handleOpenOption = () => {
    setOpenOptions(!openOptions);
    console.log(openOptions);
  };
  const handleDeleteMoney = (id) => {
    let deleteSaver = saverItems.filter((saver) => saver.id !== id);
    setSaverItems(
      deleteSaver,
      saverItems.map((saver) => {
        if (saver.id == id) {
          setSaveMoneyAccount((saveMoneyAccount -= saver.currentAmount));
          return {
            ...saver,
            currentAmount: setAccount((currentAmount += account)),
          };
        }
        return saver;
      }),
    );
  };
  const handleAddMoney = (id) => {
    if (amoutSave.current.value) {
      if (currentAmount >= amount) {
        alert("قلک شما پر است");
        return false;
      } else {
        if (account < Number(amoutSave.current.value)) {
          alert("موجودی کافی نمی باشد");
          return false;
        } else {
          setAccount(account - Number(amoutSave.current.value));
          setSaverItems(
            saverItems.map((saver) => {
              if (id === saver.id) {
                return {
                  ...saver,
                  currentAmount: (currentAmount += Number(
                    amoutSave.current.value,
                  )),
                };
              }
              return saver;
            }),
          );
          setSaveMoneyAccount(
            saveMoneyAccount + Number(amoutSave.current.value),
          );
          amoutSave.current.value = null;
        }
      }
    } else {
      alert("لطفا مقدار درست وارد نمایید");
      return false;
    }
  };
  const handleClaimMoney = (id) => {
    if (amoutSave.current.value) {
      if (amoutSave.current.value > currentAmount) {
        alert("قلک شما خالی است");
        return false;
      } else {
        if (account < Number(amoutSave.current.value)) {
          alert("موجودی کافی نمی باشد");
          return false;
        } else {
          setAccount(account + Number(amoutSave.current.value));
          setSaverItems(
            saverItems.map((saver) => {
              if (id === saver.id) {
                return {
                  ...saver,
                  currentAmount: (currentAmount -= Number(
                    amoutSave.current.value,
                  )),
                };
              }
              return saver;
            }),
          );
          setSaveMoneyAccount(
            saveMoneyAccount - Number(amoutSave.current.value),
          );
          amoutSave.current.value = null;
        }
      }
    } else {
      alert("لطفا مقدار درست وارد نمایید");
      return false;
    }
  };
  return (
    <motion.section className="relative z-2">
      <div
        onClick={() => {
          // handleAddMoney(id);
          handleOpenOption();
        }}
        className="mx-auto hoverBox border cursor-pointer bg-transparent min-h-40 grid place-content-center border-white mt-4 p-[2.6rem] w-50 rounded-circle"
      >
        {tage === "شخصی" && <img src={Personal} alt="" />}
        {tage === "تفریح" && <img src={FreeTime} alt="" />}
        {tage === "ضروری" && <img src={Essential} alt="" />}
        {tage === "پس انداز" && <img src={SaveMoney} alt="" />}
        <span className="text-[#8797af] text-center bg-[#8797af2e] backdrop-blur-2xl px-1 py-0.5 rounded-1">
          {tage}
        </span>
      </div>
      <motion.section
        className={`opacity-100 relative transition -z-10 duration-200 ${openOptions ? "opacity-100!" : "opacity-0!"}`}
      >
        <div
          onClick={() => {
            handleClaimMoney(id);
          }}
          className={`absolute   transition-all duration-500 ${openOptions ? "-translate-x-5 -translate-y-50" : "-translate-x-37   -translate-y-30"}    flex flex-col items-center`}
        >
          <button className="bg-success hover:scale-110 transition duration-150 p-1.5 rounded-circle">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/request-money.png"
              alt="request-money"
            />
          </button>
          <p>برداشت</p>
        </div>
        <div
          onClick={() => {
            handleAddMoney(id);
          }}
          className={`absolute   1transition-all! duration-500 ${openOptions ? "translate-x-2 -translate-y-30" : "-translate-x-37  -translate-y-30"} flex flex-col items-center`}
        >
          <button className="bg-secondary hover:scale-110 transition duration-150 p-1.5 rounded-circle">
            <img
              className="object-fit-cover p-0.5"
              width="30"
              height="30"
              src="https://img.icons8.com/external-gradak-royyan-wijaya/48/FFFFFF/external-add-balance-gradak-finance-gradak-royyan-wijaya.png"
              alt="external-add-balance-gradak-finance-gradak-royyan-wijaya"
            />
          </button>
          <p>پرداخت</p>
        </div>
        <div
          onClick={() => {
            handleDeleteMoney(id);
          }}
          className={`absolute   transition-all duration-500  ${openOptions ? "-translate-x-6 -translate-y-8" : "-translate-x-37  -translate-y-30"} flex flex-col items-center`}
        >
          <button className="bg-danger hover:scale-110 transition duration-150 p-1.5 rounded-circle">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/sf-regular/48/FFFFFF/filled-trash.png"
              alt="filled-trash"
            />
          </button>
          <p>حذف</p>
        </div>
      </motion.section>

      <h3 className="text-center my-2 mx-auto">{title}</h3>
      <p className="fs-5 text-center">
        <span>{currentAmount} تومان</span>/<span>{amount} تومان</span>
      </p>
    </motion.section>
  );
};
export default BoxSaver;
