window.addEventListener('click', (e) => {
    e.preventDefault()
})

const mode = document.querySelector('.mode-container')


let swithcMode = false
mode.addEventListener('click', () => {
    mode.classList.add('animate')
    
    if(swithcMode){
        mode.innerHTML = `
            <a href="" class="moon"><i class="fas fa-moon"></i></a>
        `
        swithcMode = false
    }else{
        mode.innerHTML = `
        <a href="" class="sun"><i class="fas fa-sun"></i></a>
        `
        swithcMode = true
    }

    setTimeout(() => {
        mode.classList.remove('animate')
    }, 800);
})

