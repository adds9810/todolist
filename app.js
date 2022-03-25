import MESSAGES from '/messages.js';
const currIdx = 1;

const App = {
  init() {
    let todoLocalData = JSON.parse(localStorage.getItem('todoList'));
    this.todoList = todoLocalData.length == 0 ? [] : todoLocalData;
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
  changeData(num, value, title) {
    let changeNum = num;
    let changeVal = value;
    let dataTxt = title;

    this.todoList.splice(changeNum, currIdx, this.listData(dataTxt, changeVal));
    return this.onDraw();
  },
  initEvent() {
    this.onDraw();
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
    let clickTargetClass = clickTarget.classList;
    let clickEditBtn = clickTargetClass.contains('btn-edit');
    let clickDelBtn = clickTargetClass.contains('btn-delete');
    let clickChk = eElm.classList.contains('form-check-input');
    let clickTargetData = clickTarget.parentNode.parentNode.dataset;
    let targetList = clickTargetData.list;
    if (clickEditBtn) {
      clickTargetClass.contains('btn-primary')
        ? this.editTodo(targetList)
        : this.setEditTodo(targetList);
    } else if (clickDelBtn) {
      clickTargetClass.contains('btn-secondary')
        ? this.delTodo(targetList)
        : this.cancelEdit(targetList);
    } else if (clickChk) {
      this.checkTodo(targetList, eElm.checked);
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
    return MESSAGES['completeTxt'];
  },
  setData(data) {
    if (data == '') {
      alert(MESSAGES['setAlertTxt']);
      return false;
    } else {
      this.todoList.push(this.listData(data, 'false'));
      this.onDraw();
      return MESSAGES['setCompleteTxt'];
    }
  },
  onDraw() {
    let todoHtml = '';
    let todoLeng = this.todoList.length;
    for (let i = 0; i < todoLeng; i++) {
      todoHtml += this.todoTemplete(i);
    }
    if (todoLeng > 1) {
      todoHtml += this.allChkbox();
    }
    this.todoArea.innerHTML = todoHtml;
    localStorage.clear();
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    console.log(localStorage.getItem('todoList'));
    return MESSAGES['getCompleteTxt'];
  },
  allChkbox() {
    let checkVal;
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i]['complete'] == true) {
        checkVal = 'checked';
      } else {
        checkVal = '';
        break;
      }
    }
    return `<div class="row" data-list="allChk">
    <label class="list-group-item d-flex gap-2">
      <input class="form-check-input flex-shrink-0" type="checkbox" value="allChk" name="allChk" ${checkVal} >
      전체완료
    </label>
   </div>`;
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
    <small class="pt-1 form-checked-content">${i + 1}. ${
      this.todoList[i]['title']
    }</small>
  </label>`;
  },
  todoOptionBtn(i) {
    return `<div class="col-sm-4 " style="padding: 0.5rem 1rem;">
    ${this.todoEditbtn(i)}
    ${this.todoDelBtn()}
  </div>`;
  },
  todoEditbtn(i) {
    let disabledVal = this.todoList[i]['complete'] == true ? 'disabled' : '';
    return `<button type="button" class="btn btn-primary btn-edit" ${disabledVal}>
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
      alert(MESSAGES[delNoTxt]);
    } else {
      let allDelConfirm = confirm(MESSAGES['delAllTxt']);
      if (allDelConfirm == true) {
        let num = 'All';
        this.delTodo(num);
      } else {
        return false;
      }
    }
  },
  checkTodo(num, value) {
    let chkNum = num;
    let chkVal = value;
    let dataTxt;
    let datakTodo;

    if (chkNum == 'allChk') {
      for (let i = 0; i < this.todoList.length; i++) {
        dataTxt = this.todoList[i]['title'];
        //console.log(i, chkVal, dataTxt, this.todoList);
        this.changeData(i, chkVal, dataTxt);
      }
    } else {
      datakTodo = this.todoList[chkNum]['complete'];
      dataTxt = this.todoList[chkNum]['title'];
      let chkValData = chkVal != datakTodo;
      if (chkValData) {
        this.changeData(chkNum, chkVal, dataTxt);
      }
    }

    //console.log(eElm.checked);
  },
  editTodo(num) {
    let editNum = num;
    let editRow = document.querySelectorAll(`.list-group .row`)[editNum];
    let editArea = editRow.children[0];
    let editBtn = editRow.children[1].children[0];
    let delBtn = editRow.children[1].children[1];
    let editBtnList = editBtn.classList;
    let delBtnList = delBtn.classList;
    editArea.innerHTML = this.todoEditInput(editNum);
    editRow.children[0].children[0].focus();
    editBtnList.remove('btn-primary');
    editBtnList.add('btn-success');
    delBtnList.remove('btn-secondary');
    delBtnList.add('btn-outline-secondary');
    //console.log(`${editNum}번째 수정버튼 입니다.`);
  },
  todoEditInput(num) {
    return `<input class="form-control" type="text" name="exampleDataList" placeholder="${MESSAGES['editAlertTxt']}" aria-label="${MESSAGES['editAlertTxt']}" value="${this.todoList[num]['title']}">`;
  },
  setEditTodo(num) {
    let setEditVal = this.todoList[num]['complete'];
    let editInput =
      document.querySelectorAll(`.list-group .row`)[num].children[0].children[0]
        .value;
    let editComfirm = confirm(MESSAGES['editComfirmTxt']);
    if (editComfirm) {
      if (this.todoList[num]['title'] != editInput) {
        this.changeData(num, setEditVal, editInput);
      }
    }
  },
  cancelEdit() {
    let calcelEditComfirm = confirm(MESSAGES['calcelEditComfirm']);
    if (calcelEditComfirm) {
      this.onDraw();
    }
  },
  delTodo(num) {
    let delNum = num;
    if (delNum == 'All') {
      //전체삭제
      this.todoList.length = 0;
    } else {
      // 클릭한 것만 삭제
      let delConfirm = confirm(MESSAGES['delConfirmTxt']);
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
