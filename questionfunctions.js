function _(x){
    return document.getElementById(x);
}
var correctAnswersArray = [
    [
      [1,1,1],[1,1,1],[1,1,1]
    ],
    [
      [],[],[]
    ],
    [
      [],[],[]
    ]
  ];

function checkpointQuestionIncorrectFirstTime(questionNumber){

}


function showCheckpointQuestion(questionNumber){
  halfToBig();
  var variation = randomVariation(3);
  var fileName = "v" + variation+".jpg";
  var path = "./question"+questionNumber+"/checkpoint/"+fileName;
  _("idQuizBoxQuestionBox").innerHTML = "<img id = \"idImgQuestionSlide\"/>";
  _("idImgQuestionSlide").src = path;
  _("idQuizBoxAnswersBox").innerHTML = "<div id = \"idAnswerBoxAnswers\"></div><div id = \"idCheckpointSubmitButton\" onclick=\"checkpointSubmitButtonFunc("+questionNumber+","+variation+")\">submit</div>";
  loadAnswers(questionNumber, variation);
  setTimeout(function(){
    _("idHelpButtonHolder").innerHTML = "<div id=\"idShowHelpButton\" onclick=\"showHelpWindow("+questionNumber+",5)\">help!</div>";
  },1100);
  updateProgBar(questionNumber);
}


function showCheckpointQuestionNewVarWithWorked(questionNumber, variation){
  var fileName = "v" + variation+".jpg";
  var path = "./question"+questionNumber+"/checkpoint/"+fileName;
  _("idQuizBoxQuestionBox").innerHTML = "<img id = \"idImgQuestionSlide\"/>";
  _("idImgQuestionSlide").src = path;
  _("idQuizBoxAnswersBox").innerHTML = "<div id = \"idAnswerBoxAnswers\"></div><div id = \"idCheckpointSubmitButton\" onclick=\"checkpointSubmitButtonFunc("+questionNumber+","+variation+")\">submit</div>";
  bigToHalf();
  _("idQuizProgressHolder").innerHTML = "";
  loadAnswers(questionNumber, variation);
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

var selectedAnswerArray = [];
var choices = [];
function packageAnswers(type){
  choices = document.getElementsByName("choices");
  if(type=="selectOne"){
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        selectedAnswerArray[0] = choices[i].value;
      }
    }
  }
  else if (type=="multipleChoice") {
    var indexIncrement = 0;
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        selectedAnswerArray[indexIncrement] = choices[i].value;
        indexIncrement=indexIncrement+1;
      }
    }
  }
  else if (type=="enterExactFraction"){
    var indexIncrement = 0;
    for(var i=0; i<choices.length; i++){
      selectedAnswerArray[indexIncrement] = choices[i].value;
      indexIncrement = indexIncrement+1;
    }
  }
  else if (type=="enterEquivalentFraction"){
    if(choices[0] != null && choices[1] != null){
      var numerator = choices[0].value;
      var denominator = choices[1].value;
    }
    else{
      var numerator = 1;
      var denominator = 1;
    }
    var enteredAnswer = numerator / denominator;
    selectedAnswerArray[0] = enteredAnswer;
  }
  else{
    selectedAnswerArray[0] = 0;
  }
  if(selectedAnswerArray[0] == null){
    selectedAnswerArray[0] = 0;
  }
}


function loadAnswers(questionNumber, variation){

  switch(questionNumber){
    case 1:
    switch(variation){
      case 1:
      _("idAnswerBoxAnswers").innerHTML = "<input type=\"radio\" name=\"choices\" value=1>correct</input><input type=\"radio\" name=\"choices\" value=0>incorrect</input>";
      break;
      case 2:
      _("idAnswerBoxAnswers").innerHTML = "<input type=\"radio\" name=\"choices\" value=1>correct</input><input type=\"radio\" name=\"choices\" value=0>incorrect</input>";
      //_("idAnswerBoxAnswers").innerHTML = "<input type=\"checkbox\" name=\"choices\" value=1>ONE</input><input type=\"checkbox\" name=\"choices\" value=\"3\">3</input><input type=\"checkbox\" name=\"choices\" value=3>tre</input>";
      break;
      case 3:
      _("idAnswerBoxAnswers").innerHTML = "<input type=\"radio\" name=\"choices\" value=1>correct</input><input type=\"radio\" name=\"choices\" value=0>incorrect</input>";
      //_("idAnswerBoxAnswers").innerHTML = "<input type=\"number\" name=\"choices\">ONE</input><input type=\"number\" name=\"choices\">tre</input>";
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
  var type = "selectOne";
  if(questionNumber == 1 || questionNumber == 2){
    type = "selectOne";
  }
  else if (questionNumber == 3 || questionNumber == 4){
    type = "multipleChoice";
  }
  else if (questionNumber == 5 || questionNumber == 6){
    type = "enterExactFraction";
  }
  else if (questionNumber == 7 || questionNumber == 8){
    type = "enterEquivalentFraction";
  }
  packageAnswers(type);
  checkAnswers(questionNumber, variation);
  //nextquestion(questionNumber);
  //_("idHeaderText").innerHTML = selectedAnswerArray[0];
}


function nextquestion(questionNumber){
  questionNumber = questionNumber+1;
  _("idRightBox").innerHTML = quizProgressHTML;
  _("idQuizProgressHolder").style.opacity = 1;
  showCheckpointQuestion(questionNumber);
  selectedAnswerArray=[];
}


function checkAnswers(questionNumber, variation){
  var correct = true;
  for(var i = 0; i<selectedAnswerArray.length;i++){
    if(selectedAnswerArray[i]!=correctAnswersArray[questionNumber-1][variation-1][i]){
      correct = false;
    }
  }
  if(correct){
    nextquestion(questionNumber);
  }
  else{
    showHelpWindow(questionNumber, variation);
  }
}

var correctAnswersArray = [
    [
      [1,1,1],[1,1,1],[1,1,1]
    ],
    [
      [],[],[]
    ],
    [
      [],[],[]
    ]
  ];
