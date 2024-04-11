const add=()=>{

let title=document.getElementById("title");
let text=document.getElementById("text");
let todo=document.getElementById("todos");
if(title.value!=0 && text.value!=0){
    
    let todoDiv=document.createElement("div");
    todoDiv.setAttribute("class","card")
    todo.appendChild(todoDiv);
    
    // /////////////title 
    
    let titleText=document.createElement("h5");
    todoDiv.appendChild(titleText);
    titleText.innerHTML=title.value;
    
    // /////////////paragraph 
    
    let todoText=document.createElement("p");
    todoDiv.appendChild(todoText);
    todoText.innerHTML=text.value;
    
    // /////////////delete button 
    let delTodo= document.createElement("button");
    delTodo.setAttribute("class","btn btn-dark m-3");
    delTodo.setAttribute("type","btn");
    todoDiv.appendChild(delTodo);
    delTodo.setAttribute("onclick","deleteTodo(this)");
    delTodo.innerHTML="Delete";
    
    
    // /////////////edit button 
    let editTodo= document.createElement("button")
    todoDiv.appendChild(editTodo)
    editTodo.setAttribute("type","btn");
    editTodo.setAttribute("class","btn btn-dark m-3");
    editTodo.setAttribute("onclick","editTodo(this)");
    editTodo.innerHTML="Edit or Update"
    title.value="";
    text.value='';
}else{
    alert("please fill both inputs")
}


}

const DeleteAll=()=>{
    let todo=document.getElementById("todos");
    todo.innerHTML='';
}
const deleteTodo = (e) => {
    e.parentNode.remove();
};

const editTodo = (e) => {
    let edit=e.parentNode.firstChild;
    let edit1=e.parentNode.children[1];
    let title=document.getElementById("title");
    let text=document.getElementById("text");
    title.value=edit.innerHTML;
    text.value=edit1.innerHTML;

    // Save the current todo element for later reference
    let currentTodo = e.parentNode;

    // Modify the update function to change the current todo
    update = () => {
        if(title.value != 0 && text.value != 0){
            edit.innerHTML = title.value;
            edit1.innerHTML = text.value;
            title.value = "";
            text.value = "";
        } else {
            alert("please fill both inputs");
        }
        // Show the update button and hide the add button
        document.getElementById("updateButton").style.display = "none";
        document.getElementById("addButton").style.display = "inline-block";
    }

    // Show the update button and hide the add button
    document.getElementById("updateButton").style.display = "inline-block";
    document.getElementById("addButton").style.display = "none";
};
