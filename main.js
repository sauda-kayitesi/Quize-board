
function mytest()
{
var q1=document.forms["myform"]["flavor1"].value;
var q2=document.forms["myform"]["answer2"].value;
var q3=document.forms["myform"]["flavor3"].value;
var q4=document.forms["myform"]["flavor4"].value;
var q5=document.forms["myform"]["flavor5"].value;
var q6=document.forms["myform"]["flavor6"].value;
var q7=document.forms["myform"]["flavor7"].value;
var q8=document.forms["myform"]["flavor8"].value;
var q9=document.forms["myform"]["flavor9"].value;

var marks=0;
if(q1=="All of the above.")
{
  marks=marks+2;
  }
if(q2=="JavaScript is designed for creating network-centric applications")
{
  marks=marks+2;
  }
if(q3=="The head section")
{
  marks=marks+2;
}
if(q4=="Microsoft")
{
  marks=marks+2;
}
if(q5=="true")
{
  marks=marks+2;
}
if(q6=="alertBox Hello World")
{
  marks=marks+2;
  }
if(q7=="function = myFunction()")
{
  marks=marks+2;
  }
if(q8=="call myFunction()")
{
  marks=marks+2;
}
if(q9=="if i = 5")
{
  marks=marks+2;
}
if(q10==" if (i != 5)")
{
  marks=marks+2;
}
alert("your score is:"+marks);
}