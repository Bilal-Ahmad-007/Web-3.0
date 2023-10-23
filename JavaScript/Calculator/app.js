function getResult(num){
    var results=document.getElementById("result")
    results.value+=num;
}
function getAns(){
    var ans= document.getElementById("result")
    ans.value= eval(ans.value)
}
function clearAns(){
    var clear= document.getElementById("result")
    clear.value="";
}