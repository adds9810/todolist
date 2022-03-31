import App from './App.js';
import MESSAGES from './messages.js';
let delNum;
let todoList;

const delTodo = (num) => {
  delNum = num;
  todoList = App.todoList;
  if (delNum == 'All') {
    //전체삭제
    todoList.length = 0;
  } else {
    // 클릭한 것만 삭제
    let delConfirm = confirm(MESSAGES['delConfirmTxt']);
    if (delConfirm == true) {
      todoList.splice(delNum, App.currIdx);
    } else {
      return false;
    }
  }
  App.onDraw();
};

const deleteAll = () => {
  todoList = App.todoList;
  if (todoList.length == 0) {
    alert(MESSAGES[delNoTxt]);
  } else {
    let allDelConfirm = confirm(MESSAGES['delAllTxt']);
    if (allDelConfirm == true) {
      delNum = 'All';
      App.delTodo(delNum);
    } else {
      return false;
    }
  }
};
export { delTodo, deleteAll };
