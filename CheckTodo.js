import App from './App.js';

const checkTodo = (num, value) => {
  let chkNum = num;
  let chkVal = value;
  let dataTxt;
  let datakTodo;
  let todoList = App.todoList;

  if (chkNum == 'allChk') {
    for (let i = 0; i < todoList.length; i++) {
      dataTxt = todoList[i]['title'];
      App.changeData(i, chkVal, dataTxt);
    }
  } else {
    datakTodo = todoList[chkNum]['complete'];
    dataTxt = todoList[chkNum]['title'];
    let chkValData = chkVal != datakTodo;
    if (chkValData) {
      App.changeData(chkNum, chkVal, dataTxt);
    }
  }
};

export default checkTodo;
