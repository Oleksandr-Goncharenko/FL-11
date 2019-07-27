location.hash = '';
const rootNode = document.getElementById('root');
const dangerDelay = 2000;
const browserOPERA = !!navigator.userAgent.match(/OPR/);
const browserFF = !!navigator.userAgent.match(/Firefox/);
const notChrome = browserOPERA || browserFF;
let todoItems = [];
if (localStorage.getItem('list')) {
  todoItems = JSON.parse(localStorage.getItem('list'));
}

function createME(type = 'div', className = [], innerText = '') {
  const item = document.createElement(type);
  for (let i = 0; i < className.length; i++) {
    item.classList.add(className[i]);
  }
  item.innerHTML = innerText;
  return item;
}

function addDanger(add = true) {
  let text = 'You can\'t edit already done item.';
  let dangerClass = 'danger_add';
  if (add) {
    text = 'You can\'t add already existing item.';
    dangerClass = 'danger_done';
  }
  const dangerTitle = createME('h3', ['danger__title'], 'Danger!');
  const dangerText = createME('p', ['danger__text'], text);

  const dangerClose = createME('div', ['danger__close']);
  dangerClose.addEventListener('click', function () {
    this.parentElement.setAttribute('style', 'opacity: 0;');
  });
  const DANGER = createME('div', [dangerClass, 'danger']);
  if (!notChrome) {
    DANGER.classList.add('chrome');
  }
  DANGER.appendChild(dangerTitle);
  DANGER.appendChild(dangerText);
  DANGER.appendChild(dangerClose);
  rootNode.appendChild(DANGER);
}

function init() {
  rootNode.innerHTML = '';
  addDanger();
  rootNode.appendChild(createME('h2', ['title', 'title_main'], 'Simple TODO application'));
  const mainBTN = createME('a', []);
  mainBTN.setAttribute('href', '#/add');
  mainBTN.appendChild(createME('button', ['btn', 'btb_add'], 'Add new task'));
  rootNode.appendChild(mainBTN);
  const mainLIST = createME('ul', ['list']);
  const activeTasks = todoItems.filter(obj => !obj['isDone']);
  const doneTasks = todoItems.filter(obj => obj['isDone']);
  for (let i = 0; i < activeTasks.length; i++) {
    const listItem = createME('li');
    listItem.setAttribute('id', activeTasks[i].id);
    const listCheck = createME('input', ['list__checkbox']);
    listCheck.setAttribute('type', 'checkbox');
    listCheck.setAttribute('title', 'Click to set it DONE!');
    listCheck.addEventListener('change', function () {
      let itemToCheck;
      for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === this.parentNode.getAttribute('id')) {
          itemToCheck = i;
        }
      }
      const changedItem = todoItems.splice(itemToCheck, 1);
      changedItem[0].isDone = !changedItem[0].isDone;
      todoItems.push(changedItem[0]);
      saveToLocale();
      init();


    });
    listItem.appendChild(listCheck);
    const listText = createME('a', ['list__description'], activeTasks[i].text);
    listText.setAttribute('href', `#/modify/${activeTasks[i].id}`);
    listItem.appendChild(listText);
    const listDelete = createME('div', ['list__delete']);
    listDelete.addEventListener('click', function () {
      let itemToDelete;
      for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === this.parentNode.getAttribute('id')) {
          itemToDelete = i;
        }
      }
      todoItems.splice(itemToDelete, 1);
      saveToLocale();
      init();
    });
    listItem.appendChild(listDelete);
    mainLIST.appendChild(listItem);
  }
  for (let i = 0; i < doneTasks.length; i++) {
    const listItem = createME('li', ['done']);
    listItem.setAttribute('id', doneTasks[i].id);
    const listCheck = createME('input', ['list__checkbox']);
    listCheck.setAttribute('type', 'checkbox');
    listCheck.setAttribute('checked', 'checked');
    listCheck.setAttribute('title', 'Click to uncheck it.');
    listCheck.addEventListener('change', function () {
      let itemToCheck;
      for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === this.parentNode.getAttribute('id')) {
          itemToCheck = i;
        }
      }
      const changedItem = todoItems.splice(itemToCheck, 1);
      changedItem[0].isDone = !changedItem[0].isDone;
      todoItems.push(changedItem[0]);
      saveToLocale();
      init();


    });
    listItem.appendChild(listCheck);
    const listText = createME('p', ['list__description'], doneTasks[i].text);
    listText.addEventListener('click', function () {
      let danger = document.querySelector('.danger_done');
      danger.setAttribute('style', 'opacity: 1; z-index: 12;');
      setTimeout(function () {
        danger.setAttribute('style', 'opacity: 0; z-index: 2;');
      }, dangerDelay);
    });
    listItem.appendChild(listText);
    const listDelete = createME('div', ['list__delete']);
    listDelete.addEventListener('click', function () {
      let itemToDelete;
      for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === this.parentNode.getAttribute('id')) {
          itemToDelete = i;
        }
      }
      todoItems.splice(itemToDelete, 1);
      saveToLocale();
      init();
    });
    listItem.appendChild(listDelete);
    mainLIST.appendChild(listItem);
  }
  rootNode.appendChild(mainLIST);
}

init();

function extraPage(add = true, target = '') {
  addDanger(false);
  const input = createME('input', ['input']);
  input.setAttribute('title', 'Write a description');
  input.setAttribute('maxlength', '24');
  if (!add) {
    input.setAttribute('value', decodeURI(target));
  }
  rootNode.appendChild(input);
  const btn1 = createME('a', ['btn__wrap']);
  btn1.setAttribute('href', '#');
  btn1.appendChild(createME('button', ['btn__cancel', 'btn'], 'Cancel'));
  const btn2 = createME('a', ['btn__wrap']);
  btn2.setAttribute('href', '#');
  btn2.appendChild(createME('button', ['btn__save', 'btn'], 'Save changes'));
  btn2.addEventListener('click', function (e) {
    e.preventDefault();
    const input = document.querySelector('.input');
    if (input.value === '') {
      return
    }
    const newItem = {};
    newItem.isDone = false;
    newItem.id = encodeURI(input.value);
    newItem.text = input.value;
    const duplicate = todoItems.filter(obj => obj['id'] === newItem.id && obj['id'] !== target);
    if (duplicate.length === 0) {
      if (add) {
        todoItems.push(newItem);
        saveToLocale();
        location.hash = '';
      } else {
        let itemToChange;
        for (let i = 0; i < todoItems.length; i++) {
          if (todoItems[i].id === target) {
            itemToChange = i;
          }
        }
        todoItems[itemToChange].id = encodeURI(input.value);
        todoItems[itemToChange].text = input.value;
        saveToLocale();
        location.hash = '';
      }
    } else {
      let danger = document.querySelector('.danger_add');
      danger.setAttribute('style', 'opacity: 1; z-index: 12;');
      setTimeout(function () {
        danger.setAttribute('style', 'opacity: 0; z-index: 2;');
      }, dangerDelay);
    }
  });
  rootNode.appendChild(btn1);
  rootNode.appendChild(btn2);
  input.focus();
}

function createAddPage() {
  const addTitle = createME('h2', ['title', 'title_add'], 'Add task');
  rootNode.innerHTML = '';
  rootNode.appendChild(addTitle);
  extraPage();
}

function createModifyPage(target) {
  const modifyTitle = createME('h2', ['title', 'title_modify'], 'Modify task');
  rootNode.innerHTML = '';
  rootNode.appendChild(modifyTitle);
  extraPage(false, target);
}

window.onhashchange = function (props) {
  if (location.hash.match(/\/add/)) {
    createAddPage();
  } else if (location.hash.match(/\/modify/)) {
    const idPosition = props.newURL.match(/\/modify\//).index;
    const id = props.newURL.slice(idPosition + '/modify/'.length);
    createModifyPage(id);
  } else {
    init();
  }
};

function saveToLocale() {
  localStorage.setItem('list', JSON.stringify(todoItems));
}