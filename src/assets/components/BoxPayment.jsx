import { useContext, useState } from "react";

import { motion } from "motion/react";
import QuestionBox from "./QuestionBox";
import { PaymentItemsContext } from "../context/PaymentItemContext";

const BoxPayment = ({ id, paymentTitle, price, isDone }) => {
  const { paymentItems, setPaymentItems, account, setAccount } =
    useContext(PaymentItemsContext);

  const [questionModal, setQuestionModal] = useState();
  const [titleQBox, setTitleQBox] = useState();
  const handleDeleteItem = (id) => {
    const deleteItem = paymentItems.filter((payment) => payment.id !== id);
    setPaymentItems(deleteItem);
  };

  const handleQuestionBox = () => {
    setTimeout(() => {
      setQuestionModal(false);
    }, 2000);
  };
  const handleReduceeMoney = (id) => {
    setPaymentItems(
      paymentItems.map((payment) => {
        if (payment.id == id) {
          if (account < payment.price) {
            setQuestionModal(true);
            handleQuestionBox();
            setTitleQBox("error");
            setAccount(account + 0);
          } else {
            setQuestionModal(true);
            setTitleQBox("success");
            handleQuestionBox();
            setAccount(account - payment.price);
            return {
              ...payment,
              isDone: true,
            };
          }
        }
        return payment;
      }),
    );
  };
  return (
    <motion.section
      initial={{ opacity: 0,translateY:30 }}
      animate={{ opacity: 1 ,translateY:0}}
      exit={{ opacity: 0 ,translateY:30}}
      transition={{ duration: 1 }}
    >
      <motion.div
        key={id}
        className="border-[#56667A] hover:bg-[#462F43] transition-all duration-200 border-t-2"
      >
        <div className="flex items-center text-center min-w-187.5 mx-auto">
          <p className="w-20 mt-3 text-xl">{id}</p>

          <p className="w-40 mt-3 text-xl px-2">{paymentTitle}</p>

          <p className="w-40 mt-3 text-xl">{price} تومان</p>

          <div className="w-40 text-center text-nowrap">
            {isDone ? (
              <span className="bg-green-500 opacity-65 inline-block text-black px-3 py-1 rounded-pill">
                پرداخت شده
              </span>
            ) : (
              <span className="bg-red-500 opacity-65 inline-block text-white px-3 py-1 rounded-pill">
                پرداخت نشده
              </span>
            )}
          </div>

          <div className="w-52 mt-3 mb-3 flex justify-center items-center gap-2">
            {isDone == false ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#00c950"
                viewBox="0 0 24 24"
                className="cursor-pointer transition-transform duration-200 hover:scale-110"
                onClick={() => handleReduceeMoney(id)}
              >
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
                <path d="M12 11c-2 0-2-.63-2-1 0-.48.7-1 2-1 1.18 0 1.39.64 1.4 1.02l1-.02h1c0-1.03-.67-2.47-2.4-2.88V6h-2v1.09C9.03 7.42 8 8.72 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1 0 .42-.62 1-2 1-1.84 0-1.99-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.09c1.97-.33 3-1.63 3-2.91 0-1.12-.52-3-4-3"></path>
              </svg>
            ) : null}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#0dcaf0"
              viewBox="0 0 24 24"
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => handleDeleteItem(id)}
            >
              <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z" />
              <path d="M9 10h2v8H9zm4 0h2v8h-2z" />
            </svg>
          </div>
        </div>
      </motion.div>

      {titleQBox == "success" ? (
        <QuestionBox questionModal={questionModal} titleQBox={titleQBox}>
          پرداخت موفقیت امیز بود
        </QuestionBox>
      ) : (
        <QuestionBox questionModal={questionModal} titleQBox={titleQBox}>
          موجودی کافی نمیباشد
        </QuestionBox>
      )}
    </motion.section>
  );
};
export default BoxPayment;
