function createUserUl(container) {
    const ul = document.createElement('ul');
    let content;

    while((content = prompt("please, input content: "))) {
        const li = document.createElement('li');
        li.textContent = content;
        ul.append(li);
    }

    container.append(ul);
}

const container = document.querySelector('.container');
createUserUl(container)
