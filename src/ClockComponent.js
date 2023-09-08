import React, { useState, useEffect } from "react";

const ClockComponent = () => {
  const [timeValue, setTimeValue] = useState(new Date());

  useEffect(() => {
    const interval = setTimeout(() => {
      setTimeValue(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeValue]);

  const hours = String(timeValue.getHours()).padStart(2, "0");
  const minutes = String(timeValue.getMinutes()).padStart(2, "0");
  const seconds = String(timeValue.getSeconds()).padStart(2, "0");

  return (
    <>
      <p>
        Time : {`${hours}`}: {`${minutes}`} : {`${seconds}`}
      </p>
    </>
  );
};

export default ClockComponent;
