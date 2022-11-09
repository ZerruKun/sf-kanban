import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;