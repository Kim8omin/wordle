const 정답 = "APPLE";

let attempts=0;
let index =0;

function appStart () {
    const nextLine = ()=> {
        attempts +=1;
        index= 0;
    };

    const handleEnterKey =() => {
       for (let i=0; i<5; i++) {
        const block = document.querySelector(`.block[data-index='${attempts}${i}']`);
        const 입력한_글자 = block.innerText;
        const 정답_글자 = 정답[i];
        if (입력한_글자 ===정답_글자) block.style.background ="#6AAA64";
        else if (정답.includes(입력한_글자))block.style.background ="#c9b458"; 
        else block.style.background ="#787C7E";

        block.style.color ="white";
       }
    nextLine();
    };

    function handleKeydown(event) {
        const key = event.key.toUpperCase();
        const keyCode = event.keyCode;
        const thisBlock = document.querySelector(`.block[data-index='${attempts}${index}']`

        );

        if (index === 5) {
            if (event.key === "Enter")
                handleEnterKey();
            else  return;
        }   else if (65<=keyCode && keyCode <=90) {
         thisBlock.innerText= key; 
         index +=1;
        }
    };
    
    
window.addEventListener("keydown",handleKeydown);
};

appStart();
