const QuestionBox = ({ questionModal, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-all bg-black/40 z-50 ${
        questionModal
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="min-w-80 bg-[#2C1320] border-2 border-[#8797AF] rounded-2xl p-5 shadow-[0_10px_35px_#00000066]">
        <h3 className="text-center text-[#A7ADC6] text-nowrap text-lg">
          {children}
        </h3>
      </div>
    </div>
  );
};
export default QuestionBox;
