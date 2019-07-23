let bufferMsg, bufferTask;
let currentListSize = document.querySelectorAll('.todos li.row').length;
const inputField = document.getElementById('entry');
const inputBtn = document.querySelector('.list__btn button');
const LIST = document.querySelector('ul.todos');
const NOTE = document.querySelector('.notification');
const MAXSIZE = 10;

inputField.addEventListener('input', function () {
  if (inputField.value === '') {
    inputBtn.setAttribute('disabled', 'disabled');
  } else {
    inputBtn.removeAttribute('disabled');
  }
});
inputBtn.addEventListener('click', function () {
  if (currentListSize >= MAXSIZE) {
    return
  }
  const newItem = document.createElement('li');
  newItem.classList.add('row', 'flex-scc');

  let itemCheck = document.createElement('input');
  itemCheck.setAttribute('type', 'checkbox');
  itemCheck.setAttribute('title', 'Done?');
  itemCheck.classList.add('item__checkbox');
  itemCheck.addEventListener('change', function () {
    this.setAttribute('disabled', 'disabled');
    this.parentElement.classList.add('checked');
  });
  const itemText = document.createElement('p');
  itemText.classList.add('item__text');
  itemText.innerHTML = inputField.value;
  const itemEdit = document.createElement('button');
  itemEdit.classList.add('item__edit');
  itemEdit.innerHTML = `<i class="material-icons">edit</i>`;
  itemEdit.addEventListener('click', function () {
    bufferMsg = this.previousElementSibling.innerHTML;
    this.nextElementSibling.value = bufferMsg;
    this.parentElement.classList.add('editing');
    inputField.value = '';
    inputField.setAttribute('disabled', 'disabled');
    inputBtn.setAttribute('disabled', 'disabled');
    disableList('hide');
  });
  const itemChange = document.createElement('input');
  itemChange.classList.add('item__change');
  itemChange.setAttribute('title', 'Edit your task');
  const itemDelete = document.createElement('button');
  itemDelete.classList.add('item__delete');
  itemDelete.innerHTML = `<i class="material-icons">delete</i>`;
  itemDelete.addEventListener('click', function () {
    LIST.removeChild(this.parentElement);
    currentListSize--;
    rearrangeList();
    checkFullList();
  });
  const itemSave = document.createElement('button');
  itemSave.classList.add('item__save');
  itemSave.innerHTML = `<i class="material-icons">save</i>`;
  itemSave.addEventListener('click', function () {
    bufferMsg = document.querySelector('.editing .item__change').value;
    document.querySelector('.editing .item__text').innerHTML = bufferMsg;
    this.parentElement.classList.remove('editing');
    inputField.removeAttribute('disabled');
    disableList('show');
  });
  newItem.setAttribute('draggable', 'true');
  newItem.setAttribute('ondragstart', 'dragStart(event)');
  newItem.appendChild(itemCheck);
  newItem.appendChild(itemText);
  newItem.appendChild(itemEdit);
  newItem.appendChild(itemChange);
  newItem.appendChild(itemDelete);
  newItem.appendChild(itemSave);
  LIST.appendChild(newItem);

  inputField.value = '';
  inputBtn.setAttribute('disabled', 'disabled');

  currentListSize++;
  rearrangeList();
  checkFullList();
});

function disableList(action) {
  const editAndDeleteButtons = document.querySelectorAll('.item__edit, .item__delete');
  for (let i = 0; i < editAndDeleteButtons.length; i++) {
    if (action === 'hide') {
      editAndDeleteButtons[i].setAttribute('disabled', 'disabled');
    } else if (action === 'show') {
      editAndDeleteButtons[i].removeAttribute('disabled');
    }
  }
}
function checkFullList() {
  if (currentListSize >= MAXSIZE) {
    inputField.setAttribute('disabled', 'disabled');
    NOTE.classList.add('show');
  } else {
    inputField.removeAttribute('disabled');
    NOTE.classList.remove('show');
  }
}
function createExtra() {
  const extraItem = document.createElement('li');
  extraItem.classList.add('empty');
  extraItem.setAttribute('ondrop', 'drop(event)');
  extraItem.setAttribute('ondragover', 'allowDrop(event)');
  return extraItem
}
function rearrangeList() {
  const EXTRA = document.querySelectorAll('.todos li.empty');
  for (let i = 0; i < EXTRA.length; i++) {
    LIST.removeChild(EXTRA[i])
  }
  const ITEMS = document.querySelectorAll('.todos li.row');
  for (let i = 0; i < ITEMS.length; i++) {
    LIST.insertBefore(createExtra(), ITEMS[i]);
    if (i === ITEMS.length - 1) {
      LIST.appendChild(createExtra());
    }
  }
}

function dragStart(ev) {
  bufferTask = ev.target;
}
function drop(ev) {
  ev.preventDefault();
  LIST.replaceChild(bufferTask, ev.target);
  rearrangeList();
}
function allowDrop(ev) {
  ev.preventDefault();
}


document.addEventListener('keyup', function (ev) {
  if (ev.key === 'F2' ) {
    inputField.focus();
  }
  if (ev.key === 'F4' ) {
    if (inputField.value !== '') {
      inputBtn.click();
    }
  }
});