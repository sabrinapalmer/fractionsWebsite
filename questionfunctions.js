function _(x){
    return document.getElementById(x);
}

function checkpointQuestionIncorrectFirstTime(questionNumber){

}


function showCheckpointQuestion(questionNumber){
  var variation = randomVariation(3);
  var fileName = "v" + variation+".jpg";
  var path = "./question"+questionNumber+"/checkpoint/"+fileName;
  _("idQuizBoxQuestionBox").innerHTML = "<img id = \"idImgQuestionSlide\"/>"
  _("idImgQuestionSlide").src = path;


  _("idQuizBoxAnswersBox").innerHTML = "<div id = \"idAnswerBoxAnswers\"></div><button id = \"idCheckpointSubmitButton\" onclick=\"checkpointSubmitButtonFunc("+questionNumber+","+variation+")\">"+questionNumber+","+variation+"</button>"
        +"<button onclick=\"showHelpWindow("+questionNumber+")\">show help window</button>";
  loadAnswers(questionNumber, variation);
  //changeProgressBar(questionNumber);
  updateProgBar(questionNumber);
}


function randomVariation(x){
        posVariation = Math.floor(Math.random() * x);
        return posVariation + 1;
    }


function updateProgBar(questionNumber){
  var i = 1;
  for(i = 1; i<=12; i++){
    var workingProgNode = "idQuizProgQuestion"+i;
    var progElem = _(workingProgNode);
    if(i<questionNumber){
      progElem.className = "quizProgBarItem progBarItemCompleted";
    }
    if (i == questionNumber) {
      progElem.className = "quizProgBarItem progBarItemSelected";
    }
    if(i>questionNumber){
      progElem.className = "quizProgBarItem progBarItemNotSeenYet";
    }
  }
}

function loadAnswers(questionNumber, variation){
  switch(questionNumber){
    case 1:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "hi";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 1; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 1; var 3";
      break;
    }
    break;
    case 2:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 2; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 2; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 2; var 3";
      break;
    }
    break;
    case 3:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 3; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 3; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 3; var 3";
      break;
    }
    break;
    case 4:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 4; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 4; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 4; var 3";
      break;
    }
    break;
    case 5:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 5; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 5; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 5; var 3";
      break;
    }
    break;
    case 6:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 6; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 6; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 6; var 3";
      break;
    }
    break;
    case 7:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 7; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 7; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 7; var 3";
      break;
    }
    break;
    case 8:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 8; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 8; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 8; var 3";
      break;
    }
    break;
    case 9:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 9; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 9; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 9; var 3";
      break;
    }
    break;
    case 10:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 10; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 10; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 10; var 3";
      break;
    }
    break;
    case 11:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 11; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 11; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 11; var 3";
      break;
    }
    break;
    case 12:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "question 12; var 1";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "question 12; var 2";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "question 12; var 3";
      break;
    }
    break;
    default:
    _("idAnswerBoxAnswers").innerHTML = "";
    break;
  }
}

function checkpointSubmitButtonFunc(questionNumber, variation){
  nextquestion(questionNumber);
}


function nextquestion(questionNumber){
  questionNumber = questionNumber+1;
  showCheckpointQuestion(questionNumber);
}
