window.addEventListener('click', (e) => {
    e.preventDefault()
})

const mode = document.querySelector('.mode-container')
const add = document.querySelector('.add')
const getValue = document.querySelector('.get-value')
const toast = document.querySelector('.toast')
const viewTasks = document.querySelector('.view-tasks')
const trash = document.querySelectorAll('.trash')

const taskCount = document.querySelector('.task-count')
const pendingCount = document.querySelector('.pending-count')
const completedCount = document.querySelector('.completed-count')

let countTask = 0
let pendingTask = 0
let completedTask = 0

let swithcMode = false
mode.addEventListener('click', () => {
    mode.classList.add('animate')

    if (swithcMode) {
        mode.innerHTML = `
            <a href="" class="moon"><i class="fas fa-moon"></i></a>
        `
        swithcMode = false
    } else {
        mode.innerHTML = `
        <a href="" class="sun"><i class="fas fa-sun"></i></a>
        `
        swithcMode = true
    }

    setTimeout(() => {
        mode.classList.remove('animate')
    }, 800);
})

function update() {
    taskCount.textContent = countTask
    pendingCount.textContent = completedTask - pendingTask
    completedCount.textContent = completedTask
    console.log('update',taskCount, countTask, pendingCount, completedCount);
}

function showing(store) {
    let task = document.createElement('div')
    task.className = 'task'
    viewTasks.appendChild(task)
    task.innerHTML = `
    <p class="sr">${index + 1}</p>
    <p class="task-name">${store}</p>
    <p class="trash"><i class="fas fa-trash"></i></p>
    `
    
    index++
    countTask++
    update()
}

function removeTask() {   
    const tasks = document.querySelectorAll('.task')
    tasks.forEach((ele) => {
        let trash = ele.querySelector('.trash')
        console.log(trash);
        trash.addEventListener('click', () => {
            viewTasks.removeChild(ele)
            pendingTask++
            update()
        })
    })
}

function completed(){
    const tasks = document.querySelectorAll('.task')
    console.log(tasks);
    tasks.forEach((ele) => {
        ele.addEventListener('click', () => {
            ele.style.background = 'aliceblue'
            ele.style.color = 'firebrick'
            completedTask++
            update()
        })
    })
}


let index = 0
add.addEventListener('click', () => {
    if (getValue.value == '') {
        toast.classList.add('add')
        console.log(toast);
        setTimeout(() => {
            toast.classList.remove('add')
        }, 1500);
    } else {

        showing(getValue.value, index)
        completed()
        removeTask()

        let tasks = document.querySelector('.task')
        const noTask = document.querySelector('.no-task')
        

        if(tasks.length < 1){
            noTask.classList.remove('active')
            console.log('add');
        }else{
            noTask.classList.add('active')
            console.log('remove');
        }

        setTimeout(() => {
            getValue.value = ''
        }, 500)
    }
})