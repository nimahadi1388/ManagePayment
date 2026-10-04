import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { PaymentItemsContext } from "../context/PaymentItemContext";

const AddPayment = ({ titleBtn }) => {
  const { modal, setModal } = useContext(ModalContext);
  const { paymentItems, setPaymentItems } = useContext(PaymentItemsContext);
  const [inputValueT, setInputValueT] = useState();
  const [inputValueP, setInputValueP] = useState();
  const handleCloseModal = () => {
    setModal(false);
  };
  const handleAddPayment = (e) => {
    e.preventDefault();
    if (inputValueP && inputValueT) {
      let newPayment = {
        id: paymentItems.length + 1,
        paymentTitle: inputValueT,
        price: inputValueP,
        isDone: false,
      };
      setPaymentItems([...paymentItems, newPayment]);
      setInputValueP("");
      setInputValueT("");
    } else {
      return false;
    }
  };
  return (
    <div
      className={`bg-[#4630446f]! fixed! w-dvw! h-dvh! left-0! top-0! flex justify-center items-center transition-all z-10 duration-300 ease-out ${
        modal == "AddPayment"
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div
        className={`bg-[#2c1321] h-[60dvh] w-2/3 grid place-content-center rounded-4xl
        transition-all duration-300 ease-out
        ${
          modal == "AddPayment"
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-3"
        }`}
      >
        <div className="text-center relative">
          <img
            className="absolute -top-5 -right-15 cursor-pointer transition-transform duration-200 hover:scale-110"
            src="../../../public/image/close.png"
            width={35}
            alt=""
            onClick={handleCloseModal}
          />

          <h2>افزودن هزینه</h2>
        </div>

        <form className="flex flex-col">
          <input
            value={inputValueT}
            className="bg-[#8797af] mt-4 w-110 px-2 py-1.5 focus-visible:outline-none rounded-xl placeholder:text-[#2c1321] focus:shadow-[4px_10px_10px_-5px] focus:bg-[#a7adc6] focus:shadow-[#8797af85]! transition-all"
            type="text"
            placeholder="عنوان هزینه خود را وارد کنید..."
            required
            onChange={(e) => setInputValueT(e.target.value)}
          />

          <input
            value={inputValueP}
            className="bg-[#8797af] mt-4 w-110 px-2 py-1.5 focus-visible:outline-none rounded-xl placeholder:text-[#2c1321] focus:shadow-[4px_10px_10px_-5px] focus:bg-[#a7adc6] focus:shadow-[#8797af85]! transition-all"
            type="number"
            placeholder=" قیمت هزینه خود را وارد کنید..."
            required
            onChange={(e) => setInputValueP(e.target.value)}
          />

          <button
            onClick={handleAddPayment}
            className="bg-[#A7ADC6] w-30 mt-4 mx-auto py-1 rounded-pill cursor-pointer text-[#2c1321]! transition-all duration-200 hover:bg-[#8797AF] hover:scale-105 hover:shadow-[0_0_12px_2px] hover:shadow-[#8797af85]! active:scale-95"
          >
            {titleBtn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPayment;
