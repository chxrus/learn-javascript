function showNotification({ top = 0, right = 0, html, className: cls }) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    if (cls) notification.classList.add(cls);
    notification.style.top = `${top}px`;
    notification.style.right = `${right}px`;
    notification.innerHTML = `<span>${html}</span>`;

    console.log(notification)
    document.body.append(notification);
    setTimeout(() => notification.remove(), 1_500);
}


// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
});