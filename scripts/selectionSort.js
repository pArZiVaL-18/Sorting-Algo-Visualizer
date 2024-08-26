/*------------------------Selection sort for bars------------------------*/

async function selectionSort(arr) {

    let bars = document.querySelectorAll('.bar');
    disableButtons();

    for(let i=0; i<arr.length-1; i++) {
        let minPos = i;
        bars[minPos].style.backgroundColor = '#7BD3EA';//blue

        await sleep(200);
        for(let j=i+1; j<arr.length; j++) {
            
            bars[j].classList.add('bar-compare');
            bars[minPos].classList.add('bar-compare');

            bars[j].style.backgroundColor = '#ffee32';//yellow
            await sleep(250);

            if(arr[minPos] > arr[j]){

                bars.forEach(element => {
                    element.classList.remove('bar-compare');
                });
                await sleep(250);

                bars[minPos].style.backgroundColor = '#DFF5FF';// white
                minPos = j;
                bars[minPos].style.backgroundColor = '#7BD3EA';//blue
            } else {
                await sleep(250);
                bars[j].style.backgroundColor = "#DFF5FF";//white
    
            }
           
            bars.forEach(element => {
                    element.classList.remove('bar-compare');
                });
            await sleep(250);
        }

        if(i == minPos) {
            bars[i].style.backgroundColor = '#2dc653';//green
        }
        if(i != minPos) {
            let temp = arr[minPos];
            arr[minPos] = arr[i];
            arr[i] = temp;

            bars[i].style.backgroundColor = '#ff0a54';//red
            bars[minPos].style.backgroundColor = '#ff0a54';//red

            await sleep(250);
            swapSel(bars, minPos, i);
            await sleep(250);

            bars[i].style.backgroundColor = '#2dc653';//green
            bars[minPos].style.backgroundColor = '#DFF5FF';//white

        }
        
        await sleep(250);
    }
    await sleep(250);
    bars[arr.length-1].style.backgroundColor = "#2dc653";//green
    enableButtons();
}

function swapSel(bars, index1, index2) {
    let temp = bars[index1].style.height;
    bars[index1].style.height = bars[index2].style.height;
    bars[index2].style.height = temp;

    temp = bars[index1].innerText;
    bars[index1].innerText = bars[index2].innerText;
    bars[index2].innerText = temp;
}


/*------------------------Selection sort for bars------------------------*/

/* --------------------Selection sort for boxes-------------------*/

async function selection(arr){
    let boxes = document.querySelectorAll(".box");
    disableButtons();

    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        boxes[minIndex].style.backgroundColor = '#7BD3EA';//blue
        boxes[minIndex].classList.add("min-index-box");
        for(let j = i + 1; j < arr.length; j++) {
            boxes[j].style.backgroundColor = '#ffee32'; //yellow;
            await sleep(500);
            if(arr[j] < arr[minIndex]) {
                boxes[minIndex].style.backgroundColor = "#DFF5FF";//white
                boxes[minIndex].classList.remove("min-index-box");
                minIndex = j;
                boxes[minIndex].style.backgroundColor = '#7BD3EA';//blue
                boxes[minIndex].classList.add("min-index-box");
            }else{
                await sleep(250);
                boxes[j].style.backgroundColor = "#DFF5FF";//white
            }
        }
        await sleep(500);
        // let gap = Math.abs(minIndex - i);

        if(i != minIndex){
            await animateSwapSelection(boxes[minIndex], boxes[i], Math.abs(minIndex - i));
            boxes[minIndex].style.backgroundColor = "#DFF5FF";//white
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
            boxes[i].style.backgroundColor = "#2dc653";//green
            boxes[minIndex].classList.remove('min-index-box');
        }else {
            boxes[i].style.backgroundColor = "#2dc653";//green
            boxes[i].classList.remove('min-index-box');
        }
        await sleep(200);
    }
    boxes[arr.length-1].style.backgroundColor = "#2dc653";//green
    enableButtons();
}

async function animateSwapSelection(box1, box2, gap){
    box1.classList.add(`bar-right-to-left-${gap}00`);
    box2.classList.add(`bar-left-to-right-${gap}00`);

    await sleep(1500);
    let temp = box1.innerHTML;
    box1.innerHTML = box2.innerHTML;
    box2.innerHTML = temp;

    box1.classList.remove(`bar-right-to-left-${gap}00`);
    box2.classList.remove(`bar-left-to-right-${gap}00`);
}

/* --------------------Selection sort for boxes-------------------*/