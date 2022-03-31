import App from './App.js';
const todoTemplete = (i) => {
  return `<div class="row" data-list="${i}">
    ${App.todoLabel(i)}
    ${App.todoOptionBtn(i)}
   </div>`;
};
const todoLabel = (i) => {
  let checkVal = App.todoList[i]['complete'] == true ? 'checked' : '';
  //console.log(`${i} 완료여부 : ${App.todoList[i]['complete']}, ${checkVal}`);
  return `<label class="list-group-item d-flex gap-2 col-sm-8">
    <input class="form-check-input flex-shrink-0" type="checkbox" value="todoVal${i}" name="todoVal${i}" id="todoVal${i}" ${checkVal} >
    <small class="pt-1 form-checked-content">${i + 1}. ${
    App.todoList[i]['title']
  }</small>
  </label>`;
};
const todoOptionBtn = (i) => {
  return `<div class="col-sm-4 " style="padding: 0.5rem 1rem;">
    ${App.todoEditbtn(i)}
    ${App.todoDelBtn()}
  </div>`;
};
const todoEditbtn = (i) => {
  let disabledVal = App.todoList[i]['complete'] == true ? 'disabled' : '';
  return `<button type="button" class="btn btn-primary btn-edit" ${disabledVal}>
      <i class="bi bi-pen"></i>
    </button>`;
};
const todoDelBtn = () => {
  return `<button type="button" class="btn btn-secondary btn-delete" >
        <i class="bi bi-x"></i>
    </button>`;
};
const todoEditInput = (num) => {
  return `<input class="form-control" type="text" name="exampleDataList" placeholder="${MESSAGES['editAlertTxt']}" aria-label="${MESSAGES['editAlertTxt']}" value="${App.todoList[num]['title']}">`;
};

const allChkbox = (value) => {
  let checkVal = value;
  return `<div class="row" data-list="allChk">
    <label class="list-group-item d-flex gap-2">
      <input class="form-check-input flex-shrink-0" type="checkbox" value="allChk" name="allChk" ${checkVal} >
      전체완료
    </label>
   </div>`;
};

export {
  todoTemplete,
  todoLabel,
  todoOptionBtn,
  todoEditbtn,
  todoDelBtn,
  todoEditInput,
  allChkbox,
};
