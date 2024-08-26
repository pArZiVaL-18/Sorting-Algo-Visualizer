
/*------------------------Merge sort------------------------*/

async function merge(bars, start, mid, end) {
    
    let n = end - start + 1;
    let merge = new Array(n);

    let i = start;
    let j = mid+1;
    let k = 0;

    
    while(i <= mid && j <= end) {
        if(array[i] < array[j]) {
            merge[k++] = array[i++];
        }else {
            merge[k++] = array[j++];
        }
    }


    while(i <= mid) {
        merge[k++] = array[i++];
    }


    while(j <= end) {
        merge[k++] = array[j++];
    }


    for(i=start; i<mid+1; i++){
        bars[i].style.backgroundColor = '#FF9800'; // orange
    }
    await sleep(100);


    for(j=mid+1; j<=end; j++) {
        bars[j].style.backgroundColor = '#FF204E';// red
    }
    await sleep(100);


    for(k=0, i=start; k<merge.length; k++, i++){

        await sleep(200);
        bars[i].style.height = merge[k] * 5 + "px";
        bars[i].innerText = merge[k];
        array[i] = merge[k];
        await sleep(200);
    }


    for(i=start; i<merge.length; i++){
        bars[i].style.backgroundColor = '#2dc653';//green
    }
    await sleep(200);

}

async function devide(bars, start, end) {
    if(start >= end) {
        return;
    }

    let mid = Math.floor(start + (end - start)/2);
    console.log(mid);
    await devide(bars, start, mid);
    await devide(bars, mid+1, end);
    await merge(bars, start, mid, end);
}

/*------------------------Merge sort------------------------*/
