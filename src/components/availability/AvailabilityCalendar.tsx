"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function AvailabilityCalendar() {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className="app-card p-4 md:p-6">
      <Calendar onChange={(value) => setDate(value as Date)} value={date} />
    </div>
  );
}
