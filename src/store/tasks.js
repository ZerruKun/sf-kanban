const { makeAutoObservable } = require("mobx");

class Tasks {
  //Стейт

  //Массивы с задачами
  backlog = [];
  ready = [];
  inProgress = [];
  finished = [];

  //Название (name) задачи для инпута Submit
  taskName = "";

  //Observe activated!
  constructor() {
    makeAutoObservable(this);
  }

  //Экшены

  //Добавление новой задачи в массив
  addCard(name) {
    if(name.trim() === "") {
        return this.taskName = "";
    }
    //Привоение id. Удаление карточки отсутсвует, поэтому данный способ считаю уместным
    let nextId = this.backlog.length + this.ready.length + this.inProgress.length + this.finished.length + 1;
    let newCard = {id:nextId, category:"backlog", name:name.trim(), description:"There is no description"};
    this.backlog.push(newCard);
    localStorage.setItem(`${nextId}`, JSON.stringify(newCard));
    this.taskName = "";
  }

  //Для управляемого инпута в Submit
  setTaskName(task) {
    this.taskName = task;
  }

  //Переноса задачи из предыдущего списка в текущий, запись изменений в localStorage.
  chooseCard(el, title, addTo, deleteFrom) {
    el.category = title.toLowerCase().replace(/[^a-zA-Z]+(.)/g, (m, chr) => chr.toUpperCase());
    addTo.push(el);
    localStorage.setItem(`${el.id}`, JSON.stringify({id:el.id, category:el.category, name:el.name, description:el.description}));
    for (var i = 0; i < deleteFrom.length; i++) {
      if (deleteFrom[i].id === el.id) {
        deleteFrom.splice(i, 1);
        i--;
      };
    }
  }
}

export default new Tasks();