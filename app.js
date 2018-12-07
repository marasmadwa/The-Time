function startAnalogTime() {
    var anToday = new Date();
    var anS = anToday.getSeconds() * 6;
    var anM = anToday.getMinutes() * 6;
    var anH = anToday.getHours() % 12 / 12 * 360 + (anM / 12);
    var t1 = setTimeout(startAnalogTime, 500);
    anH = checkAnalogTime(anH);
    anM = checkAnalogTime(anM);
    anS = checkAnalogTime(anS);
    document.querySelector(".seconds").style.transform = ("rotate(" + anS + "deg)");
    document.querySelector(".minutes").style.transform = ("rotate(" + anM + "deg)");
    document.querySelector(".hours").style.transform = ("rotate(" + anH + "deg)");
}

function checkAnalogTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startDigitalTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var t2 = setTimeout(startDigitalTime, 500);
    h = checkDigitalTime(h);
    m = checkDigitalTime(m);
    s = checkDigitalTime(s);
    document.getElementById('dayTime').innerHTML =
        "<span>" + h + "</span>" + ":" + "<span>" + m + "</span>" + ":" + " " + "<span>" + s + "</span>";
}

function checkDigitalTime(j) {
    if (j < 10) {
        j = "0" + j;
    }
    return j;
}