
    var add="";

function press(num){
   const userinput= document.getElementById("userinput").value +=num;
   add +=num;

}

userinput.value = add;

function equal(){
    userinput.value = eval(add);
    add = '';
}

function erase(){
    add='';
    userinput.value = add;
}