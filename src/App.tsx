import Api from "./components/Api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import ProvinceWiseHolidays from "./components/ProvinceWiseHolidays";
import { ApiData } from "./interfaces/Interface";

function App() {
  const { loading, provData }: ApiData = Api();

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div>
      <Header />
      <ProvinceWiseHolidays provData={provData} />
      <Footer />
    </div>
  );
}

export default App;
