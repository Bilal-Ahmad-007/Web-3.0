function getResult(num){
    var results=document.getElementById("text")
    results.value+=num;
}
function getAns(){
    var ans= document.getElementById("text")
    ans.value= eval(ans.value)
}
function clearAns(){
    var clear= document.getElementById("text")
    clear.value="";
}
