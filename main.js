const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;         //캔버스의 사이즈는 윈도우 사이즈 -100
canvas.height = window.innerHeight - 100;


//등장 캐릭터의 속성 object 자료에 저장
const dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);  //.fillRect():네모를 그리기
    }
}



class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);  //.fillRect():네모를 그리기
    }
}

let timer = 0;
const cactuses = [];

function runTime(){
    requestAnimationFrame(runTime);                 //requestAnimationFrame : 1초에 60번 코드 실행
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);                                //캔버스 싹 다 지우기
    
    if(timer % 120 === 0){                          //120 프레임마다 {장애물} 생성
        const cactus = new Cactus();
        cactuses.push(cactus);                      //생성할때마다 array에 집어넣기
    }
    
    cactuses.forEach((a)=>{                         //array에 있는거 한번에 다 그려줌
        a.x--;
        a.draw();   
    });
    // cactus.draw();
    dino.draw();
}

runTime();