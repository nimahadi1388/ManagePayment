import { useRef } from "react";
import BoxSaver from "./BoxSaver";
import AddSaver from "./AddSave";
// import FilterSavers from "./FilterSavers";
const Saver = ({
  saverItems,
  setSaverItems,
  saveMoneyAccount,
  setSaveMoneyAccount,
}) => {
  const amoutSave = useRef();
  return (
    <section className="flex flex-col justify-center items-center">
      <input
        ref={amoutSave}
        className="bg-[#8797af] w-[65%] mt-4 grid place-content-center focus:bg-[#a7adc6] focus:shadow-[#8797af85]! transition-all px-2 py-1 focus-visible:outline-none rounded-xl placeholder:text-[#2c1321] focus:shadow-[4px_10px_10px_-5px]"
        type="number"
        placeholder="مبلغ پس انداز را وارد کنید...."
      />
      <div className="scroll grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 overflow-y-auto h-[600rem] w-[70%] mx-auto mt-3 p-3 items-center ">
        {saverItems.map((saver) => (
          <BoxSaver
            amoutSave={amoutSave}
            key={saver.id}
            id={saver.id}
            title={saver.title}
            amount={saver.amount}
            currentAmount={saver.currentAmount}
            tage={saver.tage}
            saverItems={saverItems}
            setSaverItems={setSaverItems}
            saveMoneyAccount={saveMoneyAccount}
            setSaveMoneyAccount={setSaveMoneyAccount}
          />
        ))}
        {/* <FilterSavers saverItems={saverItems} setSaverItems={setSaverItems} /> */}
        <AddSaver/>
      </div>
    </section>
  );
};
export default Saver;
