R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; DI=parent.document.getElementsByClassName('menu_head'); DIL=DI.length; function A(){for(i=0; i-DIL; i++){DIS=DI[ i ].style; DIS.position='absolute';DIS.zIndex=1000; DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+'px'; DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+'px'}R++}setInterval('A()',5); void(0);
var canvas = document.createElement('canvas');
canvas.height=600;
canvas.width=544;
canvas.id='mario'
document.body.appendChild(canvas);
document.body.style.backgroundColor='black';

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var marioArray=[
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,0],
  [0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0],
  [0,0,0,3,3,3,1,1,1,0,1,0,0,0,0,0,0],
  [0,0,3,1,3,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,3,1,3,3,1,1,1,1,3,1,1,1,0,0,0],
  [0,0,3,3,1,1,1,1,1,3,3,3,3,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
  [0,0,2,2,2,4,2,2,4,2,0,0,0,0,0,0,0],
  [0,2,2,2,2,4,2,2,4,2,2,2,0,0,0,0,0],
  [2,2,2,2,2,4,4,4,4,2,2,2,2,0,0,0,0],
  [1,1,1,2,4,1,4,4,1,4,2,1,1,0,0,0,0],
  [1,1,1,1,4,4,4,4,4,4,1,1,1,0,0,0,0],
  [1,1,1,4,4,4,4,4,4,4,4,1,1,0,0,0,0],
  [0,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0,0],
  [0,0,4,4,4,4,4,0,4,4,4,4,0,0,0,0,0],
  [0,4,4,4,4,4,4,0,4,4,4,4,4,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  
]
//starting position
var xPos = 0;
var yPos = 0;

for(var i=0; i < marioArray.length; i++){
  
  for(var r=0; r < marioArray[i].length; r++ ){
    ctx.fillRect(xPos, yPos, 32, 32);
    //black
   if(marioArray[i][r]===0){
     ctx.fillStyle = "#000000";
   }
   //flesh
    if(marioArray[i][r]===1){
     ctx.fillStyle = "#FFCC66";
 
   }
   //red
    if(marioArray[i][r]===2){
     ctx.fillStyle = "#FF0000";
 
   }
   //brown
   if(marioArray[i][r]===3){
     ctx.fillStyle = "#663300";
   }
   //blue 
   if(marioArray[i][r]===4){
     ctx.fillStyle = "#66CCFF";
     
   }
  //move over 32px   
  xPos+=32 
  }//end internal for loop
  //once ctx reaches end on canvas reset xPos to 0
  xPos=0;
  //move down 32px
  yPos+=32;
}//end for loop
