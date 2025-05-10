import { useState } from "react";
import Api from "./components/Api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import ProvinceWiseHolidays from "./components/ProvinceWiseHolidays";
import { ApiData } from "./interfaces/Interface";

function App() {
  const { loading, provData }: ApiData = Api();
  const [english, setEnglish] = useState(true);

  const toggleLanguage = () => setEnglish((prev) => !prev);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div>
      <Header english={english} toggleLanguage={toggleLanguage} />
      <ProvinceWiseHolidays provData={provData} english={english} />
      <Footer />
    </div>
  );
}

export default App;
