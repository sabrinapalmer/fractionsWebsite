function showHelpWindow(questionNumber){
  _("idHelpWindow").className = "helpWindowShowing";
  _("idHelpWindowLeft").className = "helpHalfWindowLeft";
  _("idHelpWindowRight").className = "helpHalfWindowRight";
  _("idHelpWindowTextBox").className = "helpWindowTextBox";
  _("idHelpWindowTextBox").innerHTML = "<div id = \"idHelpText\"></div>";
  _("idHelpText").innerHTML = "sorry, that wasn't quite right... click to either attempt some easier <b>guide&nbsp;questions</b> to pinpoint your confusion&nbsp;(recommended) or review the <b>relevant&nbsp;lessons</b>. then you can retry that checkpoint question with a worked example for extra help.";
  _("idHelpWindowBottomDiv").className = "helpWindowBottomDiv";
  _("idHelpWindowBottomDiv").innerHTML = "<div id=\"idHelpBottomButton\" onclick=\"hideHelpWindow()\">return to question</div>";
  _("idHelpWindowRight").innerHTML = "<div id=\"idHelpLessonButtonHolder\"></div>";
  _("idHelpLessonButtonHolder").innerHTML = relevantLessonHTML(questionNumber);
}

function hideHelpWindow(){
  _("idHelpWindow").className = "nOpacity";
  _("idHelpWindowLeft").className = "nOpacity";
  _("idHelpWindowRight").className = "nOpacity";
  _("idHelpWindowTextBox").className = "nOpacity";
  _("idHelpWindowBottomDiv").className = "nOpacity";
  _("idHelpWindowLeft").innerHTML = "";
  _("idHelpWindowRight").innerHTML = "";
  _("idHelpWindowTextBox").innerHTML = "";
  _("idHelpWindowBottomDiv").innerHTML = "";

}

function lessonButtonHTMLfunc(lessonNumber, numberOfLessons){
  var lessonButtonHTML = "<div id=\"idHelpLessonButton"+lessonNumber+"\" class=\"helpLessonButton"+numberOfLessons+"\" onclick=\"showHelpLesson("+lessonNumber+")\">lesson "+lessonNumber+"</div>";
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
