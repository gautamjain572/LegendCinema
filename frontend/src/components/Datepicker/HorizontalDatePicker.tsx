import React, { useState } from "react";
import "./HorizontalDatePicker.css";

const HorizontalDatePicker = ({ startDate, numberOfDays, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const getDates = (start, days) => {
    const dates = [];
    for (let i = 0; i < days; i++) {
      const date = new Date(start);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = getDates(startDate || new Date(), numberOfDays || 30);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  return (
    <div className="horizontal-date-picker">
      {dates.map((date) => {
        const isSelected = selectedDate?.toDateString() === date.toDateString();
        return (
          <div
            key={date.toISOString()}
            className={`date-item ${isSelected ? "selected" : ""}`}
            onClick={() => handleDateClick(date)}
          >
            <span className="day">{date.toLocaleString("default", { weekday: "short" })}</span>
            <span className="date">{date.getDate()}</span>
            <span className="month">{date.toLocaleString("default", { month: "short" })}</span>
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalDatePicker;
