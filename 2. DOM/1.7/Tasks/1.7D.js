// #1 

/*
function clear(elem) {
  elem.innerHTML = '';
}

clear(elem);
*/

// #5

/*
function createTree(container, data) {
    const ul = document.createElement('ul');

    function createLi(container, data) {
        Object.keys(data).forEach(element => {
            const li = document.createElement('li');
            li.innerText = element;
            container.append(li);

            if (Object.keys(data[element]).length) {
                const ulInner = document.createElement('ul');
                li.append(ulInner);
                createLi(ulInner, data[element]);
            }
        });
    }

    createLi(ul, data);
    container.append(ul);
}
*/

// #5
function createTree(container, data) {

    function deepCreateUl(data) {
        if (!Object.keys(data)) return;

        const ul = document.createElement('ul');
        
        for (let key in data) {
            const li = document.createElement('li');
            li.innerText = key;
            li.append(deepCreateUl(data[key]));
            ul.append(li);
        }

        return ul;
    }

    container.append(deepCreateUl(data));
}

// let colors = ['red', 'green', 'purple', 'blue', 'cyan', 'white', 'black', 'gray', 'yellow', 'orange', 'red', 'green', 'purple']

function showUlChildren(ul) {
    ul.querySelectorAll('li').forEach(el => {
      const childrenCount = el.querySelectorAll('li').length;
      if (childrenCount) {
        el.firstChild.data += ` [${childrenCount}]`;
      }
    });
  }



let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере

let ul = document.querySelector('ul');
console.log(ul);
showUlChildren(ul)