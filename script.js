window.onload = function() {
    var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var body = document.body;
    var themeButton = document.getElementById("themeButton");
    var icon = themeButton.querySelector("i");

    if (prefersDarkMode) {
        body.classList.add("dark-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        body.classList.remove("dark-mode");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

function calculateGPA() {
    var semester1 = parseFloat(document.getElementById("semester1").value);
    var semester2 = parseFloat(document.getElementById("semester2").value);
    var semester3 = parseFloat(document.getElementById("semester3").value);
    var semester4 = parseFloat(document.getElementById("semester4").value);
    var semester5 = parseFloat(document.getElementById("semester5").value);
    var semester6 = parseFloat(document.getElementById("semester6").value);
    var semester7 = parseFloat(document.getElementById("semester7").value);
    var cgpa = parseFloat(document.getElementById("cgpa").value);
    var total = 0;

    total = cgpa - ((semester1/100*5) + (semester2/100*5) + (semester3/100*5) + (semester4/100*10) + (semester5/100*15) + (semester6/100*20) + (semester7/100*25))

    var gpa = (total / 15) * 100;
    console.log(gpa);

    if(gpa > 4.00){
        document.getElementById("result").innerHTML = "8th Semester GPA : 4.00";
    }
    else {
        document.getElementById("result").innerHTML = "8th Semester GPA : " + gpa.toFixed(2);
    }
}

function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var themeButton = document.getElementById("themeButton");
    var icon = themeButton.querySelector("i");
    if (body.classList.contains("dark-mode")) {
        themeButton.classList.add("light-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        themeButton.classList.remove("light-mode");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}
