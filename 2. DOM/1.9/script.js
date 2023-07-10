function createOutput() {
  const scrollBottomOutput = document.createElement('div');
  scrollBottomOutput.classList.add('output');
  const scrollBottomOutputParagraph = document.createElement('p');
  scrollBottomOutput.append(scrollBottomOutputParagraph);
  document.body.append(scrollBottomOutput);

  return scrollBottomOutputParagraph;
}

function getScrollBottom(element) {
  return element.scrollHeight - element.scrollTop - element.clientHeight;
}

function getDefaultScrollbarWidth(element) {
  return element.offsetWidth - element.clientWidth - element.clientTop * 2; // getComputedStyle(element).getPropertyValue('border-width').slice(0, -2) * 2;
}

/*
function ballToMiddle(field, ball) {
  pointsCount = (field.textContent.match(/\./g)||[]).length;;
  leftCount = ~~(pointsCount / 2);
  rightCount = pointsCount - leftCount - 1;
  field.innerHTML = ' .'.repeat(leftCount) + '  ' + ball.outerHTML + '   ' + '. '.repeat(rightCount) + '.';
}
*/

function ballToMiddle(field, ball) {
  let x = (field.clientWidth - ball.clientWidth) / 2;
  let y = (field.clientHeight - ball.clientHeight) / 2;

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
}



const output1 = createOutput();
const scrollDown = document.querySelector('#example');
setInterval(() => {
  let scrollBottom = getScrollBottom(scrollDown);
  output1.textContent = `Task #1. Output: ${scrollBottom}px`;
}, 1_000);

const output2 = createOutput();
setInterval(() => {
  let scrollbarWidth = getDefaultScrollbarWidth(scrollDown);
  output2.textContent = `Task #2. Output: ${scrollbarWidth}px`;
}, 1_000);

const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

ballToMiddle(field, ball);