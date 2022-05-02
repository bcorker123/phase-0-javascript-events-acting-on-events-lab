// Your code here
const dodger = document.querySelector('#dodger');

const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
})

const moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360){
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
})