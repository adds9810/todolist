import App from './App.js';
import MESSAGES from './messages.js';

const editTodo = (num) => {
  let editNum = num;
  let editRow = document.querySelectorAll(`.list-group .row`)[editNum];
  let editArea = editRow.children[0];
  let editBtn = editRow.children[1].children[0];
  let delBtn = editRow.children[1].children[1];
  let editBtnList = editBtn.classList;
  let delBtnList = delBtn.classList;
  editArea.innerHTML = App.todoEditInput(editNum);
  editRow.children[0].children[0].focus();
  editBtnList.remove('btn-primary');
  editBtnList.add('btn-success');
  delBtnList.remove('btn-secondary');
  delBtnList.add('btn-outline-secondary');
  //console.log(`${editNum}번째 수정버튼 입니다.`);
};
const setEditTodo = (num) => {
  let todoList = App.todoList;
  let setEditVal = todoList[num]['complete'];
  let editInput =
    document.querySelectorAll(`.list-group .row`)[num].children[0].children[0]
      .value;
  let editComfirm = confirm(MESSAGES['editComfirmTxt']);
  if (editComfirm) {
    if (todoList[num]['title'] != editInput) {
      App.changeData(num, setEditVal, editInput);
    }
  }
};
const cancelEdit = () => {
  let calcelEditComfirm = confirm(MESSAGES['calcelEditComfirm']);
  if (calcelEditComfirm) {
    App.onDraw();
  }
};
export { editTodo, setEditTodo, cancelEdit };
