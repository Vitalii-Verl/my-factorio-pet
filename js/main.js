class Task {
  constructor(owner = "Mian", title = 'Без назви', description = 'Опис відсутній'){
    this.id = Math.random()
    this.owner = owner
    this.title = title
    this.description = description
    this.date = new Date().toDateString()
  }
}

let tasks = getLocalStorage('tasks') ? getLocalStorage('tasks') : []

// LocalStorage
function setLocalStorage(name, data){
  localStorage.setItem(name, JSON.stringify(data))
}
function getLocalStorage(name){
  return JSON.parse(localStorage.getItem(name))    
}

// AddTask
function addNewTask(owner, title, description){
  tasks.push( new Task( owner, title, description ) )
  setLocalStorage('tasks', tasks)
  render()
}

const addTaskBtn = document.querySelector('#addTaskBtn')
addTaskBtn.addEventListener('click', () => {
  let title = document.querySelector('#form_task_title')
  let description = document.querySelector('#form_task_description')
  let owner = document.querySelector('#form_task_owner')
  addNewTask(owner.value, title.value, description.value)
  title.value = ''
  description.value = ''
  closeModal()
})

function todoTemplate(task){
  let swapBoard = ''
  if(task.owner !== 'Main'){
    swapBoard += `
      <button 
        data-id="${task.id}"
        class="btnSwapBoard"
      >
        Main
      </button>
    `
  }
  if(task.owner !== 'Verl'){
    swapBoard += `
      <button 
        data-id="${task.id}"
        class="btnSwapBoard"
      >
        Verl
      </button>
    `
  }
  if(task.owner !== 'Blondbrain'){
    swapBoard += `
      <button 
        data-id="${task.id}"
        class="btnSwapBoard"
      >
        Blondbrain
      </button>
    `
  }

  swapBoard += `
    <button 
      data-id="${task.id}" 
      class="deleteTask"
    >
      Delete
    </button>
  `

  return `
    <div class="${task.id} main-tasks__taks task f-light-3-top pointer">
      <div>
        <div class="task__header accordion">${task.title}</div>
        <div class="panel">
          <div class="task__body f-dark-3-bot">
            <div class="task__description">${task.description}</div>
            <div class="task__buttons">${swapBoard}</div>
          </div>
        </div>
      </div>  
    </div>
  `
}



function render(){
  let main_tasks = document.querySelector('#main-tasks')
  main_tasks.innerHTML = ''
  let verl_tasks = document.querySelector('#verl-tasks')
  verl_tasks.innerHTML = ''
  let blondbrain_tasks = document.querySelector('#blondbrain-tasks')
  blondbrain_tasks.innerHTML = ''

  for (let task of tasks){
    if(task.owner == 'Main'){
      main_tasks.innerHTML += todoTemplate(task)
    }
    if(task.owner == 'Verl'){
      verl_tasks.innerHTML += todoTemplate(task)
    }
    if(task.owner == 'Blondbrain'){
      blondbrain_tasks.innerHTML += todoTemplate(task)
    }
  }
  accordion()
  swapOwner()
}


render()

// AddEventLiseners
function swapOwner(){
  document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('click', e => {
      let classList = e.target.classList
      for(let i of classList){
        if(i === 'btnSwapBoard'){
          let id = e.target.getAttribute('data-id')
          let newOwner = e.target.innerText
          tasks.forEach(item => {
            if(item.id == id){
              console.log(item)
              item.owner = newOwner
              setLocalStorage('tasks', tasks)
              render()
            }
          })
        }
        if(i === 'deleteTask'){
          let id = e.target.getAttribute('data-id')
          tasks.forEach((item, index) => {
            if(item.id == id){
              if(confirm('Видалити задачу?')){
                tasks.splice(index, 1)
                setLocalStorage('tasks', tasks)
                render()
              }
              // delete item
            }
          })
        }
      }
    })
  })
}



// Modal
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelectorAll('.close-modal-btn')

function closeModal(){
  modal.style.display = 'none';
}

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalBtn.forEach(element => {
  element.addEventListener('click', closeModal)
});

// Close Modal when clicked outside its content
window.addEventListener('click', e => {
  if (e.target === modal) closeModal()
});

///////////////////////////////////////
// Accordeon
///////////////////////////////////////

// document.querySelectorAll('.task').forEach(item => {
//   let header = item.querySelector('.task__header')
//   header.addEventListener('click', () => {
//     item.classList.toggle('active')
//   })
// })

// document.querySelectorAll('.task').forEach((task) => {
//   let header = task.querySelector('.task__header')
//   let body = task.querySelector('.task__body')
//   let content = task.querySelector('.task__body > *')

//   header.addEventListener('click', () => {
//     task.classList.toggle('opened')

//     if ( task.classList.contains('opened') ) {
//       body.style.maxHeight = `${content.clientHeight}px`
//     } else {
//       body.style.maxHeight = '0px'
//     }
//   })
// })

///////////////////////////////////////

// Dragg And Drop
// let draggedItem = null
// function dragNDrop(){
//   let lists = document.querySelectorAll('.tasks')
//   let listTasks = document.querySelectorAll('.tasks__task')
  
//   for(let i = 0; i < listTasks.length; i++){
//     let item = listTasks[i]

//     item.addEventListener('dragstart', () => {
//       draggedItem = item
//       setTimeout(() => {
//         item.style.display = 'none'
//       }, 0)
//     })

//     item.addEventListener('dragend', () => {
//       setTimeout(() => {
//         item.style.display = "block"
//         draggedItem = null
//       }, 0)
//     })

//     for(let j = 0; j < listTasks.length; i++){
//       let item = listTasks[j]
//       item.addEventListener('dragover', e => {
//         e.preventDefault()
//       })
//       item.addEventListener('dragenter', function(e){
//         e.preventDefault()
//         this.style.backgroundColor = 'rgba(0,0,0,.3)'
//       })
//       item.addEventListener('dragleave', function(e){
//         e.preventDefault()
//         this.style.backgroundColor = 'rgba(0,0,0,0)'
//       })
//     }

//   }
// }
// dragNDrop()

function accordion(){
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
