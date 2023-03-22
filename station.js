function insertButton(){
    // var insertButton = document.getElementById('insertButton')
    var taskStorage = document.getElementById('list');
    var userAnswer = document.getElementById('userInput');
    var new_li = document.createElement('li');
    new_li.id = 'taskList';
    new_li.textContent = userAnswer.value;

    if(userAnswer.value.trim() === ''){
        alert('plz enter your left to do task');
    }
    else{
        taskStorage.appendChild(new_li);
    }

    var tasklist = document.querySelectorAll('#taskList');       /*global variable*/

    // task completed function
    tasklist.forEach(element =>{
        element.addEventListener('click',completed_task =>{
            element.classList.toggle('taskListDone');
        })
    })

    // delete after submit
    userAnswer.value = '';
    
    // adding remove button to each tasklist
    var newClosingButton = document.createElement('button');
    tasklist.forEach(remove_function =>{
        newClosingButton.id = 'remove';
        newClosingButton.textContent = '\u00D7';
        remove_function.appendChild(newClosingButton);

        // deleting li == tasklist after pressing close button
        const closeButton = document.querySelectorAll('#remove');
        closeButton.forEach(chooseoneLI =>{
            chooseoneLI.addEventListener("click",() =>{
                chooseoneLI.parentNode.remove();
            });
        });
    })
}

windows.onload = function(){
    insertButton()
}
