function getnumber(num){
    var result=document.getElementById("result");
    result.value+=num;
}
function getclear(){
    var result=document.getElementById("result");
    num=result.value;
    result.value=num.substring(0,num.length-1);
}
function getallclear(){
    var result=document.getElementById("result");
    result.value="";
}



function getresult(){
    var result=document.getElementById("result");
    
    result.value=eval(result.value);
}



function calculate(x){
    function factorial(num) {
        if (num < 0) 
              return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * factorial(num - 1));
        }
      }

    var result=document.getElementById("result");

    
    if (x=='s'){
        result.value=Math.sin(result.value);}
    else if (x=='c'){
        result.value=Math.cos(result.value);}
    else if (x=='t'){
        result.value=Math.tan(result.value);}
    else if (x=='√'){
        result.value=Math.sqrt(result.value);}
    else if (x=='Log'){
        result.value=Math.log(result.value);}
    else if (x=='Ln'){
            result.value=Math.LN2(result.value);}
    else if (x=='exp'){
        result.value=Math.exp(result.value);}
    else if (x=='sq'){
        result.value=eval(result.value*result.value);}
    else if (x=='!'){
        result.value=factorial(result.value);
    }
}
