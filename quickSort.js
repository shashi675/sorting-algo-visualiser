
// pivot element is displed using black color:

async function quickSort(btn) {
    let low=0; high=height.length - 1;
    await qSort(low, high);
    // console.log(height);
    btn.classList.remove("selected-btn");
    enableBtns();
}

async function qSort(low, high) {
    if(low >= high) {
        if(low===high) {
            updateColor(low, "green");
            await sleep();
        }
        return;
    }

    let pivot = await partition(low, high);

    updateColor(pivot, "black");
    await sleep();

    await qSort(low, pivot-1);
    await qSort(pivot+1, high);
    await sleep();
    updateColor(pivot, "green");
    await sleep();
}

async function partition(low, high) {
    let pivot = high;
    updateColor(pivot, "black");
    await sleep();
    let greaterEleInd = low - 1;
    for(let j=low; j<=high-1; j++) {
        compare(j, pivot);
        await sleep();
        if(height[j] < height[pivot]) {
            if(greaterEleInd >= low) 
                updateColor(greaterEleInd, "darkblue");

            greaterEleInd++;
            updateColor(greaterEleInd, "red");
            if(j != greaterEleInd) {
                swap(greaterEleInd, j);
            }
            await sleep();
        }
        if(j != greaterEleInd) {
            updateColor(j, "darkblue");
            await sleep();
        }
    }
    updateColor(pivot, "darkblue");
    updateColor(greaterEleInd + 1, "darkblue");
    swap(greaterEleInd + 1, pivot);
    return greaterEleInd + 1;
}