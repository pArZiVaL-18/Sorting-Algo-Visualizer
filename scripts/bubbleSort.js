
let speed = 250;
// bubble sort algorithm
async function bubbleSort(arr) {
    let bars = document.querySelectorAll(".bar");
    disableButtons();
    let j;
    for(let i=0; i<arr.length-1; i++) {

        for(j=0; j<arr.length-1-i; j++) {
            bars[j].style.backgroundColor = "#ffee32";//yellow
            bars[j+1].style.backgroundColor = "#ffee32";//yellow

            bars[j].classList.add("bar-compare");
            bars[j+1].classList.add("bar-compare");

            await sleep(speed);

            para.innerHTML = `Comparing ${arr[j]} > ${arr[j+1]} ?`;
            if(arr[j] > arr[j+1]) {
                para.style.backgroundColor = '#ffee32';//yellow
                await sleep(speed);
                para_2.innerHTML = `Swapping ${arr[j]} & ${arr[j+1]}`;
                para_2.style.backgroundColor = "#ff0a54";//red

                bars[j].style.backgroundColor = "#ff0a54";//red
                bars[j+1].style.backgroundColor = "#ff0a54";//red

                await sleep(speed);
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                bars[j].style.height = arr[j] * 5 + "px";
                bars[j].innerText = arr[j];

                bars[j+1].style.height = arr[j+1] * 5 + "px";
                bars[j+1].innerText = arr[j+1];
                await sleep(speed);
                para_2.innerHTML = '';
                para_2.style.backgroundColor = "white";
                para.style.backgroundColor = 'white';
            }
            bars[j].style.backgroundColor = "#DFF5FF";//default(blue)

            bars[j].classList.remove("bar-compare");
            bars[j+1].classList.remove("bar-compare");
            await sleep(speed);
            para.innerHTML = '';
        }
        bars[j].style.backgroundColor = "#2dc653";//green

        await sleep(speed);
    }
    bars[0].style.backgroundColor = "#2dc653";//green
    enableButtons();
}


/* --------------------Bubble sort for Boxes-------------------*/

async function bubble(arr){
    let boxes = document.querySelectorAll(".box");
    disableButtons();
    
    for(let i=0; i<arr.length-1; i++) {
        for(let j=0; j<arr.length-1-i; j++) {
            
            boxes[j].style.backgroundColor = "#ffee32";//yellow
            boxes[j+1].style.backgroundColor = "#ffee32";//yellow
            await sleep(2*speed);
            para.innerHTML = `Comparing ${arr[j]} > ${arr[j+1]} ?`;
            if(arr[j] > arr[j+1]) {
                para.style.backgroundColor = '#ffee32';//yellow
                await sleep(speed);
                para_2.innerHTML = `Swapping ${arr[j]} & ${arr[j+1]}`;
                para_2.style.backgroundColor = "#ff0a54";//red

                boxes[j].style.backgroundColor = "#ff0a54";//red
                boxes[j+1].style.backgroundColor = "#ff0a54";//red

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            
                await animateSwapBubble(boxes[j], boxes[j+1]);

                para_2.innerHTML = '';
                para_2.style.backgroundColor = "white";
                para.style.backgroundColor = 'white';
            }
            boxes[j].style.backgroundColor = "#DFF5FF";//default(white)
            boxes[j+1].style.backgroundColor = "#2dc653";//green
        }
        await sleep(2*speed);
    }
    boxes[0].style.backgroundColor = "#2dc653";//green
    enableButtons();
}

async function animateSwapBubble(box1, box2){
    box1.classList.add('bar-left-to-right-100');
    box2.classList.add('bar-right-to-left-100');

    await sleep(6*speed);
    let temp = box1.innerHTML;
    box1.innerHTML = box2.innerHTML;
    box2.innerHTML = temp;

    box1.classList.remove('bar-left-to-right-100');
    box2.classList.remove('bar-right-to-left-100');
}

/* --------------------Bubble sort for boxes-------------------*/