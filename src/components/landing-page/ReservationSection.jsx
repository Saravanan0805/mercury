import React, { useState } from "react";

export const ReservationSection = () => {
  // State variables to store form values
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [option, setOption] = useState(""); // Default option

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the form values as needed (e.g., submit them to a backend server)
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Option:", option);
  };

  return (
    <div className="bg-[url(/public/Actionbg.jpg)] h-[500px] bg-cover flex justify-center items-center">
      <div className="text-white flex justify-center items-center h-full flex-col">
        <div className="mb-10">
          <h1 className="mt-5 mb-[10px] font-medium text-3xl">Make a reservation</h1>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 border border-white rounded-sm w-[300px]">
            <input type="date" id="datepicker" name="datepicker" value={date} onChange={(e)=>setDate(e.target.value) } className="h-12 underline" />
            <input type="time" id="timepicker" name="timepicker"  value={time} onChange={(e)=> setTime(e.target.value)} className="h-12 underline" />
            <select id="dropdown" name="dropdown" value={option} onChange={(e=>setOption(e.target.value))} className="h-12 text-black underline">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <button type="submit" className="bg-black h-12">Find a table</button>
          </form>
        </div>
      </div>
    </div>
  );
};
