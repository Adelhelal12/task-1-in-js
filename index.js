// var input1=+prompt('enter num1');
// var input2=+prompt ("enter num 2");

// function cheek(){
//     if (input1+input2==15 || ( (input1|| input2)==15))
//     {
//         console.log("true")
//     }
//     else{
//         console.log("false");
//     }

// }
// cheek();
// var arr=[];
// for(i=0 ; i<5; i++){
//     arr[i]=+prompt(`enter num ${i+1}`)
// }
// function check(arr){
//  for (var i=0;i<5;i++){
//     if (arr[i]==0){
//         console.log(`${arr[i+1]} is zero`);
//     }
//  }
// }
// check(arr);
// var a=5*5;
// alert(a);
// function swab (a,b){

//     return [a,b];
// }
// console.log(swab(50,20));

function cheek(prop,prize,pay){
 
    if (prop*prize>pay){
        return("true")
       }
       else{
        return('false')
       }
       
       
        
  
}
console.log(cheek(1,2,4));
 


//2
function converthour(hour,minutes){
    
var sec=hour*60*60+minutes*60
return(sec);
}
console.log(converthour(2,2));
//3
// function swab(a,b){
// var x;
// x=a;//20
// a=b;//50
// b=x;//20
// return(a,b);
// }
// console.log(swab( 10, 50));
//4
function animals(chickens, cows, pigs) {
	var legs;
    legs = chickens * 2 + cows * 4 + pigs * 4 ;
    return(legs);
}
console.log(animals(2,2,2))
//5
function and(a,b){
    if ((a== "true" ) && (b == "true")){
return("true");
    }
    else{
    return("false")
    }
}
console.log(and ("true","false"));
console.log(and ("false","false"));
console.log(and ("true","true"));
//6
function equal (x,y){
if(x==y){
    return("true")

}
else{
    return("false")
}
}
console.log(equal('hello','hello'));
//7
function footballPoints(wins, draws, losses) {
    var points;
    points=wins*3+draws*1+losses*0;
    return(points);
}
console.log(footballPoints(3, 4, 1 ));
//8
function isSeven(x){
    if(x==7){
        return("true")
    }
    else{
        return("false")
    }
}
console.log(isSeven(-9));
//9
function equalit(a,b){
    if((a=== b)){
        return "true";
    }
    else{
        return "false";}
    }
    console.log(equalit(1,"1"));
    console.log(equalit(1,1));
    //10
    function profitableGamble(prob, prize, pay) {
	if((prob*prize)>pay){
        return true;
    }
    else{
        return false;
    }
    }
    console.log(profitableGamble(5,2,10));
    //11
    function boolToString(flag) {
	return flag+ "";
    }
    console.log(boolToString(true));
    //12
    var arrow=(argimant)=>{
    return (argimant);

    }
    console.log(arrow("adel"));
    console.log(arrow(true));
    console.log(arrow(56));
//13
function frames(minutes, fps) {
	var sec=(minutes*fps)*60;
    return sec;
}
console.log(frames(10 ,  2 ));
//14
function greeting(name) {
    return `Hello,${name}!`;
    if(name == "Mubashir") {
      return "Hello, my Love!";
    }
  }
  console.log(greeting('Mubashir'));