const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = "todos";
let todos = [];

function deleteTodo(event) {
  const btn = event.target; // 내가 클릭한 버튼
  const li = btn.parentNode; // 버튼의 부모 노드
  todoList.removeChild(li);
  const cleanTodos = todos.filter(function (todo) {
    return todo.id !== parseInt(li.id); // 이것에 해당하는 것들만 필터링 됨
  });
  todos = cleanTodos; // 새로운 배열로 덮어 씌우기
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(TODO_LS, JSON.stringify(todos)); // js의 obj를 string으로
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newID = todos.length + 1;

  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteTodo);
  span.innerText = text;
  li.appendChild(delBtn); // li 밑에 할일과 X버튼 추가
  li.appendChild(span);
  li.id = newID;
  todoList.appendChild(li); // li를 상위 ul에 추가

  // LS에 todo 저장
  const todoObj = {
    // todo 오브젝트를 만들고 배열에 넣음
    text: text,
    id: newID,
  };
  todos.push(todoObj);
  saveTodo();
}

function handleSumit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = ""; // 입력창 비워주기
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODO_LS);
  if (loadedTodos !== null) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach(function (todo) {
      paintTodo(todo.text);
    });
  }
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", handleSumit);
}
init();
