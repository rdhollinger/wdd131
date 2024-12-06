const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value)
    setChapterList();
    input.value = '';
    input.focus()

    list.appendChild(listitem);

    delbutton.addEventListener("click", () => {
      list.removeChild(listitem);
      input.focus();
    });
    input.focus();
    input.value = "";
  }
});

function displayList(item){
  let li = document.createElement('li')
  let delbutton = document.createElement('button')
  li.textContent = item;
  delbutton.textContent = "❌";
  delbutton.classList.add('delete');
  li.append(delbutton);
  list.append(li)

  delbutton.addEventListener("click", () => {
    list.removeChild(li);
    delChapter(li.textContent)
    input.focus();
  });
}

function setChapterList(){
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList(){
  return JSON.parse(localStorage.getItem('myFaveBOMList'));
}

function delChapter(chapter){
  chapter = chapter.slice(0, chapter.lenght -1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
