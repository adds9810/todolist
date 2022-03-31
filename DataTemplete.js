import App from './App.js';
const listData = (data, chkVal) => {
  return {
    title: data,
    complete: chkVal,
  };
};
const changeData = (num, value, title) => {
  let todoList = App.todoList;
  let changeNum = num;
  let changeVal = value;
  let dataTxt = title;

  todoList.splice(changeNum, App.currIdx, App.listData(dataTxt, changeVal));
  return App.onDraw();
};
export { listData, changeData };
