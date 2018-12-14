

//TO DO: guideQuestionRelevantLesson (Single lesson for specific guide Q)
//    guideQuestionAnswers (1,2,3,4 for a,b,c,d)
//    lessonNames
//    relevantLessonHTML (add lessons for checkpoint question initial help screen)
//    fix guideSubmitButtonFunc if i add more than (or less than) 3 guide questions for one checkpoint
//    change help bar text for right buttons
var guideQuestionRelevantLesson = [
  [1,2,3],
  [1,2,3],
  [],
  []
];

var guideQuestionAnswers = [
  [1,1,1],
  [1,1,1],
  [],
  []
];

var lessonNames = ["fractions", "fractions2", "fractions3", "fractions4"];

function showHelpWindow(questionNumber, variation){
  _("idHelpWindow").className = "helpWindowShowing";
  _("idHelpWindowLeft").className = "helpHalfWindowLeft";
  _("idHelpWindowRight").className = "helpHalfWindowRight";
  _("idHelpWindowTextBox").className = "helpWindowTextBox";
  _("idHelpWindowTextBox").innerHTML = "<div id = \"idHelpText\"></div>";
  _("idHelpWindowBottomDiv").className = "helpWindowBottomDiv";
  _("idHelpWindowRight").innerHTML = "<div id=\"idHelpLessonButtonHolder\"></div>";
  if(variation<=3){
    _("idHelpText").innerHTML = "sorry, that wasn't quite right... click to either attempt some easier <b>guide&nbsp;questions</b> to pinpoint your confusion&nbsp;(recommended) or review the <b>relevant&nbsp;lessons</b>. then you can retry that checkpoint question with a worked example for extra help.";
    _("idHelpWindowBottomDiv").innerHTML = "<div id=\"idHelpBottomButton\" onclick=\"hideHelpWindow("+questionNumber+","+variation+")\">retry checkpoint question</div>";
  }
  else{
    _("idHelpText").innerHTML = "if you need a little help, click to either attempt some easier <b>guide&nbsp;questions</b>&nbsp;(recommended) or review the <b>relevant&nbsp;lessons</b>. <br> then make your best guess on the checkpoint question.";
    _("idHelpWindowBottomDiv").innerHTML = "<div id=\"idHelpBottomButton\" onclick=\"hideHelpWindow("+questionNumber+","+variation+")\">try checkpoint question</div>";

  }
  _("idHelpLessonButtonHolder").innerHTML = relevantLessonHTML(questionNumber,variation);
  //_("idHelpWindowLeft").innerHTML = "<div id=\"idHelpGuideButton\" onclick=\"showGuideQuestions("+questionNumber+","+variation+")>guide questions</div>";
  //_("idHelpWindowLeft").innerHTML = "HEY";
  _("idHelpWindowLeft").innerHTML = "<div id=\"idHelpGuideButtonHolder\"></div>";
  _("idHelpGuideButtonHolder").innerHTML = "<div id=\"idHelpGuideButton\" onclick=\"showGuideQuestions("+questionNumber+","+variation+")\">guide questions</div>";

}

function showGuideQuestions(questionNumber,variation){
   _("idHelpWindowLeft").innerHTML = "<div id = \"idHelpQuizBox\">"
       +"<div id = \"idHelpQuestionBox\"></div>"
       +"<div id = \"idHelpAnswersBox\"></div>"
       +"</div>";
   //_("idHelpWindowRight").innerHTML = "";
   _("idHelpWindowLeft").className = "helpBigWindowLeft";
   _("idHelpWindowRight").className = "helpSmallWindowRight";
   displayGuideQuestionSlide(questionNumber,1,variation);
}

function displayGuideQuestionSlide(questionNumber, guideQuestionNumber, variation){
  var fileName = "q" + guideQuestionNumber +".png";
  var path = "./question"+questionNumber+"/guide/"+fileName;
  _("idHelpQuestionBox").innerHTML = "<img id = \"idImgGuideSlide\"/>";
  _("idImgGuideSlide").src = path;
  _("idHelpAnswersBox").innerHTML = "<div id = \"idHelpAnswerBoxAnswers\"></div><div id = \"idGuideSubmitButton\" onclick=\"guideSubmitButtonFunc("+questionNumber+","+guideQuestionNumber+","+variation+")\">submit</div>";
  _("idHelpAnswerBoxAnswers").innerHTML = "<input type=\"radio\" name=\"guidechoices\" value=1>a </input>&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"radio\" name=\"guidechoices\" value=2>b </input>&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"radio\" name=\"guidechoices\" value=3>c </input>&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"radio\" name=\"guidechoices\" value=4>d </input>";
  _("idHelpWindowRight").innerHTML = "<div id=\"idHelpWindowRightButtonsBox\"></div>";
  _("idHelpWindowBottomDiv").innerHTML = "";
  var relevantLessonNumber = guideQuestionRelevantLesson[questionNumber-1][guideQuestionNumber-1];
  if(variation<=3){
    _("idHelpWindowRightButtonsBox").innerHTML = "<div id=\"idHelpGuideRelevantLessonButton\" onclick=\"showHelpLesson("+relevantLessonNumber+","+variation+","+guideQuestionNumber+","+questionNumber+")\">lesson "+relevantLessonNumber+": "+lessonNames[relevantLessonNumber-1]+"</div>"
        +"<div id=\"idHelpRetryButtonSmaller\"onclick=\"hideHelpWindow("+questionNumber+","+variation+")\">retry checkpoint question</div>";
  }
  else{
    _("idHelpWindowRightButtonsBox").innerHTML = "<div id=\"idHelpGuideRelevantLessonButton\" onclick=\"showHelpLesson("+relevantLessonNumber+","+variation+","+guideQuestionNumber+","+questionNumber+")\">lesson "+relevantLessonNumber+": "+lessonNames[relevantLessonNumber-1]+"</div>"
        +"<div id=\"idHelpRetryButtonSmaller\"onclick=\"hideHelpWindow("+questionNumber+","+variation+")\">try checkpoint question</div>";
  }
}


function hideHelpWindow(questionNumber, variation){
  _("idHelpWindow").className = "nOpacity";
  _("idHelpWindowLeft").className = "nOpacity";
  _("idHelpWindowRight").className = "nOpacity";
  _("idHelpWindowTextBox").className = "nOpacity";
  _("idHelpWindowBottomDiv").className = "nOpacity";
  _("idHelpWindowLeft").innerHTML = "";
  _("idHelpWindowRight").innerHTML = "";
  _("idHelpWindowTextBox").innerHTML = "";
  _("idHelpWindowBottomDiv").innerHTML = "";
  if(variation<=3){
    variation=variation+1;
    if(variation==4){
      variation = 1;
    }
    showCheckpointQuestionNewVarWithWorked(questionNumber, variation);
  }
}

function lessonButtonHTMLfunc(lessonNumber, numberOfLessons,variation, questionNumber){
  var lessonButtonHTML = "<div id=\"idHelpLessonButton"+lessonNumber+"\" class=\"helpLessonButton"+numberOfLessons+"\" onclick=\"lessonButtonNoGuideAttempt("+lessonNumber+","+variation+","+questionNumber+")\">lesson "+lessonNumber+": "+lessonNames[lessonNumber-1]+"</div>";
  return lessonButtonHTML;
}

function lessonButtonNoGuideAttempt(lessonNumber, variation,questionNumber){
  showHelpLesson(lessonNumber,variation,1,questionNumber);
  _("idHelpReturnToGuideQuestionButton").innerHTML = "try the guide questions";
}


function relevantLessonHTML(questionNumber, variation){
  var returnHTML = "";
  switch(questionNumber){
    case 1:
      returnHTML = lessonButtonHTMLfunc(1,11,variation,questionNumber);
      break;
    case 2:
      returnHTML = lessonButtonHTMLfunc(1,21,variation,questionNumber) + lessonButtonHTMLfunc(2,2,variation,questionNumber);
      break;
    case 3:
      returnHTML = lessonButtonHTMLfunc(1,31,variation,questionNumber) + lessonButtonHTMLfunc(2,2,variation,questionNumber) + lessonButtonHTMLfunc(3,2,variation,questionNumber);
      break;
    case 4:
      returnHTML = lessonButtonHTMLfunc(1,41,variation,questionNumber) + lessonButtonHTMLfunc(2,2,variation,questionNumber) + lessonButtonHTMLfunc(3,2,variation,questionNumber) + lessonButtonHTMLfunc(4,2,variation,questionNumber);
      break;
    case 5:
      returnHTML = "question 5";
      break;
    case 6:
      returnHTML = "question 6";
      break;
    case 7:
      returnHTML = "question 7";
      break;
    case 8:
      returnHTML = "question 8";
      break;
    case 9:
      returnHTML = "question 9";
      break;
    case 10:
      returnHTML = "question 10";
      break;
    case 11:
      returnHTML = "question 11";
      break;
    case 12:
      returnHTML = "question 12";
      break;
  }
  return returnHTML;
}

function guideSubmitButtonFunc(questionNumber,guideQuestionNumber, variation){
  var selectedAnswer;
  var correct = true;
  guidechoices = document.getElementsByName("guidechoices");
  for(var i = 0; i<guidechoices.length; i++){
    if(guidechoices[i].checked){
      selectedAnswer = guidechoices[i].value;
    }
  }
  if(selectedAnswer != guideQuestionAnswers[questionNumber-1][guideQuestionNumber-1]){
    correct = false;
  }
  if(correct){
    if(guideQuestionNumber==1){
      _("idHelpText").innerHTML = "nice! two more guide questions!";
      displayGuideQuestionSlide(questionNumber,2,variation);
    }
    else if(guideQuestionNumber==2){
      _("idHelpText").innerHTML = "great work! last guide question!";
      displayGuideQuestionSlide(questionNumber,3,variation);
    }
    else if(guideQuestionNumber==3){
      hideHelpWindow(questionNumber, variation);
    }
    }
  else{
    _("idHelpText").innerHTML = "oops not that one... try again or check out the related lesson on the right";
  }
}


function showHelpLesson(lessonNumber, variation, fromGuideNumber, questionNumber){
  _("idHelpWindowLeft").innerHTML = "<div id=\"idHelpLessonBox\"><div id=\"idHelpLessonBackButtonBox\"></div><div id=\"idHelpLessonImgBox\"></div><div id=\"idHelpLessonNextButtonBox\"></div></div>";
  _("idHelpWindowRight").innerHTML = "";
  _("idHelpWindowLeft").className = "helpBigWindowLeft";
  _("idHelpWindowRight").className = "helpSmallWindowRight";
  showHelpLessonSlide(lessonNumber,1);

  _("idHelpWindowRight").innerHTML = "<div id=\"idHelpWindowRightButtonsBox\"></div>";
  _("idHelpWindowBottomDiv").innerHTML = "";

  if(variation<=3){
    _("idHelpWindowRightButtonsBox").innerHTML = "<div id=\"idHelpReturnToGuideQuestionButton\" onclick=\"returnToGuideQuestionFunc("+questionNumber+","+variation+","+fromGuideNumber+")\">return to guide question "+fromGuideNumber+"</div>"
        +"<div id=\"idHelpRetryButtonSmaller\"onclick=\"hideHelpWindow("+questionNumber+","+variation+")\">retry checkpoint question</div>";
  }
  else{
    _("idHelpWindowRightButtonsBox").innerHTML = "<div id=\"idHelpReturnToGuideQuestionButton\" onclick=\"returnToGuideQuestionFunc("+questionNumber+","+variation+","+fromGuideNumber+")\">return to guide question "+fromGuideNumber+"</div>"
        +"<div id=\"idHelpRetryButtonSmaller\"onclick=\"hideHelpWindow("+questionNumber+","+variation+")\">try checkpoint question</div>";
  }
}

function returnToGuideQuestionFunc(questionNumber, variation, fromGuideNumber){
  showGuideQuestions(questionNumber,variation);
  displayGuideQuestionSlide(questionNumber, fromGuideNumber,variation);
}

function showHelpLessonSlide(lessonNumber, helpSlideNumber){
  var totalSlides = totalsArray(lessonNumber);
  var path = "./lessonSlides/fractions" + lessonNumber + helpSlideNumber + totalSlides + ".jpg";
  _("idHelpLessonImgBox").innerHTML = "<img id=\"idHelpLessonImgBoxSlide\"/>";
  _("idHelpLessonImgBoxSlide").src = path;
  _("idHelpWindowBottomDiv").innerHTML = "";
  _("idHelpLessonNextButtonBox").innerHTML = "<img id = \"idHelpNextButton\" onclick = \"helpNextButtonFunc("+helpSlideNumber+","+lessonNumber+")\"></img><div id=\"idNextBtnText\" class=\"textOnButton\" onclick = \"helpNextButtonFunc("+helpSlideNumber+","+lessonNumber+")\">next</div>";
  _("idHelpLessonBackButtonBox").innerHTML = "<img id = \"idHelpBackButton\" onclick = \"helpBackButtonFunc("+helpSlideNumber+","+lessonNumber+")\"></img><div id=\"idBackBtnText\" class=\"textOnButton\" onclick = \"helpBackButtonFunc("+helpSlideNumber+","+lessonNumber+")\">back</div>";
  _("idHelpNextButton").src = "./icons/nextarrow.png";
  _("idHelpBackButton").src = "./icons/backarrow.png";
}


function helpNextButtonFunc(helpSlideNumber,lessonNumber){
  var totalSlides = totalsArray[lessonNumber];
  if(helpSlideNumber != totalSlides){
    helpSlideNumber = helpSlideNumber + 1;
    showHelpLessonSlide(lessonNumber, helpSlideNumber);
  }
}

function helpBackButtonFunc(helpSlideNumber,lessonNumber){
  if(helpSlideNumber != 1){
    helpSlideNumber = helpSlideNumber - 1;
    showHelpLessonSlide(lessonNumber, helpSlideNumber);
  }
}
