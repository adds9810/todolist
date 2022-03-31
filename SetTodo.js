import App from './App.js';
let todoList;
const createTodo = () => {
  let todoTxt = App.inputArea.value;
  App.setData(todoTxt);
};
const setData = (data) => {
  if (data == '') {
    alert(MESSAGES['setAlertTxt']);
    return false;
  } else {
    App.todoList.push(App.listData(data, 'false'));
    App.onDraw();
  }
};
const onDraw = () => {
  let todoHtml = '';
  todoList = App.todoList;
  console.log(todoList);
  let todoLeng = todoList.length;
  let checkVal;
  for (let i = 0; i < todoLeng; i++) {
    todoHtml += App.todoTemplete(i);
  }
  if (todoLeng > 1) {
    for (let i = 0; i < todoLeng; i++) {
      if (todoList[i]['complete'] == true) {
        checkVal = 'checked';
      } else {
        checkVal = '';
        break;
      }
    }
    todoHtml += App.allChkbox(checkVal);
  }
  App.todoArea.innerHTML = todoHtml;
  localStorage.clear();
  localStorage.setItem('todoList', JSON.stringify(todoList));
  console.log(localStorage.getItem('todoList'));
};

export { createTodo, setData, onDraw };
