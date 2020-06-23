var month1 = [
    "1 Jan New Year Day",
    "2 Jan Guru Govind Singh Jayanti",
    "14 Jan Lohri",
    "15 Jan Pongal",
    "15 Jan Makar Sankranti",
    "26 Jan Republic Day",
    "30 Jan Vasant Panchami 2020"
];

var month2 = [
    "9 Feb Guru Ravidas Jayanti",
    "14 Feb Valentine 's Day",
    "18 Feb Maharishi Dayanand Saraswati Jayanti",
    "19 Feb Shivaji Jayanti",
    "21 Feb Maha Shivaratri 2020"
];

var month3 = [
    "9 Mar Holika Dahana 2020",
    "9 Mar Hazarat Ali's Birthday",
    "10 Mar Holi 2020"
];

var month4 = [
    "2 Apr Rama Navami 2020",
    "6 Apr Mahavir Jayanti",
    "9 Apr Maundy Thursday, Christian 2020",
    "10 Apr Good Friday 2020",
    "12 Apr Easter Day",
    "13 Apr Vaisakhi",
    "14 Apr Mesadi/Vaisakhadi",
    "14 Apr Ambedkar Jayanti"
];

var month5 = [
    "1 May May Day",
    "7 May Buddha Purnima/Vesak 2020",
    "7 May Birthday of Ravindranath Tagore",
    "10 May 2020 Mother's Day (2nd Sunday of May) ",
    "22 May Jamat Ul-Vida 2020",
    "24 May Brother's Day",
    "25 May Ramzan Eid-ul-Fitar 2020"
];

var month6 = [
    "21 Jun June Solstice Season",
    "21 Jun 2020 Father's Day (3rd Sunday of Jun) ",
    "23 Jun Rath Yatra 2020"
];

var month7 = [
    "5 Jul Guru Purnima 2020",
    "30 Jul International Friendship Day",
    "31 Jul Bakra Eid ul-Adha 2020"
];

var month8 = [
    "2 Aug 2020 Sisters Day (1st Sunday of Aug) ",
    "3 Aug Raksha Bandhan(Rakhi) 2020",
    "11 Aug Janmashtami(Smarta) 2020",
    "12 Aug Janmashtami 2020",
    "15 Aug Independence Day",
    "16 Aug Parsi New Year",
    "22 Aug Ganesh Chaturthi / Vinayaka Chaturthi 2020",
    "29 Aug Muharram/Ashura 2020",
    "31 Aug Onam"
];

var month9 = [
    "22 Sep September Equinox Season"
];

var month10 = [
    "2 Oct Mahatma Gandhi Jayanti",
    "22 Oct Maha Saptami 2020",
    "23 Oct Maha Ashtami 2020",
    "24 Oct Maha Navami 2020",
    "25 Oct Dussehra 2020",
    "29 Oct Milad un-Nabi/Id-e-Milad 2020",
    "31 Oct Halloween 2020",
    "31 Oct Maharishi Valmiki Jayanti"
];

var month11 = [
    "4 Nov Karaka Chaturthi(Karva-Chauth) 2020",
    "14 Nov Naraka Chaturdasi 2020",
    "14 Nov Diwali / Deepavali 2020",
    "15 Nov Govardhan Puja 2020",
    "16 Nov Bhai Duj 2020",
    "20 Nov Chhat Puja 2020",
    "24 Nov Guru Tegh Bahadur's Martyrdom Day",
    "30 Nov Guru Nanak Jayanti"
];

var month12 = [
    "11 Dec First Day of Hanukkah 2020",
    "18 Dec Last day of Hanukkah 2020",
    "21 Dec December Solstice Season 2020",
    "24 Dec Christmas Eve",
    "25 Dec Christmas",
    "31 Dec New Year's Eve"
];

var monthevent = [month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12];

function highlightevents(y) {
    var k = 0;
    for (k = 0; k < 35; k++) {
        if (date[k].innerHTML == y) {
            date[k].style.color = "blue";
            break;
        }
    }
}


function Eventassign(monthno, yearno) {
    var txt = "";
    monthevent[monthno - 1].forEach(function(a) {
        if (yearno != 2020 && a[a.length - 1] === "0") {

        } else {
            var z = parseInt(a.slice(0, 2));
            highlightevents(z);
            txt += a + "<br>";
        }
    });
    document.getElementById("events").innerHTML = txt;
}

//Above all about Events
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

var curdate = new Date();
var curyear = curdate.getFullYear();
var curmonth = curdate.getMonth();

var year = document.getElementById("curyear");
var month = document.getElementById("curmonth");
var date = document.getElementsByClassName("day");
var displaydate = document.getElementById("displaydate");
var dispdate;

var d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var maxd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function isleap() {
    if (curyear % 4 == 0) {
        if (curyear % 100 == 0 && curyear % 400 != 0) {
            return false;
        }
        return true;
    }
    return false;
}

function assigndates() {

    maxvalue = maxd[curmonth];

    if (isleap() && curmonth == 1) {
        maxvalue = 29;
    }

    var dt = m[curmonth] + " 1," + curyear;
    var tempdate = new Date(dt);

    var start = tempdate.getUTCDay() + 1;
    if (start == 7) {
        start = 0;
    }
    var i = 0;
    var j = 1;
    for (i = 0; i < 35; i++) {
        if (i < start || j > maxvalue) {
            date[i].innerHTML = "";
        } else {
            date[i].innerHTML = j;
            j++;
        }
    }
    if (start == 6 && maxvalue == 30) {
        date[0].innerHTML = 30;
    }
    if (start == 5 && maxvalue == 31) {
        date[0].innerHTML = 31;
    }
    if (start == 6 && maxvalue == 31) {
        date[0].innerHTML = 30;
        date[1].innerHTML = 31;
    }

    document.getElementById("prevyear").innerHTML = curyear - 1;
    document.getElementById("nextyear").innerHTML = curyear + 1;
    if (curmonth == 0) {
        document.getElementById("prevmonth").innerHTML = "December";
    } else {
        document.getElementById("prevmonth").innerHTML = m[curmonth - 1];
    }
    if (curmonth == 11) {
        document.getElementById("nextmonth").innerHTML = "January";
    } else {
        document.getElementById("nextmonth").innerHTML = m[curmonth + 1];
    }
}

assigndates();

year.innerHTML = curyear;
month.innerHTML = m[curmonth];

function prevyear() {
    resetcolors();
    curyear -= 1;
    year.innerHTML = curyear;
    assigndates();
    Eventassign(curmonth + 1, curyear);
}

function selectyear() {
    resetcolors();
    var yr = parseInt(prompt("Enter Year", curyear));
    if (yr > 0) {
        curyear = yr;
        year.innerHTML = curyear;
        assigndates();
        Eventassign(curmonth + 1, curyear);
    } else {
        alert("Not Valid");
    }

}

function nextyear() {
    resetcolors();
    curyear += 1;
    year.innerHTML = curyear;
    assigndates();
    Eventassign(curmonth + 1, curyear);
}

function selectmonth() {
    resetcolors();
    var mon = parseInt(prompt("Enter Month", curmonth + 1));
    if (mon >= 1 && mon <= 12) {
        curmonth = mon - 1;
        month.innerHTML = m[curmonth];
        assigndates();
        Eventassign(curmonth + 1, curyear);
    } else {
        alert("Not Valid");
    }

}

function prevmonth() {
    resetcolors();
    curmonth -= 1;
    if (curmonth == -1) {
        curmonth = 11;
        prevyear();
    }
    month.innerHTML = m[curmonth];
    assigndates();
    Eventassign(curmonth + 1, curyear);
}

function nextmonth() {
    resetcolors();
    curmonth += 1;
    if (curmonth == 12) {
        curmonth = 0;
        nextyear();
    }
    month.innerHTML = m[curmonth];
    assigndates();
    Eventassign(curmonth + 1, curyear);
}

function display(x) {
    var dt = m[curmonth] + " " + x.innerHTML + "," + curyear;
    var tempdate = new Date(dt);
    var tempday = tempdate.getUTCDay() + 1;
    if (tempday == 7) {
        tempday = 0;
    }

    if (x.innerHTML == "") {
        displaydate.innerHTML = "Wrong Choice";
        displaydate.style.color = "red";
    } else {
        resetcolors();
        displaydate.style.color = "black";
        x.style.backgroundColor = "black";
        x.style.borderColor = "red";
        x.style.color = "dodgerblue";
        dispdate = x.innerHTML + " " + m[curmonth] + " " + curyear + ", " + d[tempday];
        displaydate.innerHTML = dispdate;
    }
    Eventassign(curmonth + 1, curyear);
}

function resetcolors() {
    var k = 0;
    for (k = 0; k < 35; k++) {
        if (k % 7 == 0) {
            date[k].style.color = "red";
        } else {
            date[k].style.color = "black";
        }
        date[k].style.backgroundColor = "rgba(0, 0, 0, 0.15)";
        date[k].style.borderColor = "black";
    }
}

function highlight(y) {
    var k = 0;
    for (k = 0; k < 35; k++) {
        if (date[k].innerHTML == y) {
            display(date[k]);
            date[k].style.color = "dodgerblue";
            date[k].style.backgroundColor = "black";
            date[k].style.borderColor = "red";
            break;
        }
    }
}

function reset() {
    resetcolors();
    curdate = new Date();
    curyear = curdate.getFullYear();
    curmonth = curdate.getMonth();
    curday = curdate.getUTCDay() + 1;
    if (curday == 7) {
        curday = 0;
    }
    year.innerHTML = curyear;
    month.innerHTML = m[curmonth];
    assigndates();
    var y = parseInt(curdate.toString().slice(8, 10));
    highlight(y);
    Eventassign(curmonth + 1, curyear);
}

var y = parseInt(curdate.toString().slice(8, 10));
highlight(y);
Eventassign(curmonth + 1, curyear);