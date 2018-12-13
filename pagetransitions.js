function _(x){
    return document.getElementById(x);
}

function homeClick(){
  headerToBig();
  headerToHome();
  bigToHalf();
  _("idCornerTitle").style.opacity = 0;
  _("idLeftBox").innerHTML = homeHTML;
  _("idRightBox").innerHTML = homeButtonsHTML;
  setTimeout(function(){
        _("idLeftBoxHomeText").style.opacity = 1;
        _("idHomeButtonHolder").style.opacity = 1;
        _("idHomeTextTextBox").style.opacity = 1;
        }, 70);
  var lessonNumber = 1;
  var slideNumber = 1;
  var totalSlides = 12;
  hideHelpWindow();
}

function quizClick(){
  headerToSmall();
  headerToQuiz();
  halfToBig();
  _("idCornerTitle").style.opacity = 1;
  _("idLeftBox").innerHTML = quizHTML;
  _("idRightBox").innerHTML = quizProgressHTML;
  showCheckpointQuestion(1);
  setTimeout(function(){
    _("idLeftBoxQuizBox").style.opacity = 1;
    _("idQuizProgressHolder").style.opacity = 1;
  }, 70);
  hideHelpWindow();
}


function lessonsClick(x){
  headerToSmall();
  headerToLessons();
  halfToBig();
  _("idCornerTitle").style.opacity = 1;
  _("idLeftBox").innerHTML = lessonsHTML;
  _("idRightBox").innerHTML = lessonsProgressHTML;
  var slideNumber = 1;
  var lessonNumber = x;
  var totalSlides = totalsArray(x);
  showLesson(slideNumber, lessonNumber);
  setTimeout(function(){
    _("idLeftBoxLessonBox").style.opacity = 1;
    _("idLessonProgressHolder").style.opacity = 1;
  }, 70);
  hideHelpWindow();
}

function halfToBig(){
    var lb = _("idLeftBox");
    lb.className = "leftboxbig";
    var rb = _("idRightBox");
    rb.className = "rightboxsmall";
}

function bigToHalf(){
    var lb = _("idLeftBox");
    lb.className = "leftboxhalf";
    var rb = _("idRightBox");
    rb.className = "rightboxhalf";
}

function headerToSmall(){
    var header = _("idHeaderText");
    header.className = "smallHeaderFont";
    _("idSection").style.height = "80%";
}

function headerToBig(){
    var header = _("idHeaderText");
    header.className = "bigHeaderFont";
    _("idSection").style.height = "75%";
}

function replaceHeaderText(x){
    var header = _("idHeaderText");
    header.innerHTML = x;
}

function headerToHome(){
    replaceHeaderText("learn fractions");
}

function headerToQuiz(){
    replaceHeaderText("learning quiz");
}

function headerToLessons(){
    replaceHeaderText("fraction lessons");
}







var homeHTML = "<div id = \"idLeftBoxHomeText\" class = \"lefttextbox leftboxfading\"><div id=\"idHomeTextTextBox\" class=\"leftboxfading\">welcome!  to start learning, click on either <b>the&nbsp;learning&nbsp;quiz</b>&nbsp;(recommended) or <b>the&nbsp;fraction&nbsp;lessons</b> for a quick review of fractions."
          +"  the quiz is designed to guide you through learning.  as you answer questions, it will adapt and provide easier questions as needed to encourage problem solving.  you will also have the opportunity to review lessons while working through the quiz.</div></div>";
var lessonsHTML = "<div id = \"idLeftBoxLessonBox\" class = \"leftboxfading lessonbox\">"
    +"<div id = \"idLessonBoxImgBox\"></div>"
    +"<div id = \"idLessonBoxProgBarBox\"></div>"
    +"</div>";
var quizHTML = "<div id = \"idLeftBoxQuizBox\" class = \"leftboxfading\">"
    +"<div id = \"idQuizBoxQuestionBox\"></div>"
    +"<div id = \"idQuizBoxAnswersBox\"></div>"
    +"</div>";


var homeButtonsHTML = "<div id = \"idHomeButtonHolder\" class = \"leftboxfading\">"
    +"<button id = \"idStartQuizButton\" onclick = \"quizClick()\">start quiz</button>"
    +"<button id = \"idReviewLessonsButton\" onclick = \"lessonsClick(1)\">review lessons</button></div>";
var quizProgressHTML = "<div id = \"idQuizProgressHolder\" class = \"leftboxfading\">"
    +"<div id = \"idQuizProgQuestion1\" class = \"quizProgBarItem progBarItemSelected\">question 1</div>"
    +"<div id = \"idQuizProgQuestion2\" class = \"quizProgBarItem\">question 2</div>"
    +"<div id = \"idQuizProgQuestion3\" class = \"quizProgBarItem\">question 3</div>"
    +"<div id = \"idQuizProgQuestion4\" class = \"quizProgBarItem\">question 4</div>"
    +"<div id = \"idQuizProgQuestion5\" class = \"quizProgBarItem\">question 5</div>"
    +"<div id = \"idQuizProgQuestion6\" class = \"quizProgBarItem\">question 6</div>"
    +"<div id = \"idQuizProgQuestion7\" class = \"quizProgBarItem\">question 7</div>"
    +"<div id = \"idQuizProgQuestion8\" class = \"quizProgBarItem\">question 8</div>"
    +"<div id = \"idQuizProgQuestion9\" class = \"quizProgBarItem\">question 9</div>"
    +"<div id = \"idQuizProgQuestion10\" class = \"quizProgBarItem\">question 10</div>"
    +"<div id = \"idQuizProgQuestion11\" class = \"quizProgBarItem\">question 11</div>"
    +"<div id = \"idQuizProgQuestion12\" class = \"quizProgBarItem\">question 12</div>"
    +"</div>";
var lessonsProgressHTML = "<div id = \"idLessonProgressHolder\" class = \"leftboxfading\">"
    +"<div id = \"idLessonProgLesson1\" class = \"lessonProgBarItem progBarItemSelected\" onclick = \"showLesson(1,1)\">lesson 1</div>"
    +"<div id = \"idLessonProgLesson2\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,2)\">lesson 2</div>"
    +"<div id = \"idLessonProgLesson3\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,3)\">lesson 3</div>"
    +"<div id = \"idLessonProgLesson4\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,4)\">lesson 4</div>"
    +"<div id = \"idLessonProgLesson5\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,5)\">lesson 5</div>"
    +"<div id = \"idLessonProgLesson6\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,6)\">lesson 6</div>"
    +"<div id = \"idLessonProgLesson7\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,7)\">lesson 7</div>"
    +"<div id = \"idLessonProgLesson8\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,8)\">lesson 8</div>"
    +"<div id = \"idLessonProgLesson9\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,9)\">lesson 9</div>"
    +"<div id = \"idLessonProgLesson10\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,10)\">lesson 10</div>"
    +"<div id = \"idLessonProgLesson11\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,11)\">lesson 11</div>"
    +"<div id = \"idLessonProgLesson12\" class = \"lessonProgBarItem\" onclick = \"showLesson(1,12)\">lesson 12</div>"
    +"</div>";

window.onload = function(){
    homeClick();
}
