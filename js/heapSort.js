
async function heapSort(btn) {
    let n=height.length;
    for(let i=parseInt(n/2)-1; i>=0; i--) {
        await heapify(n, i);
    }
    for(let i=n-1; i>=0; i--) {
        swap(0, i);
        updateColor(i, "green");
        n--;
        await sleep();
        await heapify(n, 0);
    }
    // console.log(height);
    btn.classList.remove("selected-btn");
    enableBtns();
}

function lChild(i) {
    return i*2+1;
}

function rChild(i) {
    return i*2+2;
}

async function heapify(n, i) {
    while(i<=parseInt(n/2)-1) {
        let largest = i;
        updateColor(largest, "red");
        await sleep();
        const l = lChild(i);
        const r = rChild(i);
        if(l<n) {
            compare(l, largest);
            await sleep();
        
            if(l<n && height[l] > height[largest]) {
                updateColor(largest, "darkblue");
                updateColor(l, "red");
                largest = l;
                await sleep();
            }
            else{
                updateColor(largest, "red");
                updateColor(l, "darkblue");
                await sleep();
            }
            updateColor(largest, "darkblue");
        }
        if(r<n) {
            compare(r, largest);
            await sleep();

            if(r<n && height[r] > height[largest]) {
                updateColor(largest, "darkblue");
                updateColor(r, "red");
                largest = r;
                await sleep();
            }
            else{
                updateColor(largest, "red");
                updateColor(r, "darkblue");
                await sleep();
                updateColor(largest, "darkblue");
            }
            updateColor(largest, "darkblue");
        }
        if(i != largest) {
            swap(i, largest);
            await sleep();
            i=largest;
        }
        else return;
    }
}