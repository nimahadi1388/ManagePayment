import { useContext } from "react";
import { PaymentItemsContext } from "../context/PaymentItemContext";

const TopApp = () => {
  const { account } = useContext(PaymentItemsContext);

  return (
    <div className="text-center mt-4 mx-auto w-fit min-w-70 px-8 py-4 bg-[#2C1320] border border-[#56667A] rounded-2xl shadow-[0_8px_25px_#2C132055] transition-all duration-300 hover:border-[#8797AF] hover:-translate-y-1">
      <h4 className="flex items-center justify-center gap-2 text-[#8797AF] mb-2">
        <span className="text-xl">💳</span>
        موجودی کارت
      </h4>

      <div className="border-t border-[#56667A] pt-3">
        <h1 className="text-[#A7ADC6] text-3xl font-bold">
          {account}
          <span className="text-base font-normal text-[#8797AF] mr-2">
            تومان
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TopApp;
