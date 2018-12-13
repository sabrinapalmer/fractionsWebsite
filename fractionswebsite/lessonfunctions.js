function _(x){
    return document.getElementById(x);
}


function totalsArray(x){
  var lessonTotalsArray = [12, 12, 12, 12, 12, 12, 12];
  return lessonTotalsArray[x];
}

function showLesson(slideNumber, lessonNumber){
  var totalSlides = totalsArray(lessonNumber);
  var path = "./lessonSlides/fractions" + lessonNumber + slideNumber + totalSlides + ".jpg";
  _("idLessonBoxImgBox").innerHTML = "<img id = \"idImgBoxSlide\"/>"
  _("idImgBoxSlide").src = path;
  progressBar(slideNumber, lessonNumber, totalSlides);
  updateLessonProgBar(lessonNumber);
}


function progressBar(slideNumber, lessonNumber, totalSlides){
  var progBarHTML =
      "<div id = \"idProgBarDiv\" style=\"align-content:center\"><button id = \"idBackButton\" onclick = \"backButtonFunc("+slideNumber+","+lessonNumber+","+totalSlides+")\">back</button>"
      +"<div id = \"idProgressBar\">"
      +"<div id = \"bar\"></div>"
      +"</div>"
      +"<button id = \"idNextButton\" onclick = \"nextButtonFunc("+slideNumber+","+lessonNumber+","+totalSlides+")\">next</button></div>";
  _("idLessonBoxProgBarBox").innerHTML = progBarHTML;

  var progressPercent = slideNumber/totalSlides;
  _("bar").style.width = (progressPercent*100)+"%";
  _("bar").innerHTML = slideNumber + "/" + totalSlides;
}

function backButtonFunc(slideNumber, lessonNumber, totalSlides){
  if(slideNumber == 1){
    if(lessonNumber != 1){
      lessonNumber = lessonNumber - 1;
      totalSlides = totalsArray(lessonNumber);
      slideNumber = totalSlides;
    }
  }
  else{
    slideNumber = slideNumber - 1;
  }
  showLesson(slideNumber, lessonNumber);
}

function nextButtonFunc(slideNumber, lessonNumber, totalSlides){
  if(slideNumber == totalSlides){
    //CHANGE THIS NUMBER WHEN I KNOW HOW MANY LESSONS!!!
    if(lessonNumber < 12){
      lessonNumber = lessonNumber + 1;
      totalSlides = totalsArray(lessonNumber);
      slideNumber = 1;
    }
  }
  else{
    slideNumber = slideNumber + 1;
  }
  showLesson(slideNumber, lessonNumber);
}


function updateLessonProgBar(lessonNumber){
  var i = 1;
  for(i = 1; i<=12; i++){
    var workingProg = "idLessonProgLesson"+i;
    var progElement = _(workingProg);
    if(i==lessonNumber){
      progElement.className = "lessonProgBarItem progBarItemSelected";
    }
    else{
      progElement.className = "lessonProgBarItem";
    }
  }
}
