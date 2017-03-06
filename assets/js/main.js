var btn1=document.getElementById('1');
var btn2=document.getElementById('2');
var btn3=document.getElementById('3');
var btn4=document.getElementById('4');
var btn5=document.getElementById('5');
var btn6=document.getElementById('6');
var btn7=document.getElementById('7');
var btn8=document.getElementById('8');
var btn9=document.getElementById('9');


function Tictactoe(x,o){
  this.x=x;
  this.o=o;
  this.winner=function(){
    if((btn1.value==this.x && btn2.value==this.x && btn3.value==this.x)
      || (btn4.value==this.x && btn5.value==this.x && btn6.value==this.x)
      || (btn7.value==this.x && btn8.value==this.x && btn9.value==this.x)
      || (btn1.value==this.x && btn4.value==this.x && btn7.value==this.x)
      || (btn2.value==this.x && btn5.value==this.x && btn8.value==this.x)
      || (btn3.value==this.x && btn6.value==this.x && btn9.value==this.x)
      || (btn1.value==this.x && btn5.value==this.x && btn9.value==this.x)
      || (btn3.value==this.x && btn5.value==this.x && btn7.value==this.x)){
      alert("jugador X gana");
    }else if((btn1.value==this.o && btn2.value==this.o && btn3.value==this.o)
              || (btn4.value==this.o && btn5.value==this.o && btn6.value==this.o)
              || (btn7.value==this.o && btn8.value==this.o && btn9.value==this.o)
              || (btn1.value==this.o && btn4.value==this.o && btn7.value==this.o)
              || (btn2.value==this.o && btn5.value==this.o && btn8.value==this.o)
              || (btn3.value==this.o && btn6.value==this.o && btn9.value==this.o)
              || (btn1.value==this.o && btn5.value==this.o && btn9.value==this.o)
              || (btn3.value==this.o && btn5.value==this.o && btn7.value==this.o)){
              alert("jugador O gana");
    }
  }
}
var jugador=new Tictactoe("X","O");
jugador.winner();

document.getElementById('nuevo').onclick=function newGame(){
  for(var i=1;i<=9;i++){
    document.getElementById(i.toString()).value="h";
    //alert(i);
  }
}

if(exports !== undefined){
  exports.Tictactoe=Tictactoe;
}
