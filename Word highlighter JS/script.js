let inp = document.querySelector('#word-input')
let checkbox = document.querySelector('#ignore-case')
let para = document.querySelector('#paragraph-input')

checkbox.addEventListener('change',myfuc)
inp.addEventListener('input',myfuc)

function myfuc(){
    let count = 0
    let inputval = inp.value

    let paraText = para.innerText

    let reg 
    if(checkbox.checked){
        reg = new RegExp(inputval, 'gi')
    }
    else{
        reg = new RegExp(inputval, 'g')
    }
    paraText  = paraText.replaceAll(reg,(arg) => {
        count++
        return `<span class="highlighted-txt">${arg}</span>`
    })

    para.innerHTML = paraText

    let wordcount = document.querySelector('#words-counter')
    wordcount.innerText = count
}