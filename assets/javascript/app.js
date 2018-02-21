var one = $("<button>");

$(document).ready(function() {
    one.text("start");
    $("#main-content").append(one);
    $("#row1").hide();
    $("#row2").hide();
    $("#row3").hide();
    $("#row4").hide();
});


$(one).on("click", function(){
    $("#main-content").empty();
    $("#row1").show();
    stopwatch.start();
});


var clockRunning = false;
// Our stopwatch object
var stopwatch = {
  time: 90,
  reset: function() {
    stopwatch.time = 0;
    stopwatch.lap = 1;
    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");
    // DONE: Empty the "laps" div.
    $("#laps").text("");
  },
  start: function() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  
  count: function() {

    if (stopwatch.time === 0) {
        stopwatch.stop();
        console.log("times up!")
    }
    else {
        stopwatch.time--;
        var var2 = stopwatch.timeConverter(stopwatch.time);
        $("#timer").text(var2);
    }
  },
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

var answer1 = null;
var answer2 = null;
var answer3 = null;
var answer4 = null;

// Vars for final results
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var trivia = [{
    "question": "Which champion has 9 tails?",
    "possAnswers": ["Ahri", "Galio", "Teemo", "Garen"]
  }, {
    "question": "Which champion has the ult that knocks up everyone that it hits?",
    "possAnswers": ["Malphite", "Sejuani", "Cho'gath", "Blitzcrank"]
  }, {
    "question": "Which team won 2017 World Championship game?",
    "possAnswers": ["SKT T1", "CLG", "Samsung Galaxy", "Longzhu Gaming"]
  }, {
    "question": "Which Champion DOES NOT have hook/grab skill?",
    "possAnswers": ["Thresh", "Blitzcrank", "Nautilus", "Singed"]
  }]

  
  