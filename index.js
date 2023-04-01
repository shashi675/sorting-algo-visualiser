
const container=document.querySelector("#bar-container");
const arSizeEle=document.querySelector("#array-size");
const speedEle=document.querySelector("#sort-speed");
const sortBtns=document.querySelectorAll("nav .buttons button");
const createArrBtn=document.querySelector(".create-array");

let height=[];
let div=[];

function createBars() {
    const arrSize=arSizeEle.value;
    height=[];
    div=[];
    container.innerHTML="";

    // creating random array:

    for(let i=0; i<arrSize; i++) {
        const num=Math.floor((Math.random())*90 + 1);
        height.push(num);
    }

    // creating bars:

    for(let i=0; i<arrSize; i++) {
        const bar=document.createElement("div");
        const width = (container.clientWidth - 0.2 * container.clientWidth)/height.length;
        bar.style = "height:" + height[i] + "%;" + "width:" + width + "px;" + "background-color:" + "darkblue;";
        container.appendChild(bar);
        div.push(bar);
    }
    // console.log(height);
}

createBars();

arSizeEle.addEventListener("change", () => {
    createBars();
});

let speed;
let time;

for(let i=0; i<sortBtns.length; i++) {
    sortBtns[i].addEventListener("click", () => {
        sortBtns[i].classList.add("selected-btn");
        speed = speedEle.value;
        time = Math.round(10000/(height.length * speed * speed));
        disableBtns();
        sort(sortBtns[i]);
    });
}

function disableBtns() {
    for(let i=0; i<sortBtns.length; i++) {
        sortBtns[i].disabled=true;
    }
    arSizeEle.disabled=true;
    speedEle.disabled=true;

}

function enableBtns() {
    for(let i=0; i<sortBtns.length; i++) {
        sortBtns[i].disabled=false;
    }
    arSizeEle.disabled=false;
    speedEle.disabled=false;
}

function sort(btn) {
    switch(btn.innerText) {
        case "Bubble": bubbleSort(btn);
                        break;
        case "Selection": selectionSort(btn);
                        break;
        case "Insertion": insertionSort(btn);
                        break;
        case "Quick": quickSort(btn);
                        break;
        case "Merge": mergeSort(btn);
                        break;
        case "Heap": heapSort(btn);
                        break;
    }
}


createArrBtn.addEventListener("click", () => {
    // arrSize = arSizeEle.value;
    // speed = speedEle.value;
    window.location.reload();
    // arSizeEle.value = arrSize;
    // speedEle.value = speed;
    // createBars();
});


