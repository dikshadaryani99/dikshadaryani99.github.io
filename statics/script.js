// toggle overflow

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload=function() {
    currentTime();

    var home = document.getElementsByClassName("home")[0];
    document.getElementsByClassName("main_window")[0].innerHTML = home.innerHTML;
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
   
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    // function startclk() {
    //     let date = new Date();
    //     let h = date.getHours();
    //     let m = date.getMinutes();
    //     let s = date.getSeconds();
    //     h = refine(h);
    //     m = refine(m);
    //     s = refine(s);
    //     document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    //     setInterval(startclk, 1000);
    
    // }
    
    // function startdt() {
    //     let date = new Date();
    //     let d = refine(date.getDate());
    //     let mo = refine(date.getMonth());
    //     let y = date.getFullYear();
    //     document.getElementById("date").innerHTML = d + "/" + mo + "/" + y;
    //     // setInterval(startdt,1000);
    
    // }
    
    // function refine(s) {
    //     if (s < 10) {
    //         s = "0" + s;
    //     }
    //     return s;
    // }
};
function m() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



var home = document.getElementsByClassName("home")[0];
var about = document.getElementsByClassName("about")[0];
var education= document.getElementsByClassName("Education_content")[0];
var project = document.getElementsByClassName("project_content")[0];
var contact = document.getElementsByClassName("contact")[0];
// var home = document.getElementsByClassName("home")[0];
function myfun(s) {

    if (s == 'home') {
        document.getElementsByClassName("main_window")[0].innerHTML = home.innerHTML;
       
    }
    else if (s == 'about') {
        document.getElementsByClassName("main_window")[0].innerHTML =about.innerHTML;
    }
    else if (s == 'education') {
        document.getElementsByClassName("main_window")[0].innerHTML = education.innerHTML;
    }
    else if (s == "Project") {
        document.getElementsByClassName("main_window")[0].innerHTML =project.innerHTML;
    }
    else if (s == "contact") {
        document.getElementsByClassName("main_window")[0].innerHTML = contact.innerHTML;
    }
}

function currentTime() {
//     function refine(s) {
//         if (s < 10) {
//             s = "0" + s;
//         }
//         return s;
//     }

    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    // let dd = String(date.getDate()).padStart(2, '0');

    let d = date.getDate();
    let mo = date.getMonth()+1;
    let y = date.getFullYear();
    // document.getElementById("clock").innerHTML = d + "/" + mo + "/" + y;
    dd = d + "/" + mo + "/" + y
  
      
    if(hh > 12){
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    let time = dd + " " + hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);  
}
