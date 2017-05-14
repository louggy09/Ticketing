/*
 Author: <Georgy Louis>

 */


var minTickets = 1;

var maxTickets = 3;

var costPerTicket = 5.00;

var ticketSurcharge = 0.50;

var minute = 10;

var second = 0;

var numofTicket;

var totalCost;

var timeRegulator;

var ticket;

var cost;

var content;

var msgTicket;


window.onload = function () {
    
    timeRegulator = setInterval(function () {
        
        timerTask();
        
    }, 1000);

};

function timerTask() {
    
    var d = new Date();
    
    var t = d.toLocaleTimeString();
    
    var y = d.getMinutes();
    
    var w = d.getSeconds();
    
    if (second === 0) {
        
        second = 60;
        
        minute = minute - 1;
        
    } else {
        
        second = second - 1;
        
        document.getElementById("timer").innerHTML = minute + ":" + second;
        
    }
    if ((second === 0) && (minute === 0)) {

        alert("Time Expired");
        
        window.location.href = "index.html";
    }
}

function stopTimer() {
    
    clearInterval(timeRegulator);
}

function calculateTotal() {
    
    ticket = document.getElementById("numTickets");
    
    cost = document.getElementById("totalCost");
    
    content = document.getElementById("contactInformation");
    
    msgTicket = document.getElementById("msgTickets");
    
    if ((ticket.value == 1) || (ticket.value == 2) || (ticket.value == 3)) {
        
        ticket.setAttribute("style", "background-color: none");
        
        numofTicket = ticket.value;
        
        totalCost = numofTicket * costPerTicket;
        
        cost.value = "$" + totalCost;
        
        msgTicket.innerHTML = "";
        
        content.style.display = "block";
        
    } else {
        if (isNaN(ticket.value)) {
            
            msgTicket.innerHTML = "Not a number! Please enter a whole number between 1 and 3 instead";
            
            ticket.setAttribute("style", "background-color: orange");
            
            content.style.display = "none";
        } else {
            msgTicket.innerHTML = "Only between 1 ,2 and 3 is allowed";
            
            content.style.display = "none";
            
            ticket.setAttribute("style", "background-color: orange");
            
        }
    }
}

function completePurchase() {
    
    var name = document.getElementById("name");
    
    var email = document.getElementById("email");
    
    var mesgname = document.getElementById("msgname");
    
    var mesgemail = document.getElementById("msgemail");
    
    var mesgTicket = document.getElementById("msgTickets");
    
    var mesgconfirmation = document.getElementById("confirmation");

    if (isLetter(name.value) == 0) {
        
        mesgname.innerHTML = "Only letters are allowed";
        
        name.setAttribute("style", "background-color: orange");
        
    }
    if (checkEmail(email.value) == 0) {
        
        mesgemail.innerHTML = "Incorrect email format";
        
        email.setAttribute("style", "background-color: orange");
    }
    if (isLetter(name.value) == 1) {
        
        mesgname.innerHTML = "";
        
        name.setAttribute("style", "background-color: none");
    }
    if (checkEmail(email.value) == 1) {
        
        mesgemail.innerHTML = "";
        
        email.setAttribute("style", "background-color: none");
        
    }
    if ((isLetter(name.value) == 1) && (checkEmail(email.value) == 1)) {
        
        stopTimer();
        
        mesgTicket.innerHTML = "";
        
        mesgname.innerHTML = "";
        
        mesgemail.innerHTML = "";
        
        name.setAttribute("style", "background-color: none");
        
        email.setAttribute("style", "background-color: none");
        
        ticket.setAttribute("style", "background-color: none");
        
        mesgconfirmation.innerHTML = "Thank you for buying " + numofTicket + " tickets for $" + totalCost;
    }
}

function resetForm() {
    
    location.reload();
    
}

function checkEmail(data) {
    
    var message = "";
    
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (data.match(pattern)) {
        
        message = 1;  //Correct
        
    } else {
        
        message = 0; //  incorrect
    }
    return message;
}


function isLetter(data) {
    
    var message;

    var pattern = /^[A-Za-z\s]+$/;

    if (data.match(pattern)) {
        
        message = 1; // Correct
        
    } else {
        
        message = 0;// Incorrect
    }
    return message;
} 





