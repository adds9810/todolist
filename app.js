import MESSAGES from './messages.js';
import {
  todoTemplete,
  todoLabel,
  todoOptionBtn,
  todoEditbtn,
  todoDelBtn,
  todoEditInput,
  allChkbox,
} from './TodoTemplete.js';
import { listData, changeData } from './DataTemplete.js';
import { createTodo, setData, onDraw } from './SetTodo.js';
import checkTodo from './CheckTodo.js';
import { delTodo, deleteAll } from './DelTodo.js';
import { editTodo, setEditTodo, cancelEdit } from './EditTodo.js';

const App = {
  init() {
    let todoLocalData = JSON.parse(localStorage.getItem('todoList'));
    this.todoList =
      todoLocalData == null || todoLocalData.length == 0 ? [] : todoLocalData;
    this.selectorCache();
    this.templeteCache();
    this.eventCache();
    this.initEvent();
  },
  selectorCache() {
    this.currIdx = 1;
    this.btn = document.getElementById('button-addon2');
    this.inputArea = document.getElementById('todoTxt');
    this.todoArea = document.querySelector('.list-group');
    this.allDelBtn = document.getElementById('button-addon3');
  },
  templeteCache() {
    this.todoTemplete = todoTemplete;
    this.todoLabel = todoLabel;
    this.todoOptionBtn = todoOptionBtn;
    this.todoEditbtn = todoEditbtn;
    this.todoDelBtn = todoDelBtn;
    this.todoEditInput = todoEditInput;
    this.allChkbox = allChkbox;
    this.listData = listData;
    this.changeData = changeData;
  },
  eventCache() {
    this.createTodo = createTodo;
    this.setData = setData;
    this.onDraw = onDraw;
    this.checkTodo = checkTodo;
    this.delTodo = delTodo;
    this.deleteAll = deleteAll;
    this.editTodo = editTodo;
    this.setEditTodo = setEditTodo;
    this.cancelEdit = cancelEdit;
  },
  initEvent() {
    setTimeout(function () {
      this.onDraw();
    }, 5);
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
};

App.init();

export default App;
