const clock = document.querySelector(".jsClock");
const time = clock.querySelector("h1");

const date = new Date();

//현재 시간 얻기
getTime = () =>{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    time.innerText = ` ${hours<10 ? `0${hours}` : hours} : ${
                        minutes<10 ? `0${minutes}` : minutes} : ${seconds<10 ? `0${seconds}` : seconds}`;

}

init = () =>{
    getTime();
    setInterval(getTime, 1000);
    // setInterval(() => {
    //     getTime();
    // }, 1000);
}

init();

