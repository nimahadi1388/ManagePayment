import { arc, motion } from "motion/react";

const Sidebar = ({ pageManage, setPageManage }) => {
  return (
    <motion.section
      initial={{ x: 300, y: 50 }}
      animate={{ x: 0, y: 200 }}
      transition={{ duration: 1, path: arc() }}
    >
      <aside className="fixed right-4 z-40! top-1/2 -translate-y-1/2 w-52 bg-[#2C1320] backdrop-blur-3xl border-2 border-[#56667A] rounded-2xl p-3 shadow-[0_10px_30px_#00000040]">
        <div className="text-center border-b border-[#56667A] pb-3 mb-3">
          <div className="text-3xl mb-1">💳</div>
          <h3 className="text-[#A7ADC6] text-lg font-bold">مدیریت مالی</h3>
          <p className="text-[#8797AF] text-sm">پنل کاربری</p>
        </div>

        <nav className="flex flex-col gap-1.5">
          <button
            onClick={() => setPageManage("main")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-pill ${pageManage === "main" ? "bg-[#A7ADC6] text-[#2C1320]! " : "text-[#8797AF]! hover:bg-[#462F43] hover:text-[#A7ADC6]!"} transition-all duration-200  hover:-translate-x-0.75 active:scale-95 cursor-pointer`}
          >
            <span className="text-lg">💰</span>
            <span className="text-[16px]!">هزینه ها</span>
          </button>

          <button
            onClick={() => setPageManage("saveMoney")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-pill ${pageManage === "saveMoney" ? "bg-[#A7ADC6] text-[#2C1320]! " : "text-[#8797AF]! hover:bg-[#462F43] hover:text-[#A7ADC6]!"} transition-all duration-200  hover:-translate-x-0.75 active:scale-95 cursor-pointer`}
          >
            <span className="text-lg">🏦</span>
            <span className="text-[16px]!">پس انداز</span>
          </button>

          <button
            onClick={() => alert('در اپدیت های بعدی باز میشود')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-pill ${pageManage === "shop" ? "bg-[#A7ADC6] text-[#2C1320]! " : "text-[#8797AF]! hover:bg-[#462F43] hover:text-[#A7ADC6]!"} transition-all duration-200  hover:-translate-x-0.75 active:scale-95 cursor-pointer`}
          >
            <span className="text-lg">🛒</span>
            <span className="text-[16px]!">فروشگاه</span>
          </button>

          <button
            onClick={() => alert('در اپدیت های بعدی باز میشود')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-pill ${pageManage === "cards" ? "bg-[#A7ADC6] text-[#2C1320]! " : "text-[#8797AF]! hover:bg-[#462F43] hover:text-[#A7ADC6]!"} transition-all duration-200  hover:-translate-x-0.75 active:scale-95 cursor-pointer`}
          >
            <span className="text-lg">💳</span>
            <span className="text-[16px]!">شماره کارت ها</span>
          </button>

          <button
            onClick={() => alert('در اپدیت های بعدی باز میشود')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-pill ${pageManage === "infoCard" ? "bg-[#A7ADC6] text-[#2C1320]! " : "text-[#8797AF]! hover:bg-[#462F43] hover:text-[#A7ADC6]!"} transition-all duration-200  hover:-translate-x-0.75 active:scale-95 cursor-pointer`}
          >
            <span className="text-lg">ℹ️</span>
            <span className="text-[16px]!">اطلاعات کارت</span>
          </button>
        </nav>
      </aside>
    </motion.section>
  );
};

export default Sidebar;
