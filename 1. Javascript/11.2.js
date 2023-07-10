// #2
/*
function delay(ms) {
  let promise = new Promise(function(resolve, reject) {

    setTimeout(() => {
        resolve('correct');
    }, ms);
  });

  return promise;
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));
*/

// #3

showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});

// function showCircle(cx, cy, radius) {
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);

//     setTimeout(() => {
//         div.style.width = radius * 2 + 'px';
//         div.style.height = radius * 2 + 'px';
//     }, 0);
// }

/*
function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            callback(div);
        });
    }, 0);
}
*/

function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
    let promise;

    setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            promise = Promise(function(resolve, reject) {
                resolve();
            });
        });
    }, 0);

    return promise
}

showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
  