const { makeAutoObservable } = require("mobx");

class Tasks {
    //стейт
    backlog = [
        {
            id:1,
            name:"buba",
            description:"pipa"
        },
        {
            id:2,
            name:"buba2",
            description:"pipa2"
        },
        {
            id:3,
            name:"buba3",
            description:"pipa3"
        }
    ]
    ready = []
    inProgress = []
    finished = []
    //Наблюдение без запарки
    constructor() {
        makeAutoObservable(this)
    }
    //Экшены

}

export default new Tasks()