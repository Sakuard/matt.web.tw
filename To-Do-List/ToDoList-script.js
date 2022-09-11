window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); /* stop here from refreshing the page after submit */


        //令task = input的value
        const task = input.value;
        

        //若task無輸入值,則alert "Please fill out the task!"
        if (!task) {
            alert("Please fill out the task!");
            return;
        }
        
        //令task_element創建一個div,其 class='task'
        const task_element = document.createElement('div');
        task_element.classList.add('task');

        //令task_content_element創建一個div,其class='content' 
        const task_content_element = document.createElement('div');
        task_content_element.classList.add('content');

        //令task_content_element屬於task_element的子項
        task_element.appendChild(task_content_element);

        //令task創建一個input,其class='text' , type='text' , value=task,而task=input.value
        const task_input_element = document.createElement('input');
        task_input_element.classList.add('text');
        task_input_element.type = 'text';
        task_input_element.value = task;
        task_input_element.setAttribute('readonly','readonly');

        //令task_input_element屬於task_content_element的子項
        task_content_element.appendChild(task_input_element);

        //令task_actions_element創建一個div,其class='actions'
        const task_actions_element = document.createElement('div');
        task_actions_element.classList.add('actions');

        //令task_actions_element屬於task_element的子項
        task_element.appendChild(task_actions_element);

        //令task_edit_element創建一個button,其class='edit',於HTML顯示為"Edit"
        const task_edit_element = document.createElement('button');
        task_edit_element.classList.add('edit');
        task_edit_element.innerHTML = "Edit";
        //We could use ".innerHTML" for presetting the default value

        //令task_edit_element屬於task_actions_element的子項
        task_actions_element.appendChild(task_edit_element);


        //令task_delete_element創建一個button,其class='delete',於HTML顯示'Delete'
        const task_delete_element = document.createElement('button');
        task_delete_element.classList.add('delete');
        task_delete_element.innerHTML = 'Delete';

        //使task_delete_element屬於task_actoins_element的子項
        task_actions_element.appendChild(task_delete_element);
        
        //令task_element屬於list_el的子項
        list_el.appendChild(task_element);
        
        //於創建結束後,使input value數值清空
        input.value = '';

        task_edit_element.addEventListener('click', () => {

            //將task_edit_element.innertext.lowercase() == 'edit'修正
            if (task_edit_element.innerHTML == 'Edit') {
                //將task_input_element的readonly特性移除
                task_input_element.removeAttribute('readonly');
                //於task_input_element上顯示閃爍標
                task_input_element.focus();
                //將task_edit_element的innerText值改為Save,同時innerText亦可控innerHTML
                task_edit_element.innerText = 'Save';
            }else {
                //將task_input_element的Attribute改回readonly,且task_edit_element的innerText改回Edit
                task_input_element.setAttribute('readonly', 'readonly');
                task_edit_element.innerText = 'Edit';
            }
        });

        //將list_el的子項task_element移除
        task_delete_element.addEventListener('click', () => {
            list_el.removeChild(task_element);
        });
    });
});