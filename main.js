document.getElementById('new-task-submit').addEventListener('click', function(){
  taskInput = document.getElementById('new-task-input').value;
  console.log("Task Name " ,taskInput);

  
  tasks = document.getElementById('tasks');
 
  /*
<!-- <div class="task">
					<div class="content">
						<input 
							type="text" 
							class="text" 
							value="A new task"
							readonly>
					</div>
					<div class="actions">
						<button class="edit">Edit</button>
						<button class="delete">Delete</button>
					</div>
				</div> -->
*/

  div_1 = document.createElement('div');
  div_1.classList.add('task');

  div_2 = document.createElement('div');
  div_2.classList.add('content');

  input = document.createElement('input');
  input.classList.add('text');

  div_3 = document.createElement('div');
  div_3.classList.add('actions');

  editBtn = document.createElement('button');
  editBtn.classList.add('edit');  

  deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');

  editBtn.innerText = 'Edit';
  deleteBtn.innerText = 'Delete';

  
  // input.placeholder = 'What?'
  input.type = 'text'
  input.value = taskInput;

  div_1.appendChild(div_2);
  div_2.appendChild(input);
  div_1.appendChild(div_3);
  div_3.appendChild(editBtn);
  div_3.appendChild(deleteBtn);

  tasks.appendChild(div_1);


  const currentTask = document.getElementById('tasks');

  // Delete
  deleteBtn.addEventListener('click', function(e) {
    console.log((e.target.parentNode).parentNode)
    tasks.removeChild((e.target.parentNode).parentNode);
  })
  
  editBtn.addEventListener('click', function(e){
    if(e.target.innerText.toLowerCase() == 'edit') {
      console.log((((e.target.parentNode).parentNode).firstChild).firstChild)
      e.target.innerText = 'Save';
      console.log(e.target)
      var now = ((((e.target.parentNode).parentNode).firstChild).firstChild);
      now.focus();
    }else {
      e.target.innerText = 'Edit';
      
    }
  })

  document.getElementById('new-task-input').value = '';
});

