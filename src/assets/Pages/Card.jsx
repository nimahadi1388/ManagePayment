import { motion } from "motion/react";

const Card = ({ pageManage }) => {
  return (
    <>
      {pageManage === "saveMoney" ? (
        <motion.section
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ translateY: 100 }}
          transition={{ duration: 0.6 }}
        >
          
        </motion.section>
      ) : null}
    </>
  );
};
export default Card;
