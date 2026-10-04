import { useState } from "react";
import HeaderSaveMoney from "../components/HeaderSaveMoney";
import Saver from "../components/Saver";
import { motion } from "motion/react";
import { savers } from "../Data/savers";
const SaveMoney = ({ pageManage }) => {
  const [saveMoneyAccount, setSaveMoneyAccount] = useState(0);
  const [saverItems, setSaverItems] = useState(savers);
  return (
    <div>
      {pageManage === "saveMoney" ? (
        <motion.section
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ translateY: 100 }}
          transition={{ duration: 0.6 }}
        >
          <HeaderSaveMoney saveMoneyAccount={saveMoneyAccount} />
          <Saver
            saverItems={saverItems}
            setSaverItems={setSaverItems}
            saveMoneyAccount={saveMoneyAccount}
            setSaveMoneyAccount={setSaveMoneyAccount}
          />
        </motion.section>
      ) : null}
    </div>
  );
};
export default SaveMoney;
