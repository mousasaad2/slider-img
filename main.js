let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let buttons = Array.from(document.querySelectorAll(".buttons .hent"));
let card = Array.from(document.querySelectorAll(".cards img"));
let conter = 1;
let arrLenght = card.length;

check()

next.onclick = nextClick;
prev.onclick = prevClick;

function check(){
        card.forEach((e)=>{
            e.classList.remove("actev")
        })
        buttons.forEach((e)=>{
            e.classList.remove("actev")
        })
        card[conter - 1].classList.add("actev");
        buttons[conter - 1].classList.add("actev");

        if(conter == arrLenght){
            next.classList.add("disepl")
        }else{
            next.classList.remove("disepl")
        }
        if(conter == 1){
            prev.classList.add("disepl")
        }else{
            prev.classList.remove("disepl")
        }

}
buttons.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        conter = i+1
        check()
    })
})

function nextClick() {
    if (next.classList.contains("disepl")) {
        return false
    } else {
        conter++
        check()
    }
}
function prevClick() {
    if (prev.classList.contains("disepl")) {
        return false
    } else {
        conter--
        check()
    }
}