import { useContext } from "react";
import { FilterToggleContext } from "../context/FilterToggleContext";
const FilterPayment = ({ setRadioState }) => {
  const { filterToggle } = useContext(FilterToggleContext);

  return (
    <div
      className={`bg-[#2C1320] absolute top-[40%] left-35 border-[#8797AF] border-2 p-3 rounded-2xl transition-all duration-300 ease-out ${
        filterToggle
          ? "opacity-100 visible scale-100 translate-y-0"
          : "opacity-0 invisible scale-95 -translate-y-3 pointer-events-none"
      }`}
    >
      <h3 className="text-center text-[#A7ADC6] border-b border-[#8797AF] pb-2">
        فیلتر هزینه ها
      </h3>

      <div>
        <h5 className="text-center text-[#8797AF]! mt-3 border-b border-[#56667A] pb-2">
          وضعیت
        </h5>

        <form className="bg-[#2C1320]! border-0 mt-2">
          <div className="flex items-center">
            <input
              onClick={() => setRadioState("all")}
              id="all"
              type="radio"
              name="status"
              value="all"
              defaultChecked
              className="appearance-none w-4 h-4 rounded-full border-2 border-[#8797AF] cursor-pointer transition-all duration-200 checked:border-[#A7ADC6] checked:bg-[#A7ADC6] checked:shadow-[inset_0_0_0_3px_#2C1320] hover:border-[#A7ADC6]"
            />
            <label htmlFor="all" className="mr-2 mb-1 cursor-pointer">
              همه
            </label>
          </div>

          <div className="flex items-center">
            <input
              onClick={() => setRadioState("payDone")}
              id="done"
              type="radio"
              name="status"
              value="done"
              className="appearance-none w-4 h-4 rounded-full border-2 border-[#8797AF] cursor-pointer transition-all duration-200 checked:border-[#A7ADC6] checked:bg-[#A7ADC6] checked:shadow-[inset_0_0_0_3px_#2C1320] hover:border-[#A7ADC6]"
            />
            <label htmlFor="done" className="mr-2 mb-1 cursor-pointer">
              پرداخت شده
            </label>
          </div>

          <div className="flex items-center">
            <input
              onClick={() => setRadioState("payNotDone")}
              id="notDone"
              type="radio"
              name="status"
              value="notDone"
              className="appearance-none w-4 h-4 rounded-full border-2 border-[#8797AF] cursor-pointer transition-all duration-200 checked:border-[#A7ADC6] checked:bg-[#A7ADC6] checked:shadow-[inset_0_0_0_3px_#2C1320] hover:border-[#A7ADC6]"
            />
            <label htmlFor="notDone" className="mr-2 mb-1 cursor-pointer">
              پرداخت نشده
            </label>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default FilterPayment;
