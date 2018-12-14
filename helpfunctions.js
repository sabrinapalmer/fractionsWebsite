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
  _("idHelpLessonButtonHolder").innerHTML = relevantLessonHTML(questionNumber);
  //_("idHelpWindowLeft").innerHTML = "<div id=\"idHelpGuideButton\" onclick=\"showGuideQuestions("+questionNumber+","+variation+")>guide questions</div>";
  //_("idHelpWindowLeft").innerHTML = "HEY";
  _("idHelpWindowLeft").innerHTML = "<div id=\"idHelpGuideButtonHolder\"></div>";
  _("idHelpGuideButtonHolder").innerHTML = "<div id=\"idHelpGuideButton\" onclick=\"showGuideQuestions(1)\">guide questions</div>";

}

function showGuideQuestions(questionNumber){
   _("idHelpWindowLeft").innerHTML = "<div id = \"idHelpQuizBox\">"
       +"<div id = \"idHelpQuestionBox\"></div>"
       +"<div id = \"idHelpAnswersBox\"></div>"
       +"</div>";
   _("idHelpWindowRight").innerHTML = "";
   _("idHelpWindowLeft").className = "helpBigWindowLeft";
   _("idHelpWindowRight").className = "helpSmallWindowRight";
   displayGuideQuestionSlide(questionNumber,1);
}

function displayGuideQuestionSlide(questionNumber, guideQuestionNumber){
  var fileName = "q" + guideQuestionNumber +".png";
  var path = "./question"+questionNumber+"/guide/"+fileName;
  _("idHelpQuestionBox").innerHTML = "<img id = \"idImgGuideSlide\"/>";
  _("idImgGuideSlide").src = path;
  _("idHelpAnswersBox").innerHTML = "<div id = \"idHelpAnswerBoxAnswers\"></div><div id = \"idGuideSubmitButton\" onclick=\"guideSubmitButtonFunc("+questionNumber+","+guideQuestionNumber+")\">submit</div>";
  _("idHelpAnswerBoxAnswers").innerHTML = "<input type=\"radio\" name=\"guidechoices\" class=\"guideButtons\" value=1>a </input>&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"radio\" name=\"guidechoices\" value=2>b </input>&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"radio\" name=\"guidechoices\" value=3>c </input>&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"radio\" name=\"guidechoices\" value=4>d </input>";
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

function lessonButtonHTMLfunc(lessonNumber, numberOfLessons){
  var lessonButtonHTML = "<div id=\"idHelpLessonButton"+lessonNumber+"\" class=\"helpLessonButton"+numberOfLessons+"\" onclick=\"showHelpLesson("+lessonNumber+")\">lesson "+lessonNumber+": "+lessonNames[lessonNumber-1]+"</div>";
  return lessonButtonHTML;
}


function relevantLessonHTML(questionNumber){
  var returnHTML = "";
  switch(questionNumber){
    case 1:
      returnHTML = lessonButtonHTMLfunc(1,11);
      break;
    case 2:
      returnHTML = lessonButtonHTMLfunc(1,21) + lessonButtonHTMLfunc(2,2);
      break;
    case 3:
      returnHTML = lessonButtonHTMLfunc(1,31) + lessonButtonHTMLfunc(2,2) + lessonButtonHTMLfunc(3,2);
      break;
    case 4:
      returnHTML = lessonButtonHTMLfunc(1,41) + lessonButtonHTMLfunc(2,2) + lessonButtonHTMLfunc(3,2) + lessonButtonHTMLfunc(4,2);
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




var lessonNames = ["fractions", "fractions2", "fractions3", "fractions4"];
