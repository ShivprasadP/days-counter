import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [timePassed, setTimePassed] = useState({});

  useEffect(() => {
    const startDate = new Date('January 14, 2025 00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now - startDate;

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimePassed({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-3xl">
      <h1 className="text-3xl font-bold mb-4 text-indigo-500">Time Passed Since January 14, 2025</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center bg-indigo-500 p-4 rounded-lg">
          <p className="text-xl font-bold">Years</p>
          <p className="text-lg font-bold text-indigo-300">{timePassed.years}</p>
        </div>
        <div className="text-center bg-indigo-500 p-4 rounded-lg">
          <p className="text-xl font-bold">Months</p>
          <p className="text-lg font-bold text-indigo-300">{timePassed.months}</p>
        </div>
        <div className="text-center bg-indigo-500 p-4 rounded-lg">
          <p className="text-xl font-bold">Days</p>
          <p className="text-lg font-bold text-indigo-300">{timePassed.days}</p>
        </div>
        <div className="text-center bg-indigo-500 p-4 rounded-lg">
          <p className="text-xl font-bold">Hours</p>
          <p className="text-lg font-bold text-indigo-300">{timePassed.hours}</p>
        </div>
        <div className="text-center bg-indigo-500 p-4 rounded-lg">
          <p className="text-xl font-bold">Minutes</p>
          <p className="text-lg font-bold text-indigo-300">{timePassed.minutes}</p>
        </div>
        <div className="text-center bg-indigo-500 p-4 rounded-lg">
          <p className="text-xl font-bold">Seconds</p>
          <p className="text-lg font-bold text-indigo-300">{timePassed.seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;