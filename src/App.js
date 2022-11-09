import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import tasks from "./store/tasks";
import { observer } from "mobx-react-lite";

const App = observer(() => {

  //Получение данных из localStorage и распределине по категориям
  const getLocalStorageCards = () => {
    let storage = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      storage[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    }
    //При таком подходе первый объект всегда получается пустым - убираем его
    storage.shift();
    for (let i = 0; i < storage.length; i++) {
      if(storage[i].category === "backlog") {
        tasks.backlog.push(storage[i]);
      } else if(storage[i].category === "ready") {
        tasks.ready.push(storage[i]);
      } else if(storage[i].category === "inProgress") {
        tasks.inProgress.push(storage[i]);
      } else if(storage[i].category === "finished") {
        tasks.finished.push(storage[i]);
      }        
    }
  }
  
  getLocalStorageCards();

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
});

export default App;