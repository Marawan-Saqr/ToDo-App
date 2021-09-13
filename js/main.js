// imports
let push = document.getElementById("push");
let input = document.getElementById("input");
let tasks = document.getElementById("tasks");


//functions
let boom = () =>{
    if(input.value.length == 0){
        alert("please enter a task");
    } else{
        tasks.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${input.value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        

        //delete function
        let current_tasks = document.querySelectorAll(".delete");
        for(var i = 0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}








push.addEventListener("click", boom);




















