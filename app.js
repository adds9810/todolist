const App = {
  init() {
    this.todoList = [];
    this.selectorCache();
    this.initEvent();
  },
  selectorCache() {
    this.btn = document.getElementById('button-addon2');
    this.inputArea = document.getElementById('todoTxt');
    this.todoArea = document.querySelector('.list-group');
    this.delBtn = doncument.querySelectorAll('.btn.btn-secondary');
  },
  initEvent() {
    this.btn.addEventListener('click', this.createTodo);
    this.inputArea.addEventListener('keyup', this.keyup);
    for (let i = 0; i < todoList.lenth; i++) {
      delBtn[i].addEventListener('click', this.delTodo);
    }
  },
  keyup() {
    if (window.event.keyCode == 13) {
      this.createTodo();
    }
  },
  createTodo() {
    let todoTxt = this.inputArea.value;
    this.setData(todoTxt);
    return 'todo complete';
  },
  onDraw() {
    let todoHtml = '';
    for (let i = 0; i < this.todoList.length; i++) {
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
    this.todoArea.innerHTML = todoHtml;
    return 'todoFun getData complete';
  },
  setData(data) {
    if (data == '') {
      alert('할일을 등록해 주세요!');
      return false;
    } else {
      this.todoList.push(data);
      this.onDraw();
      return 'todoFun setData complete';
    }
  },
  delTodo() {
    // 할일삭제
  },
};

App.init();
