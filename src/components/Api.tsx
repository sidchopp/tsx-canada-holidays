import { useState, useEffect } from "react";

//components
import Loading from "./Loading";

//interfaces
import { array } from "../interfaces/Interface";
import ProvinceWiseHolidays from "./ProvinceWiseHolidays";

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

  return (
    <div>
      <ProvinceWiseHolidays provData={provData} />
    </div>
  );
};

export default Api;
