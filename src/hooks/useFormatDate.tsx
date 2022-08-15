import { useState, useEffect } from "react";

export const useFormatDate = (begginningDate, finishingDate) => {
  const [month, setMonth] = useState<string>("");

  useEffect(() => {
    const firstMonth = new Date(begginningDate)
      .toLocaleString("default", {
        month: "short",
      })
      .split(".")
      .join("");
    const lastMonth = new Date(finishingDate)
      .toLocaleString("default", {
        month: "short",
      })
      .split(".")
      .join("");

    const firstDay = new Date(begginningDate).getDate();
    const LastDay = new Date(finishingDate).getDate();

    if (firstMonth === lastMonth) {
      setMonth(firstDay + " - " + LastDay + " " + firstMonth);
    } else {
      setMonth(firstDay + " " + firstMonth + " - " + LastDay + " " + lastMonth);
    }
  }, []);

  return month;
};
