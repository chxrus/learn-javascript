class StopWatch {
    constructor(display) {
        this.display = display;
        this.isStarted = false;
    }

    refreshDisplay(value) {
        this.display.textContent = value;
    }

    action() {
        let timerId = setInterval(() => {
            if (!this.isStarted)
                clearTimeout(timerId);

            const date = new Date();
            const hours = ('0' + date.getHours()).slice(-2);
            const minutes = ('0' + date.getMinutes()).slice(-2);
            const seconds = ('0' + date.getSeconds()).slice(-2);
            const displayText = `${hours}:${minutes}:${seconds}`;
            this.refreshDisplay(displayText);
        }, 100);
    }

    start() {
        console.log(this);
        this.isStarted = true;
        this.action();
    }

    stop() {
        this.isStarted = false;
    }
}

const display = document.querySelector('.display p');
const start = document.querySelector('.start');
const reset = document.querySelector('.stop');

const stopWatch = new StopWatch(display);
start.onclick = () => stopWatch.start();
reset.onclick = () => stopWatch.stop();