import MESSAGES from '/messages.js';
const currIdx = 1;

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
    this.allDelBtn = document.getElementById('button-addon3');
  },
  listData(data, chkVal) {
    return {
      title: data,
      complete: chkVal,
    };
  },
  initEvent() {
    this.btn.addEventListener('click', this.createTodo.bind(this));
    this.inputArea.addEventListener('keyup', this.keyup.bind(this));
    this.allDelBtn.addEventListener('click', this.deleteAll.bind(this));
    this.todoArea.addEventListener('click', this.listOptionEvent.bind(this));
  },
  listOptionEvent() {
    let eElm = event.target;
    let eElmIcon = eElm.parentNode;
    let clickTarget =
      eElm.classList.contains('form-check-input') ||
      eElm.classList.contains('btn')
        ? eElm
        : eElmIcon;
    let clickEditBtn = clickTarget.classList.contains('btn-edit');
    let clickDelBtn = clickTarget.classList.contains('btn-delete');
    let clickChk = eElm.classList.contains('form-check-input');
    let targetNum = clickTarget.parentNode.parentNode.dataset.list;
    if (clickEditBtn) {
      this.editTodo(targetNum);
    } else if (clickDelBtn) {
      this.delTodo(targetNum);
    } else if (clickChk) {
      this.checkTodo(targetNum, eElm.checked);
    }
  },
  keyup() {
    let chkEnterKey = window.event.keyCode == 13;
    if (chkEnterKey) {
      this.createTodo();
    }
  },
  createTodo() {
    let todoTxt = this.inputArea.value;
    this.setData(todoTxt);
    return MESSAGES[0];
  },
  setData(data) {
    if (data == '') {
      alert(MESSAGES[1]);
      return false;
    } else {
      this.todoList.push(this.listData(data, 'false'));
      this.onDraw();
      return MESSAGES[2];
    }
  },
  onDraw() {
    let todoHtml = '';
    for (let i = 0; i < this.todoList.length; i++) {
      todoHtml += this.todoTemplete(i);
    }
    this.todoArea.innerHTML = todoHtml;
    return MESSAGES[3];
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
  todoOptionBtn() {
    return `<div class="col-sm-4 " style="padding: 0.5rem 1rem;">
    ${this.todoEditbtn()}
    ${this.todoDelBtn()}
  </div>`;
  },
  todoEditbtn() {
    return `<button type="button" class="btn btn-secondary btn-edit">
      <i class="bi bi-pen"></i>
    </button>`;
  },
  todoDelBtn() {
    return `<button type="button" class="btn btn-secondary btn-delete" >
        <i class="bi bi-x"></i>
    </button>`;
  },
  deleteAll() {
    if (this.todoList.length == 0) {
      alert(MESSAGES[4]);
    } else {
      let allDelConfirm = confirm(MESSAGES[5]);
      if (allDelConfirm == true) {
        let num = 'All';
        this.delTodo(num);
      } else {
        return false;
      }
    }
  },
  checkTodo(num, value) {
    let chkVal = value;
    let editlNum = num;
    let dataTxt = this.todoList[editlNum]['title'];
    let datakTodo = this.todoList[editlNum]['complete'];
    let chkValData = chkVal != datakTodo;
    if (chkValData) {
      this.todoList.splice(editlNum, currIdx, this.listData(dataTxt, chkVal));
    }
    //console.log(eElm.checked);
  },
  editTodo(num) {
    let editNum = num;
    console.log(`${editNum}번째 수정버튼 입니다.`);
  },
  delTodo(num) {
    console.log('delect');
    let delNum = num;
    if (delNum == 'All') {
      //전체삭제
      this.todoList.length = 0;
    } else {
      // 클릭한 것만 삭제
      let delConfirm = confirm(MESSAGES[6]);
      if (delConfirm == true) {
        this.todoList.splice(delNum, currIdx);
      } else {
        return false;
      }
    }
    this.onDraw();
  },
};

App.init();
