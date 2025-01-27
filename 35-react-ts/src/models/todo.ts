class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    const date = new Date();
    const uniqueId = date.getTime() + Math.floor(Math.random() * 1000);
    this.id = uniqueId.toString();
    this.text = todoText;
  }
}

export default Todo;