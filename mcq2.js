function checkAnswer(quizForm,theAnswer)
{
  var a = "?";
  var i = 0;
  for(;i<quizForm.elements.length;i++)
  {
    if(("mc" == quizForm.elements[i].name) && (quizForm.elements[i].checked))
    {
      a = quizForm.elements[i].value;
    }
  }

      
var x = window.open("","temp","width=250,height=160");
  x.document.open();
 
   if("?" == a)
 { x.document.write("<font size=+1 color=red><center><h1>Please make a selection!</h1>");
 x.document.write("<p>Now close this window!</p></center></font>");
return false;
}

   if(a == theAnswer)
  { x.document.write("<font size=+1 color=green><center><h1>Correct!</h1>");
  x.document.write("<p>Now close this window!</p></center></font>");
  }
     else
   { x.document.write("<font size=+1 color=red><center><h1>Incorrect!</h1>");
  x.document.write("<p>Now close this window <br />and try again!</p></center></font>");

   }
   x.document.close();
       
  
  

  
  return false;
}

