export class Model{
    user;
    items;

    constructor(){
        this.user = "Çınar";
        this.items = [
            new TodoItem("spor",false),
            new TodoItem("kahvaltı",true),
            new TodoItem("kitap okuma",false),
            new TodoItem("sinema",true),
            new TodoItem("bakım",false),
          ];
    }
}


export class TodoItem{
    description;
    action;


    constructor(description: string, action: boolean){
        this.description = description;
        this.action = action;
    }

}
