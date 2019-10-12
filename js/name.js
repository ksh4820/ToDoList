const form = document.querySelector(".jsForm");
const input = form.querySelector("input");
const greeting = document.querySelector(".jsGreeting");

console.log(greeting)

const LS_USER = "currentUser"
const SHOWING = "showing";

//유저 이름 가져오고 인사
printGreeting = (name) =>{
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerHTML = `Hello ${name} !!!`;
}

handleSumbit = (e) =>{
    e.preventDefault();
    const currentValue = input.value;
    printGreeting(currentValue);
    // LS에 이름 저장
    localStorage.setItem(LS_USER, currentValue);
}

askName = () =>{
    // form이 브라우저에 보이도록 클래스 추가
    form.classList.add(SHOWING);
    //이벤트 등록
    form.addEventListener("submit", handleSumbit);
}

loadName = () =>{
    const currentName = localStorage.getItem(LS_USER);
    console.log(currentName);
    // 유저 이름 존재 x
    if(!currentName){
        askName();
    }else{
        printGreeting(currentName);
    }
}

init = () =>{
    loadName();
}

init();