const daysCon = document.querySelector('.days');
const hoursCon = document.querySelector('.hours');
const minsCon = document.querySelector('.minutes');
const secondssCon = document.querySelector('.seconds');

function getDate() {
    let date = new Date().toLocaleString().split(', ')
    let time = date[1].split(':');
    let daysDate = date[0].split('.')

    let newdate = new Date()
    const newYear = new Date(`1 Jan ${+daysDate[2]+1}`)

    let totalSeconds = Math.floor((newYear - newdate) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysCon.innerHTML = calculate(days);
    hoursCon.innerHTML = calculate(hours);
    minsCon.innerHTML = calculate(minutes);
    secondssCon.innerHTML = calculate(seconds);
}

setInterval(getDate, 1000)

function calculate(elem) {
    if (String(elem).length > 1) {
        return elem
    }
    return "0" + elem
}
window.onload = getDate();