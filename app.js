'use strict';
const btn = document.getElementById('button-addon2');
const inputArea = document.getElementById('todoTxt');
const todoList = [];
const todoArea = document.querySelector('.list-group');
let todoData;
let todoHtml;
let todoTxt;
let txt;

btn.addEventListener('click', todo);
inputArea.addEventListener('keyup', function () {
  if (window.event.keyCode == 13) {
    todo();
  }
});

export function todo() {
  todoTxt = inputArea.value;
  txt = new todoFun(todoTxt);
  txt.setData();
  return 'todo complete';
}
export function todoFun(data) {
  this.data = data;
  // 할일 가져오기
  this.getData = () => {
    todoHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      todoHtml += `<label class="list-group-item d-flex gap-2">
                       <input class="form-check-input flex-shrink-0" type="checkbox" value="" checked>
                         ${i}.
                       <small class="d-block text-muted">${todoList[i]}</small>
                     </label>`;
    }
    todoArea.innerHTML = todoHtml;
    return 'todoFun getData complete';
  };
  // 할일등록
  this.setData = () => {
    if (this.data == '') {
      alert('할일을 등록해 주세요!');
      return false;
    } else {
      todoList.push(this.data);
      this.getData();
      return 'todoFun setData complete';
    }
  };
}
// 할일취소
// 할일수정
// 할일삭제
