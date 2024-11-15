const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  const chapverse = input.value;
  input.value = '';
  if (chapverse !== "") {
    const listitem = document.createElement("li");
    const delbutton = document.createElement("button");

    listitem.textContent = chapverse;
    list.append(listitem);
    listitem.append(delbutton);
    delbutton.textContent = "❌";
    list.appendChild(listitem);

    delbutton.addEventListener("click", () => {
      list.removeChild(listitem);
      input.focus();
    });
    input.focus();
    input.value = "";
  }
});