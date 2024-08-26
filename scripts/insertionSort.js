
/*------------------------Insertion sort for bars------------------------*/

async function insertionSort(arr) {

    let bars = document.querySelectorAll('.bar');
    disableButtons();

    for(let i=1; i<arr.length; i++) {

        await sleep(500);
        let curr = array[i];
        let j = i-1;
        bars[j].style.backgroundColor = '#2dc653';//green
        bars[i].style.backgroundColor = '#FFD23F';//orange
        await sleep(500);

        while(j >=0 && arr[j] > curr) {

            await swapIns(bars, j, j+1);
            bars[j].style.backgroundColor = '#FFD23F';
            bars[j+1].style.backgroundColor = '#2dc653';
            await sleep(500);

            arr[j+1] = arr[j];
            j--;
        }
        await sleep(250);
        bars[j+1].style.backgroundColor = '#2dc653';
        arr[j+1] = curr;
    }

    enableButtons();
  }

async function swapIns(bars, index1, index2) {
    let temp = bars[index1].style.height;
    bars[index1].style.height = bars[index2].style.height;
    bars[index2].style.height = temp;

    temp = bars[index1].innerText;
    bars[index1].innerText = bars[index2].innerText;
    bars[index2].innerText = temp;
}
  

/*------------------------Insertion sort for bars------------------------*/

/*------------------------Insertion sort for Boxes------------------------*/



async function insertion(arr) {
    let boxes = document.querySelectorAll(".box");
    disableButtons();

    let box = document.createElement('div');
    box.classList.add('temp');
    box.style.gridArea = '1/6/2/5';

    box.innerHTML = 'temp';
    await sleep(100);

    box_container.appendChild(box);
    let temp = document.querySelector('.temp');

    for(let i=1; i<arr.length; i++){
        let curr = arr[i];
        let prev = i-1;
        boxes[prev].style.backgroundColor = "#2dc653";//green
        await currElement(boxes[i], temp, i);
        boxes[i].style.backgroundColor = "#ffd23f";//orange
        await sleep(200);
        while(prev >= 0 && arr[prev] > curr){
            arr[prev+1] = arr[prev];
            await rightShift(boxes[prev], boxes[prev+1]);
            boxes[prev+1].style.backgroundColor = "#2dc653";//green
            boxes[prev].style.backgroundColor = "#ffd23f";//orange
            prev--;
            await sleep(500);
        }
        await currElement(boxes[prev+1], temp, prev+1);
        arr[prev+1] = curr;

        for(k=0; k<i; k++){
            boxes[k].style.backgroundColor = "#2dc653";//green
        }
    }

    boxes[arr.length-1].style.backgroundColor = "#2dc653";//green

    temp.remove();
    enableButtons();
}

async function rightShift(box1, box2) {
    box1.classList.add(`right-shift-100`);
    box2.classList.add(`left-shift-100`);

    await sleep(750);
    let temp = box1.innerHTML;
    box1.innerHTML = box2.innerHTML;
    box2.innerHTML = temp;

    box1.classList.remove(`right-shift-100`);
    box2.classList.remove(`left-shift-100`);
}

async function currElement(box1, box2, i) {
    let gap = Math.floor(array.length/2)-i-1;

    box1.classList.add(`up-200-right-${gap}`);
    box2.classList.add(`down-left-${gap}`);

    await sleep(1000);
    let temp = box1.innerHTML;
    box1.innerHTML = box2.innerHTML;
    box2.innerHTML = temp;

    box1.classList.remove(`up-200-right-${gap}`);
    box2.classList.remove(`down-left-${gap}`);
}

/* --------------------Insertion sort for Boxes-------------------*/