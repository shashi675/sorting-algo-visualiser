
// mid of array is displayed using black color

async function mergeSort(btn) {
    await mergeS(0, height.length-1);
    // console.log(height);
    btn.classList.remove("selected-btn");
    enableBtns();
}

async function merge(l, m, r)
{
    let n1 = m - l + 1;
    let n2 = r - m;
 
    let L = new Array(n1);
    let R = new Array(n2);
    for(let i=l; i<=m; i++) {
        updateColor(i, "red");
    }
    await sleep();
    for(let i=m+1; i<=r; i++) {
        updateColor(i, "red");
    }
 
    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = height[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = height[m + 1 + j];
 
    let i = 0;
    let j = 0;
    let k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            height[k] = L[i];
            i++;
        }
        else {
            height[k] = R[j];
            j++;
        }
        updateHeight(k);
        updateColor(k, "green");
        await sleep();
        k++;
    }
 
    while (i < n1) {
        height[k] = L[i];
        updateHeight(k);
        updateColor(k, "green");
        await sleep();
        i++;
        k++;
    }

    while (j < n2) {
        height[k] = R[j];
        updateHeight(k);
        updateColor(k, "green");
        await sleep();
        j++;
        k++;
    }
}

async function mergeS(l, r){
    if(l>=r){
        return;
    }
    let m = l+ parseInt((r-l)/2);

    updateColor(m, "black");
    await sleep();
    await mergeS(l,m);
    await sleep();
    await mergeS(m+1,r);
    await sleep();
    await merge(l,m,r);
}
