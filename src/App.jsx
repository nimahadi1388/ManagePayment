import { useState } from "react";
import Payments from "./assets/components/Payment";
import { PaymentItems } from "./assets/Data/payments";
import { PaymentItemsContext } from "./assets/context/PaymentItemContext";
import Sidebar from "./assets/components/BtnSection";
import TopApp from "./assets/components/TopApp";
import AddPayment from "./assets/components/AddPayment";
import { ModalContext } from "./assets/context/ModalContext";
import { FilterToggleContext } from "./assets/context/FilterToggleContext";
import { motion } from "motion/react";
import SaveMoney from "./assets/Pages/SaveMoney";
const App = () => {
  const [paymentItems, setPaymentItems] = useState(PaymentItems);
  const [account, setAccount] = useState(14000);
  const [modal, setModal] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);
  const [pageManage, setPageManage] = useState("saveMoney");
  return (
    <>
      <FilterToggleContext.Provider
        value={{
          filterToggle,
          setFilterToggle,
        }}
      >
        <PaymentItemsContext.Provider
          value={{ paymentItems, setPaymentItems, account, setAccount }}
        >
          <ModalContext.Provider value={{ modal, setModal }}>
            <motion.div
              initial={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <TopApp />
            </motion.div>

            <Sidebar pageManage={pageManage} setPageManage={setPageManage} />

            <Payments pageManage={pageManage} />
            <SaveMoney pageManage={pageManage} />
            <AddPayment titleBtn={"افزودن"} />
          </ModalContext.Provider>
        </PaymentItemsContext.Provider>
      </FilterToggleContext.Provider>
    </>
  );
};
export default App;
