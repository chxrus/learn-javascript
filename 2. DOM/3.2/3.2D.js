'use strict';

// #1

/*
document.addEventListener('mouseover', tooltipOver);
document.addEventListener('mouseout', tooltipOut);

function tooltipOver(e) {
  const el = e.target.closest('[data-tooltip]');
  if (!el || !e.currentTarget.contains(el)) return;

  const elRect = el.getBoundingClientRect();
  const html = el.dataset.tooltip;
  const tooltip = document.createElement('div');
  document.body.append(tooltip);
  tooltip.innerHTML = html;
  tooltip.classList.add('tooltip');

  let x = elRect.left + (el.offsetWidth - tooltip.offsetWidth) / 2;
  if (x < 0) x = 0;

  let y = elRect.top - tooltip.offsetHeight - 5;
  if (y < 0) y = elRect.top + el.offsetHeight + 5;

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function tooltipOut(e) {
  const tooltips = document.body.querySelectorAll('.tooltip');
  tooltips.forEach(el => el.remove());
}
*/

// #2

class HoverIntent {
  constructor({
    sensitivity = 0.1, // скорость ниже 0.1px/ms значит "курсор на элементе"
    interval = 100, // измеряем скорость каждые 100ms: определяем дистанцию между предыдущей и новой позицией.
    elem,
    over,
    out,
  }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;

    // убедитесь, что "this" сохраняет своё значение для обработчиков.
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    // назначаем обработчики
    elem.addEventListener('mouseover', this.onMouseOver);
    elem.addEventListener('mouseout', this.onMouseOut);

    // продолжите с этого места
    elem.addEventListener('mousemove', this.onMouseMove);
    this.performSpeed = this.performSpeed.bind(this);
  }

  onMouseOver(event) {
    if (this.isOver) return;

    this.isOver = true;

    this.prevX = event.pageX;
    this.prevY = event.pageY;
    this.prevTime = new Date();

    elem.addEventListener('mousemove', this.onMouseMove);
    this.timerId = setInterval(this.performSpeed, this.interval);
  }

  onMouseOut(event) {
    if (!event.relatedTarget || !elem.contains(event.relatedTarget)) {
      elem.removeEventListener('mousemove', this.onMouseMove);
      clearInterval(this.timerId);
      this.isOver = false;

      this.out();
    }
  }

  onMouseMove(event) {
    this.lastX = event.pageX;
    this.lastY = event.pageY;
    this.lastTime = new Date();
  }

  performSpeed() {
    let speed;

    if (!this.lastTime || this.lastTime == this.prevTime) {
      speed = 0;
    } else {
      speed =
        Math.hypot(this.prevX - this.lastX, this.prevY - this.lastY) /
        this.interval;
    }

    if (speed < this.sensitivity) {
      clearInterval(this.timerId);
      this.over();
    } else {
      this.prevX = this.lastX;
      this.prevY = this.lastY;
    }
  }

  destroy() {
    elem.removeEventListener('mouseover', this.onMouseOver);
    elem.removeEventListener('mouseout', this.onMouseOut);
    elem.removeEventListener('mousemove', this.onMouseMove);
  }
}
