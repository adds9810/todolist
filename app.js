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
  },
  initEvent() {
    this.btn.addEventListener('click', this.createTodo);
    this.inputArea.addEventListener('keyup', this.keyup);
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
      todoHtml += `<label class="list-group-item d-flex gap-2">
                     <input class="form-check-input flex-shrink-0" type="checkbox" value="" checked>
                       ${i}.
                     <small class="d-block text-muted">${this.todoList[i]}</small>
                   </label>`;
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
};

App.init();
