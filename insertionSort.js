
async function insertionSort(btn) {
    for(let i=0; i<height.length; i++) {
        if(i===0) {
            updateColor(i, "green");
            continue;
        }
        let j;
        let temp=i;
        for(j=i-1; j>=0; j--) {
            compare(temp, j);
            await sleep(time);
            if(height[temp] < height[j]) {
                swap(temp, j);             //swapping is not done in intersion sort, only done for visualisation
                updateColor(j, "red");
                updateColor(temp, "green");
                await sleep(time);
                temp=j;
            }
            else {
                updateColor(j, "green");
                break;
            }
        }
        updateColor(temp, "green");
    }
    // console.log(height);
    btn.classList.remove("selected-btn");
    enableBtns();
}