'use strict'

// #1

/*
let date = new Date('2012-02-20T03:12');

console.log(date.toString());
*/

// #2

/*
function getWeekDay(date) {
    return ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'].at(date.getDay());
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getWeekDay(date));        // нужно вывести "ВТ"
*/

// #3

/*
function getLocalDay(date) {
    let day = date.getDay();

    if (day == 0)
        day = 7;

    return day;
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getLocalDay(date));       // вторник, нужно показать 2
*/

// #4

/*
function getDateAgo(date, days) {
    const daysInTimestamp = days * 24 * 3600 * 1000;
    let dateAgo = new Date(date - daysInTimestamp).toString();
    return dateAgo;
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
*/

// #5

/*
function getLastDayOfMonth(year, month) {
    const daysInTimestamp = 24 * 3_600 * 1_000;
    let currentDate = new Date(year, month);
    let nextDate = new Date(year, month + 1);
    let lastDay = (nextDate - currentDate) / daysInTimestamp;
    return lastDay;
}


console.log(getLastDayOfMonth(2012, 1));

console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28
*/

// #6

/*
function getSecondsToday() {
    const secondsInMillisecond = 1_000;
    let today = new Date();
    let todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return (today - todayStart) / secondsInMillisecond;
}

console.log(getSecondsToday()) 
*/

// #7

/*
function getSecondsToTomorrow() {
    const secondsInMillisecond = 1_000;
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return (tomorrow - today) / secondsInMillisecond;
}

console.log(getSecondsToTomorrow());
*/

// #8

function formatDate(date) {
    const secondsInMillisecond = 1_000;
    let currentDate = new Date()
    let differenceInSeconds = (currentDate - date) / secondsInMillisecond;

    switch (true) {
        case differenceInSeconds < 1:
            return `Right now`;
        case differenceInSeconds < 60:
            return `${differenceInSeconds} seconds ago`;
        case differenceInSeconds < 60 * 60:
            return `${Math.round(differenceInSeconds / 60)} minutes ago`;
        default:
            return `${date.getDate()}.` +
                `${date.getMonth()}.` +
                `${date.getFullYear()}, ` +
                `${date.getHours()}:` +
                `${date.getMinutes()}`;
    }
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));