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
    this.AlldelBtn = document.getElementById('button-addon3');
  },
  initEvent() {
    this.btn.addEventListener('click', this.createTodo.bind(this));
    this.inputArea.addEventListener('keyup', this.keyup.bind(this));
    this.AlldelBtn.addEventListener('click', this.allDelete.bind(this));
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
        <small class="d-block text-muted">${this.todoList[i]}</small>
      </label>
      <div class="col-sm-4 " style="padding: 0.5rem 1rem;">
      <button type="button" class="btn btn-secondary" id="delBtn${i}" data-list="${i}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    </button>
      </div>
     </div>
       `;
    }
    this.todoArea.innerHTML = todoHtml;
    for (let i = 0; i < this.todoList.length; i++) {
      document
        .getElementById(`delBtn${i}`)
        .addEventListener('click', this.delTodo.bind(this));
    }
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
  allDelete() {
    if (this.todoList.length == 0) {
      alert('삭제할 할 일이 없습니다.');
    } else {
      let allDelAlert = confirm('모두 할일을 삭제하시겠습니까?');
      if (allDelAlert == true) {
        let num = 'All';
        this.delTodo(num);
      } else {
        return false;
      }
    }
  },
  delTodo(num) {
    let delNum = num;
    if (delNum == 'All') {
      //전체삭제
      this.todoList.length = 0;
    } else {
      // 클릭한 것만 삭제
      let delAlert = confirm('정말로 삭제하시겠습니까?');
      if (delAlert == true) {
        let eElm = event.currentTarget;
        delNum = eElm.dataset.list;
        //console.log(delNum);
        this.todoList.splice(delNum, 1);
      } else {
        return false;
      }
    }
    this.onDraw();
  },
};

App.init();
