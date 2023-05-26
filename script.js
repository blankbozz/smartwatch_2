function getTime() {
    const dateHTML = document.querySelector(".date");
    const timeHTML = document.querySelector(".time");

    // let dateHTML = new Date();
    // let options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Asia/Bangkok' }
    // console.log(new Intl.DateTimeFormat('en-US', options).format(date));

    let currentDay = new Date();
    let dd = currentDay.getDay();
    let mh = currentDay.getMonth();
    let ad = currentDay.getFullYear();
    const dateStringArray = currentDay.toString().split(" ");

    console.log(dateStringArray[0], dateStringArray[1], dateStringArray[2], dateStringArray[3]);

    dateHTML.innerHTML = dateStringArray[0] + " " + dateStringArray[2] + " " + dateStringArray[1] + " " + dateStringArray[3];

    let currentDate = new Date();
    let hh = currentDate.getHours();
    let mm = currentDate.getMinutes();
    let ss = currentDate.getSeconds();

    if (ss < 10) {
        ss = "0" + ss;
    }
    if (hh < 10) {
        hh = "0" + hh;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }

    timeHTML.innerHTML = hh + ":" + mm + ":" + ss;

}
setInterval(() => {
    getTime()
}, 1000);
