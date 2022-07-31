import { useState, useEffect } from "react";

//components
import Loading from "./Loading";

//interfaces
import { array } from "../interfaces/Interface";

const Api = () => {
  const [provData, setProvData] = useState(array);
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    try {
      const data = await response.json();
      const { provinces } = data;
      setProvData(provinces);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  {
    console.log(provData);
  }

  return (
    <div>
      {provData.map((province) => {
        return (
          <div key={province.id}>
            <h1>{province.nameEn}</h1>

            {province.holidays.map((holiday) => {
              return (
                <div key={holiday.id}>
                  <h3>{holiday.date}</h3>
                  <p>{holiday.nameEn}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Api;
