import { useState, useEffect } from "react";

const Api = () => {
  const getResponse = async () => {
    const response = await fetch(
      "https://canada-holidays.p.rapidapi.com/api/v1/provinces?optional=false&year=2022",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "16a6a19bc4mshed2926e4f407384p15a805jsn3c1b8e1b24d6",
          "X-RapidAPI-Host": "canada-holidays.p.rapidapi.com",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getResponse();
  }, []);

  return <div>Api</div>;
};

export default Api;
