import axios from "axios";

const Api = () => {
  const options = {
    method: "GET",
    url: "https://canada-holidays.p.rapidapi.com/api/v1/provinces",
    params: { optional: "false", year: "2022" },
    headers: {
      "X-RapidAPI-Key": "16a6a19bc4mshed2926e4f407384p15a805jsn3c1b8e1b24d6",
      "X-RapidAPI-Host": "canada-holidays.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return <div>Api</div>;
};

export default Api;
