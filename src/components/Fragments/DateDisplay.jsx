import React, { useState, useEffect } from "react";

const formatDate = (date) => {
  const options = { weekday: "long", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <p>{formatDate(currentDate)}</p>
    </div>
  );
};

export default DateDisplay;
