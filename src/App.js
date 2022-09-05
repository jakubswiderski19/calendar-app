import { useState } from "react";
import Calendar from "./components/Calendar";
import Modal from "./components/Modal";
import modalContext from "./contexts/modalContext";



function App() {
  const [year, setYear] = useState(2022);
  const [month, setMonth] = useState(0);
  const [showModal, setShowModal] = useState(false)
  const [modal, setModal] = useState({})



  const colors = ['from-red-500 to-blue-500',
  'from-purple-500 to-sky-500',
  'from-sky-300 to-blue-50',
  'from-sky-50 to-yellow-300',
  'from-yellow-300 to-green-300',
  'from-purple-300 to-fuchsia-200',
  'from-red-500 to-green-500',
  'from-green-300 to-green-500',
  'from-amber-800 to-blue-800',
  'from-cyan-900 to-pink-500',
  'from-yellow-500 to-red-500',
  'from-cyan-700 to-green-700',
  ];

  const events = [
    {
      "date": new Date("2023-1-1"),
      "title": "New year's eve!",
      "description": "Time to celebrate new year!!"
    },
    {
      "date": new Date("2022-12-24"),
      "title": "Christmas eve!",
      "description": "Chrismas eve!"
    },
    {
      "date": new Date("2022-12-19"),
      "title": "Birtday party",
      "description": "My birthday party! Yay!"
    }
  ]


  const calendarChange = (operation) => {
    switch (operation) {
      case "+":
        if (month >= 11){
          setMonth(0);
          setYear(year + 1);
          break;
        }
        setMonth(month + 1);
        break;
      case "-":
        if (month <= 0){
          setMonth(11);
          setYear(year - 1);
          break;
        }
        setMonth(month - 1);
      break;
    }

  }

  const clickModal = (event) =>
    {
        setModal(event);
        setShowModal(!showModal);
    }

  console.log(events);
  

  return (
    <modalContext.Provider value={clickModal}>
      <div className={`animated-background flex bg-gradient-to-r ${colors[month]} h-screen justify-center items-center font-mono `}>
        <button onClick={() => calendarChange("-")} className="shadow-xl flex justify-center items-center rounded-lg p-2 bg-gray-300/[0.1] mr-4 font-black aspect-square transition-all hover:bg-slate-300/[0.3] hover:scale-[1.2]">
          {"<<"}
        </button>
        <Calendar year={year} month={month} events={events}/>
        <button onClick={() => calendarChange("+")} className="shadow-xl flex justify-center items-center rounded-lg p-2 bg-gray-300/[0.1] ml-4 font-black aspect-square transition-all hover:bg-slate-300/[0.3] hover:scale-[1.2]">
          {">>"}
        </button>
        {showModal && <Modal event={modal}/>}
        
      </div>
    </modalContext.Provider>  
  );
}

export default App;
