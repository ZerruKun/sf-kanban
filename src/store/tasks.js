const { makeAutoObservable } = require("mobx");

class Tasks {
  //стейт
  backlog = [
    {
      id: 1,
      name: "buba",
      description: "pipa",
    },
    {
      id: 2,
      name: "buba2",
      description: "pipa2",
    },
    {
      id: 3,
      name: "buba3",
      description: "pipa3",
    },
  ];
  ready = [];
  inProgress = [];
  finished = [];
  taskName = "";
  //Наблюдение без запарки
  constructor() {
    makeAutoObservable(this);
  }
  //Экшены
  addCard(id, name) {
    if(name.trim() === "") {
        return this.taskName = "";
    }
    this.backlog.push({id:id, name:name.trim(), description:"There is no description"});
    this.taskName = "";
  }

  setTaskName(task) {
    this.taskName = task;
  }

  chooseCard(el, addTo, deleteFrom) {
    addTo.push(el);
    for (var i = 0; i < deleteFrom.length; i++) {
      if (deleteFrom[i].id === el.id) {
        deleteFrom.splice(i, 1);
        i--;
      };
    }
  }
}

export default new Tasks();