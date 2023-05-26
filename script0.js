function getTime() {
    const dateHTML = document.querySelector(".date");
    const timeHTML = document.querySelector(".time");

    const daysWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    let currentDate = new Date();
    let hh = currentDate.getHours();
    let mm = currentDate.getMinutes();
    let ss = currentDate.getSeconds();
    console.log(currentDate.getMonth());
    console.log(months[currentDate.getMonth()]);
    let session = "AM"

    if (hh < 12) {
        session = "PM"
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    timeHTML.innerHTML = hh + ":" + mm + ":" + ss;
}
setInterval(() => {
    getTime()
}, 1000);

// console.log(getTime);