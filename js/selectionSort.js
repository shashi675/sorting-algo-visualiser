
async function selectionSort(btn) {
    let i;
    for(i=0; i<height.length-1; i++) {
        let min=i;
        updateColor(min, "red");
        for(let j=i+1; j<height.length; j++) {
            compare(min, j);
            await sleep();
            if(height[j] < height[min]) {
                updateColor(min, "darkblue");
                min = j;
            }
            else 
                updateColor(j, "darkblue");
            updateColor(min, "red");
        }
        await sleep();
        swap(min, i);
        updateColor(min, "darkblue");
        updateColor(i, "green");
        await sleep();
    }
    updateColor(i, "green");
    // console.log(height);
    btn.classList.remove("selected-btn");
    enableBtns();
}