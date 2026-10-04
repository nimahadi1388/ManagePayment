import { useState } from "react";
import { motion } from "motion/react";
const FilterSavers = ({ saverItems, setSaverItems }) => {
  const [tageManage, setTagManage] = useState("all");
  const handleFilterSaver = () => {
    setSaverItems(
      saverItems.filter((saver) => {
        if (tageManage == "personal") {
          saver.tage == "شخصی";
          console.log("ddd");
        }
        if (tageManage == "freeTime") {
          saver.tageManage == "تفریح";
        }
        if (tageManage == "personal") {
          saver.tageManage == "شخصی";
        }
        if (tageManage == "personal") {
          saver.tageManage == "شخصی";
        } else {
          return saver;
        }
      }),
    );
  };
  return (
    <motion.section className="absolute max-w-55 top-0 border-[#56667A] border-2 rounded-2xl left-50 z-20 bg-[#2C1321] p-3">
      <div>
        <h3 className="text-center border-[#413C4D] border-b-2 py-2">فیلتر</h3>
        <div>
          <h5 className="text-[#8797AF]! mt-4">نوع پس انداز:</h5>
          <div className="border-[#413C4D] border-b-2 py-2">
            <button
              className="bg-[#3C2B3B] transition hover:brightness-125 m-1 px-3 rounded-pill"
              onClick={() => {
                setTagManage("personal");
                handleFilterSaver();
              }}
            >
              شخصی
            </button>
            <button
              className="bg-[#3C2B3B] transition hover:brightness-125 m-1 px-3 rounded-pill"
              onClick={() => setTagManage("freeTime")}
            >
              تفریح
            </button>
            <button
              className="bg-[#3C2B3B] transition hover:brightness-125 m-1 px-3 rounded-pill"
              onClick={() => setTagManage("force")}
            >
              ضروری
            </button>
            <button
              className="bg-[#3C2B3B] transition hover:brightness-125 m-1 px-3 rounded-pill"
              onClick={() => setTagManage("save")}
            >
              پس انداز
            </button>
            <p className="text-[15px] mt-1">پیش فرض</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="text-[#8797AF]! text-right! mt-3">میزان پول:</h5>
          <input
            placeholder="مقدار مورد نظر وارد کنید..."
            type="number"
            className="bg-[#8797af] w-full placeholder:text-[14px] focus:bg-[#a7adc6] focus:shadow-[#8797af85]! transition-all text-xl px-1 focus-visible:outline-none rounded-xl placeholder:text-[#2c1321]"
          />
        </div>
        <button className="mt-3 w-75 flex justify-center bg-[#A7ADC6] hover:brightness-90 transition mx-auto text-[#2C1320]! rounded-pill py-1">
          اعمال
        </button>
      </div>
    </motion.section>
  );
};
export default FilterSavers;
