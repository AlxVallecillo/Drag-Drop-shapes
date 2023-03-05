
const $ = document;
let selected, score = 0;
const dropZones = $.querySelectorAll('.drop');
$.getElementById('score').innerText = score;

const startGameBtn = $.querySelector('button');
startGameBtn.style.display = 'none';
startGameBtn.addEventListener('click', startGame);
/**DETERMINE  IF THE GAME HAS STARTED OR ENDED 
 * 
 */
function endGame() {
    startGameBtn.style.display = 'inline';
}

function startGame() {
    window.location.reload();
}

//============================

function handleDrop(e) {
    if ($.querySelector('.drag-section').childElementCount === 1) {
        $.querySelector('.drag-section').style.display = 'none';
        endGame();
    }
    if (e.target.classList.contains(selected.className)) {
        e.target.classList.remove('drop');
        selected.remove();
        score++;
        $.getElementById('score').innerText = score;
        return;
    }
    score--;
    $.getElementById('score').innerText = score;
}
// add and event to add draggable elems 
dropZones.forEach(function (elem) {
    elem.addEventListener('drop', handleDrop);
});

function handleDragStart(event) {
    selected = event.target;
    event.target.style.opacity = .5;
}
$.addEventListener('dragstart', handleDragStart);

//===========>
function handleDragEnd(e) {
    e.target.style.opacity = 1;
}
$.addEventListener('dragend', handleDragEnd);

//============>
function allowDrop(e) {
    e.preventDefault();
}
dropZones.forEach(function (value) {
    value.addEventListener('dragover', allowDrop)
});

