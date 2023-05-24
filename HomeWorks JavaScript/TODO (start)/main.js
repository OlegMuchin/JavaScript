import { GET } from "./moduleFetch/GET.js";
import { POST } from "./moduleFetch/POST.js";
import { GETID } from "./moduleFetch/GETID.js";
import { PATCH } from "./moduleFetch/PATCH.js";
import { DELETE } from "./moduleFetch/DELETE.js";
(function() {
    // создаем и возвращаем заголовок приложения
    function createAppTitle(title){
       let appTitle = document.createElement('h2');
       appTitle.innerHTML = title;
       return appTitle;
    }
    //создаем и возвращаем форму для создания дела
    function createTodoItemForm(){
      let form = document.createElement('form');
      let input = document.createElement('input');
      let buttonWrapper = document.createElement('div');
      let button = document.createElement('button');

      form.classList.add('input-group', 'mb-3');
      input.classList.add('form-control');
      input.placeholder = 'Введите новое дело';
      buttonWrapper.classList.add('input-group-append');
      button.classList.add('btn', 'btn-primary');
      button.textContent = 'Добавить дело';

      buttonWrapper.append(button);
      form.append(input);
      form.append(buttonWrapper);

      return {
          form,
          input,
          button,
      };
    }
    //создаем и возвращаем список элементов
    function createTodoList(){
        let  list  = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }
    // создаём и возвращаем элемент для списка дел
    function createTodoItem(obj = {}, todoList) {
        let  item = document.createElement('li');
        //кнопки перемещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        //устанавливаем стили для элемента списка, а также для размещения кнопок
        //в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = obj.name;
        item.id = `${obj.id}`

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        doneButton.id = `${obj.done}`
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        if (obj.done) {
          item.classList.toggle('list-group-item-success');
        }
        //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        doneButton.addEventListener('click',function (event){
          item.classList.toggle('list-group-item-success');
          if (event.target.id == "true") {
            event.target.id = "false"
            PATCH(event.target.parentElement.parentElement.id,{done:false})
          }else{
            event.target.id = "true"
            PATCH(event.target.parentElement.parentElement.id,{done:true})
          }
        });

        deleteButton.addEventListener('click', function (event){
          if (confirm('Вы уверены?')) {
              item.remove();
              DELETE(event.target.parentElement.parentElement.id)
          }
        });

        todoList.append(item);

        //приложению нужен доступ к самому элементу и кнопкам,
        // чтобы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton,
        }
    }

    document.addEventListener('DOMContentLoaded', async function (){
      let container = document.getElementById('todo-app');
      let todoAppTitle = createAppTitle('Список дел');
      let todoItemForm = createTodoItemForm();
      let todoList = createTodoList();
      // let todoItems = [createTodoItem('Сходить за хлебом'), createTodoItem('Купить молоко')];

      container.append(todoAppTitle);
      container.append(todoItemForm.form);
      container.append(todoList);
      let array = await GET()
      console.log(array);

      if (array.length){
        for (let index = 0; index < array.length; index++) {
          createTodoItem(array[index], todoList)
        }
      }

      //браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела
      todoItemForm.form.addEventListener('submit', async function (e) {
          //эта строчка необходима, чтобы предотвратить стандартное действие браузера
          //в этом случае мы не хотим, чтобы страница перезагружалась при отправке формы
          e.preventDefault();

          //игнорируем создание элемента, если пользователь ничего не ввёл в поле
          if (!todoItemForm.input.value) {
              return ;
          }

          // //создаём и добавляем в список новое дело из поля для ввода
          // todoList.append(createTodoItem(todoItemForm.input.value).item);
          let objItem = {
            name:todoItemForm.input.value,
            owner: "I",
            done: false,
            id: 0
          }

          let itemId = await POST(objItem)

          //обнуляем значение в поле, чтобы не пришлось стирать его вручную
          todoItemForm.input.value = '';
      });
    });
})();
