import React, { useEffect, useState } from "react";

export const ReservationSection = () => {
  // State variables to store form values
  const [date, setDate] = useState("2024-05-15");
  const [time, setTime] = useState("06:26");
  const [option, setOption] = useState(""); // Default option

  useEffect(() => {
    // Check if the URL has a hash and navigate to the corresponding section
    const hash = window.location.hash;
    if (hash === "#reserve") {
      const reserveSection = document.getElementById("reserve");
      if (reserveSection) {
        reserveSection.scrollIntoView();
      }
    }
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the form values as needed (e.g., submit them to a backend server)
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Option:", option);
  };

  return (
    <div
      id="reserve"
      className="bg-[url(/public/ReservationImage.jpg)] h-[500px] bg-cover bg-center flex justify-center items-center"
    >
      <div className="text-white flex justify-center items-center h-full flex-col">
        <div className="mb-10">
          <h1 className="mt-5 mb-[10px] font-medium text-3xl">
            Make a Reservation
          </h1>
        </div>
        <div className="p-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 border border-white rounded-sm w-[300px]"
          >
            <input
              type="date"
              id="datepicker"
              name="datepicker"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-12 underline text-black px-1 w-full"
            />
            <input
              type="time"
              id="timepicker"
              name="timepicker"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="h-12 underline text-black px-1 w-full"
            />
            <select
              id="dropdown"
              name="dropdown"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="h-12 text-black underline"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <button type="submit" className="bg-black h-12">
              Find a table
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
