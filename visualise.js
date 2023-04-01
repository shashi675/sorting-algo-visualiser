
// comparison is done using orange color:
// red color shows minimum or maximum value (depending on the algorithm)
// green color shows the sorted part of the array


function compare(a, b) {
    div[a].style.backgroundColor = "orange";
    div[b].style.backgroundColor = "orange";
}

function swap(a, b) {
    // swapping heights of divs:
    div[a].style.height = height[b] + "%";
    div[b].style.height = height[a] + "%";

    // actual swapping:
    // height[a] = height[a] + height[b];
    // height[b] = height[a] - height[b];
    // height[a] = height[a] - height[b];

    const temp=height[a];
    height[a]=height[b];
    height[b]=temp;
}

function updateColor(a, color) {
    div[a].style.backgroundColor = color;
}

function sleep() {
    return new Promise((resolve, reject) => setTimeout(() => {
        resolve();
    }, time));
}

function updateHeight(a) {
    div[a].style.height = height[a] + "%";
}