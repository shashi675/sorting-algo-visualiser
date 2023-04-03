
async function bubbleSort(btn) {
    for(let i=0; i<height.length-1; i++) {
        let isChanged=false;
        let j;
        for(j = 0; j<height.length-1-i; j++) {
            compare(j, j+1);
            await sleep();
            if(height[j] > height[j+1]) {
                swap(j, j+1);
                isChanged=true;
                await sleep();
            }
            updateColor(j, "darkblue");
            updateColor(j+1, "darkblue");
        }
        updateColor(j, "green");
        await sleep();
        if(isChanged===false) {

            // this loop is just for making the bars green (visualisation):
            for(j=j-1; j>=0; j--) {
                updateColor(j, "green");
                await sleep();
            }
            break;
        }
    }
    // console.log(height);
    btn.classList.remove("selected-btn");
    enableBtns();
}