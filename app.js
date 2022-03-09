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
  addEvent(i) {
    document
      .getElementById(`todoVal${i}`)
      .addEventListener('click', this.checkTodo.bind(this));
    document
      .getElementById(`editBtn${i}`)
      .addEventListener('click', this.editTodo.bind(this));
    document
      .getElementById(`delBtn${i}`)
      .addEventListener('click', this.delTodo.bind(this));
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
  setData(data) {
    if (data == '') {
      alert('할일을 등록해 주세요!');
      return false;
    } else {
      this.todoList.push({ title: data, complete: false });
      this.onDraw();
      return 'todoFun setData complete';
    }
  },
  onDraw() {
    let todoHtml = '';
    for (let i = 0; i < this.todoList.length; i++) {
      todoHtml += this.todoTemplete(i);
    }
    this.todoArea.innerHTML = todoHtml;
    for (let i = 0; i < this.todoList.length; i++) {
      this.addEvent(i);
    }
    return 'todoFun getData complete';
  },
  todoTemplete(i) {
    return `<div class="row" data-list="${i}">
    ${this.todoLabel(i)}
    ${this.todoOptionBtn(i)}
   </div>`;
  },
  todoLabel(i) {
    let checkVal = this.todoList[i]['complete'] == true ? 'checked' : '';
    //console.log(`${i} 완료여부 : ${this.todoList[i]['complete']}, ${checkVal}`);
    return `<label class="list-group-item d-flex gap-2 col-sm-8">
    <input class="form-check-input flex-shrink-0" type="checkbox" value="todoVal${i}" name="todoVal${i}" id="todoVal${i}" ${checkVal} >
    <small class="pt-1 form-checked-content">${i}. ${this.todoList[i]['title']}</small>
  </label>`;
  },
  todoOptionBtn(i) {
    return `<div class="col-sm-4 " style="padding: 0.5rem 1rem;">
    ${this.todoEditBtn(i)}
    ${this.todoDelBtn(i)}
  </div>`;
  },
  todoEditBtn(i) {
    return `<button type="button" class="btn btn-secondary" id="editBtn${i}" >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
      </svg>
    </button>`;
  },
  todoDelBtn(i) {
    return `<button type="button" class="btn btn-secondary" id="delBtn${i}" >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
</button>`;
  },
  allDelete() {
    if (this.todoList.length == 0) {
      alert('삭제할 할 일이 없습니다.');
    } else {
      let alldelConfirm = confirm('모든 할일을 삭제하시겠습니까?');
      if (alldelConfirm == true) {
        let num = 'All';
        this.delTodo(num);
      } else {
        return false;
      }
    }
  },
  checkTodo() {
    let eElm = event.currentTarget;
    let editlNum = eElm.parentNode.parentNode.dataset.list;
    let clickTodo = this.todoList[editlNum]['complete'];
    if (eElm.checked != clickTodo) {
      // 2차 배열의 완료여부 false로 혹은 true로 변경되도록 수정이 필요
    }
    console.log(clickTodo);
    //console.log(eElm.checked);
  },
  editTodo() {
    let eElm = event.currentTarget;
    let editlNum = eElm.parentNode.parentNode.dataset.list;
  },
  delTodo(num) {
    let delNum = num;
    if (delNum == 'All') {
      //전체삭제
      this.todoList.length = 0;
    } else {
      // 클릭한 것만 삭제
      let delConfirm = confirm('정말로 삭제하시겠습니까?');
      if (delConfirm == true) {
        let eElm = event.currentTarget;
        delNum = eElm.parentNode.parentNode.dataset.list;
        this.todoList.splice(delNum, 1);
      } else {
        return false;
      }
    }
    this.onDraw();
  },
};

App.init();
