const todoList = [];
const btn = document.getElementById('button-addon2');
const inputArea = document.getElementById('todoTxt');
const todoArea = document.querySelector('.list-group');
const delBtn = document.querySelectorAll('.btn.btn-secondary');
const AlldelBtn = document.getElementById('button-addon3');

function init() {
  initEvent();

  function initEvent() {
    btn.addEventListener('click', createTodo);
    inputArea.addEventListener('keyup', keyup);
    AlldelBtn.addEventListener('click', allDelete);
  }

  function keyup() {
    if (window.event.keyCode == 13) {
      createTodo();
    }
  }
  function createTodo() {
    let todoTxt = inputArea.value;
    setData(todoTxt);
    return 'todo complete';
  }
  function onDraw() {
    let todoHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      todoHtml += `<div class="row">
            <label class="list-group-item d-flex gap-2 col-sm-8">
              <input class="form-check-input flex-shrink-0" type="checkbox" value="" checked>
                 ${i}.
              <small class="d-block text-muted">${todoList[i]}</small>
            </label>
            <div class="col-sm-4 " style="padding: 0.5rem 1rem;">
            <button type="button" class="btn btn-secondary" data-num="${i}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
          </button>
            </div>
           </div>
             `;
    }
    todoArea.innerHTML = todoHtml;
    return 'todoFun getData complete';
  }
  function setData(data) {
    if (data == '') {
      alert('할일을 등록해 주세요!');
      return false;
    } else {
      todoList.push(data);
      onDraw();
      return 'todoFun setData complete';
    }
  }
  function delTodo(num) {
    let delNum = num;
    if (delNum == 'All') {
      //전체삭제
      todoList.length = 0;
    } else {
      // 희망하는 목록
    }
    onDraw();
  }
  function allDelete() {
    let delAlert = confirm('정말로 삭제하시겠습니까?');
    if (delAlert == true) {
      let num = 'All';
      delTodo(num);
    } else {
      return false;
    }
  }
}

init();
