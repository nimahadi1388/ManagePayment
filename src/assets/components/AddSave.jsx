import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import CloseBtn from "../../../public/image/close.png";
const AddSaver = ({ saverItems, setSaverItems }) => {
  const { modal, setModal } = useContext(ModalContext);
  const [inputT, setInputT] = useState();
  const [inputP, setInputP] = useState();
  const [btnManager, setBtnManager] = useState("");
  const [subtitleManger, setSubtitleManager] = useState();
  const handleSubmitNewSaver = (e) => {
    let inputPTrim = inputP.trim();
    let inputTTrim = inputT.trim();
    e.preventDefault();
    if (btnManager && inputPTrim && inputTTrim) {
      let newSaver = {
        id: length + 1,
        title: inputT,
        amount: inputP,
        currentAmount: 0,
        tage: btnManager,
      };
      setSaverItems([...saverItems, newSaver]);
      setInputP("");
      setInputT("");
      setBtnManager("");
      alert('پس انداز جدید باز شد')
    } else {
      alert("لطفا مقدار مورد نظر را وارد کنید");
    }
  };
  return (
    <>
      <div
        className={`bg-[#4630446f]! fixed! w-dvw! h-dvh! left-0! top-0! flex justify-center items-center transition-all z-10 duration-300 ease-out ${
          modal == "AddSaver"
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className={`bg-[#2c1321] min-h-[70dvh] w-2/3 grid place-content-center rounded-4xl
        transition-all duration-300 ease-out
        ${
          modal == "AddSaver"
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-3"
        }`}
        >
          <div className="text-center relative">
            <img
              onClick={() => setModal(false)}
              className="absolute -top-5 -right-15 cursor-pointer transition-transform duration-200 hover:scale-110"
              src={CloseBtn}
              width={35}
              alt=""
            />

            <h2>پس انداز جدید</h2>
          </div>

          <form className="flex flex-col">
            <input
              onChange={(e) => setInputT(e.target.value)}
              value={inputT}
              className="bg-[#8797af] mt-4 w-110 px-2 py-1.5 focus-visible:outline-none rounded-xl placeholder:text-[#2c1321] focus:shadow-[4px_10px_10px_-5px] focus:bg-[#a7adc6] focus:shadow-[#8797af85]! transition-all"
              type="text"
              placeholder="عنوان پس انداز خود را وارد کنید..."
              required
            />

            <div>
              <input
                onChange={(e) => {
                  setInputP(e.target.value);
                  setSubtitleManager(true);
                }}
                value={inputP}
                className="bg-[#8797af] mt-4 w-110 px-2 py-1.5 focus-visible:outline-none rounded-xl placeholder:text-[#2c1321] focus:shadow-[4px_10px_10px_-5px] focus:bg-[#a7adc6] focus:shadow-[#8797af85]! transition-all"
                type="number"
                placeholder="مبلغ پس انداز خود را وارد کنید..."
                required
              />
              <p
                className={`text-center mt-3 mb-0 ${inputP && subtitleManger ? "block" : "hidden"}`}
              >
                {inputP} تومان
              </p>
            </div>
            <h4 className="text-center mt-4">نوع پس انداز:</h4>
            <div className="text-center space-x-11! mt-3 flex ">
              <div className="flex items-center">
                <label className="ml-2!">شخصی</label>
                <input
                  type="radio"
                  name="tages"
                  onChange={() => {
                    setBtnManager("شخصی");
                  }}
                  className={`appearance-none w-4 h-4 rounded-full border-2 border-[#8797AF] ${btnManager ? "checked:border-[#A7ADC6] checked:bg-[#A7ADC6] checked:shadow-[inset_0_0_0_3px_#2C1320]" : "checked:bg-transparent"} cursor-pointer transition-all duration-200  hover:border-[#A7ADC6]`}
                />
              </div>
              <div className="flex items-center">
                <label className="ml-2!">ضروری</label>
                <input
                  type="radio"
                  name="tages"
                  onChange={() => {
                    setBtnManager("ضروری");
                  }}
                  className={`appearance-none w-4 h-4 rounded-full border-2 border-[#8797AF] ${btnManager ? "checked:border-[#A7ADC6] checked:bg-[#A7ADC6] checked:shadow-[inset_0_0_0_3px_#2C1320]" : "checked:bg-transparent"} cursor-pointer transition-all duration-200  hover:border-[#A7ADC6]`}
                />
              </div>
              <div className="flex items-center">
                <label className="ml-2!">تفریح</label>
                <input
                  type="radio"
                  name="tages"
                  onChange={() => {
                    setBtnManager("تفریح");
                  }}
                  className={`appearance-none w-4 h-4 rounded-full border-2 border-[#8797AF] ${btnManager ? "checked:border-[#A7ADC6] checked:bg-[#A7ADC6] checked:shadow-[inset_0_0_0_3px_#2C1320]" : "checked:bg-transparent"} cursor-pointer transition-all duration-200  hover:border-[#A7ADC6]`}
                />
              </div>

              <div className="flex items-center">
                <label className="ml-2!"> پس انداز</label>
                <input
                  type="radio"
                  name="tages"
                  onChange={() => {
                    setBtnManager("پس انداز");
                  }}
                  className={`appearance-none w-4 h-4 rounded-full border-2 border-[#8797AF] ${btnManager ? "checked:border-[#A7ADC6] checked:bg-[#A7ADC6] checked:shadow-[inset_0_0_0_3px_#2C1320]" : "checked:bg-transparent"} cursor-pointer transition-all duration-200  hover:border-[#A7ADC6]`}
                />
              </div>
            </div>
            <button
              onClick={handleSubmitNewSaver}
              className="bg-[#A7ADC6] w-30 mt-4 mx-auto py-1 rounded-pill cursor-pointer text-[#2c1321]! transition-all duration-200 hover:bg-[#8797AF] hover:scale-105 hover:shadow-[0_0_12px_2px] hover:shadow-[#8797af85]! active:scale-95"
            >
              افزودن
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddSaver;
