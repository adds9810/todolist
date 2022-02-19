const btn = document.getElementById('button-addon2');
const inputArea = document.getElementById('todoTxt');
const todoList = [];
const todoArea = document.querySelector('.list-group');
//let todoData;
let todoHtml;
let todoTxt;

function init() {
  create();
  addEvent();
  //localStorage.clear();
}
function create() {
  //getTodo();
}
function addEvent() {
  btn.addEventListener('click', setTodo);
  inputArea.addEventListener('keyup', function () {
    if (window.event.keyCode == 13) {
      setTodo();
    }
  });
}
// 할일 가져오기
function getTodo() {
  todoHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    todoHtml += `<label class="list-group-item d-flex gap-2">
                     <input class="form-check-input flex-shrink-0" type="checkbox" value="" checked>
                       ${i}.
                     <small class="d-block text-muted">${todoList[i]}</small>
                   </label>`;
  }
  todoArea.innerHTML = todoHtml;
}
// 할일등록
function setTodo() {
  todoTxt = inputArea.value;
  if (todoTxt == '') {
    alert('할일을 등록해 주세요!');
  } else {
    todoList.push(todoTxt);
    getTodo();
  }
}
// 할일취소
// 할일수정
// 할일삭제

init();
