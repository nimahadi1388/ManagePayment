import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import FilterPayment from "./FilterPayments";
import { FilterToggleContext } from "../context/FilterToggleContext";
import { PaymentItemsContext } from "../context/PaymentItemContext";
import { motion } from "motion/react";

import BoxPayment from "./BoxPayment";
const Payments = ({ pageManage }) => {
  const { paymentItems } = useContext(PaymentItemsContext);
  const { filterToggle, setFilterToggle } = useContext(FilterToggleContext);
  const [radioState, setRadioState] = useState("all");
  const { setModal } = useContext(ModalContext);
  const handleOpenModal = () => {
    setModal('AddPayment');
  };
  const filterPayment = paymentItems.filter((payment) => {
    if (radioState == "all") return true;
    if (radioState == "payDone") return payment.isDone;
    if (radioState == "payNotDone") return !payment.isDone;
  });
  const handleToggleFilter = () => {
    setFilterToggle(!filterToggle);
  };
  return (
    <>
      {pageManage === "main" ? (
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ translateY: 100 }}
          transition={{ duration: 1 }}
          className={`w-1/2! max-[1377px]:w-[55%]! max-[1281px]:w-[60%]! mx-auto mt-3`}
        >
          <h2 className="text-center titleUnder mb-1">هزینه ها</h2>

          <div className="flex justify-between items-end">
            <button
              onClick={handleOpenModal}
              className="rounded-top-pill bg-[#A7ADC6] transition-all relative z-0 duration-200 hover:bg-[#8797AF] hover:translate-y-0.5 active:translate-y-5 text-[#2C1320]! px-4 py-1.5 text-[17px]! mt-1"
            >
              افزودن هزینه
            </button>

            <button
              onClick={handleToggleFilter}
              className="rounded-top-pill bg-[#8797AF] transition-all duration-200 relative hover:bg-[#A7ADC6] hover:translate-y-0.5 active:translate-y-5 text-[#2C1320]! px-4 py-1.5 text-[17px]! mt-1"
            >
              فیلتر
            </button>
          </div>

          <section className="border-[#8797af] border-2 rounded-b-2xl overflow-x-hidden z-1 relative shadow-[0_8px_20px_#2C132055]">
            <div className="min-w-187.5 mx-auto bg-[#837C96] py-2 sticky! top-0! z-5">
              <div className="flex items-center text-center">
                <h4 className="w-20 mt-2 text-[#2C1320]!">ردیف</h4>

                <h4 className="w-40 mt-2 text-[#2C1320]!">عنوان هزینه</h4>

                <h4 className="w-40 mt-2 text-[#2C1320]!">قیمت</h4>

                <h4 className="w-40 mt-2 text-[#2C1320]!">وضعیت</h4>

                <h4 className="w-52 mt-2 text-[#2C1320]!">دکمه ها</h4>
              </div>
            </div>

            <div className="h-70! scroll">
              {filterPayment.map((payment) => (
                <BoxPayment
                  key={payment.id}
                  id={payment.id}
                  paymentTitle={payment.paymentTitle}
                  price={payment.price}
                  isDone={payment.isDone}
                />
              ))}
            </div>
          </section>
          <FilterPayment setRadioState={setRadioState} />
        </motion.div>
      ) : null}
    </>
  );
};

export default Payments;
