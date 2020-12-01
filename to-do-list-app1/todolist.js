function create(){
    create_pop();        
}

function deletetab(){
var grdpar; 

grdpar=this.parentElement;
for (var i = 0; i<=3; i++){
grdpar=grdpar.parentElement;
}
//grtgrtpar.style.display="none";
grdpar.style.display="none";
}
// submit funcion that returns a list of the inputted data and description
function submit(){
var inputlist=[];
var title=document.getElementById("titleinput").value;
var desc=document.getElementById("descinput").value;
inputlist.push(title);
inputlist.push(desc);

if (title == "" && desc == ""){
}
else{ //creates tab 
    var main=document.getElementsByClassName("main")[0];
   var tab=create_tab(inputlist)
  main.appendChild(tab);
  document.getElementById("titleinput").value = "";
document.getElementById("descinput").value = "";
   // create_tab(inputlist);
    var nothinghere=document.getElementById("nothinghere");
nothinghere.style.display="none";
} 
close_pop();  
}


function create_tab(inputlist){
var newdiv=document.createElement("DIV"); //creates the section tab
newdiv.className="section";

var contdiv=document.createElement("DIV"); //creates the container tab 
contdiv.className="cont";

var newicons=document.createElement("DIV");
newicons.className="icons"; //icon divs

var iconbutton1=document.createElement("BUTTON"); //icon buttons
var iconbutton2=document.createElement("BUTTON");

/*CREATES  THE ICONS USING FONT AWESOME CLASSES AND ADDING AN EVENT LISTENER*/
var iconI=document.createElement("I");
iconI.className="fa fa-chevron-down";
iconI.addEventListener("click", expand);

var iconI2=document.createElement("I");
//  iconI2.className="fa fa-trash-alt";
iconI2.className= "fa-trash-alt"; 
iconI2.style.color="red";
iconI2.addEventListener("click", deletetab);

//  GETS THE INPUTED title AND DESCRIPTION FROM INPUT FIELD AND ADDS IT TO THE NEW CREATED DIV.
var newtitlepara=document.createElement("P");
newtitlepara.id="para";
var inputted_title=document.getElementById("titleinput").value;
newtitlepara.innerHTML=inputlist[0];

var firtstab= document.createElement("DIV");
firtstab.className="tab1";

//appending elements, the cont(container) div appends the paragraph(inputted title) and the div container for the icon buttons as the first tab. 
firtstab.appendChild(newtitlepara);
iconbutton1.appendChild(iconI);
iconbutton2.appendChild(iconI2);

newicons.appendChild(iconbutton1);
newicons.appendChild(iconbutton2);

//  contdiv.appendChild(newicons);

firtstab.appendChild(newicons); //first tab that houses the title paragraph and icons

contdiv.appendChild(firtstab); //the container 

//second tab for the description to apppear des stands for description

var descontainer= document.createElement("DIV");
descontainer.className="descontainer";
var despara=document.createElement("P");
despara.innerHTML=inputlist[1];
descontainer.appendChild(despara);


contdiv.appendChild(descontainer); //containerdiv appends the description container
newdiv.appendChild(contdiv); //new to do list tab  created 
return newdiv;
}


function create_pop(){ //creates the pop up
var popdisplay=document.getElementsByClassName("popup")[0];
popdisplay.style.display="flex";

}

function close_pop(){ //close the pop up
var popdisplay=document.getElementsByClassName("popup")[0];
document.getElementById("titleinput").value="";
popdisplay.style.display="none";
}



var checked=0; //0 is off so when function is called it changes to on
function expand(){
var parent= document.getElementsByClassName("fa fa-chevron-down")[0];
 parent= this.parentElement;
 for (var i = 0; i<3; i++){ //loops through the elements parent to get the specific parent of the selected dropdown
parent=parent.parentElement;
 }
 var descontainer=parent.querySelectorAll(".descontainer")[0];

if (checked == 0){ 
    descontainer.style.display="block";
     parent.style.height="auto";
    checked=1;
}
else{
descontainer.style.display="none";
 parent.style.height="10%";
checked=0;
}
}