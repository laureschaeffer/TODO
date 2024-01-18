// -----------------ajouter une nouvelle carte------------

//on choisit les sélecteur #btn .todoCard et #toDoCards qu'on met dans des constantes

const addBtn = document.querySelector('#btn'); 
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

    const textcount= document.querySelector("#counter"); //element où se place le nombre
    const counter= document.querySelector("#count"); //element qui contient le compteur et le texte


var count = 1;

addBtn.addEventListener('click', addTask); // a chaque click, la fonction addTask déclaré plus bas est appelé


function addTask(){
    const newTask = taskCard.cloneNode(true) //on clone l'élément taskCard (.todoCard)
    const newDelBtn = newTask.querySelector('.delBtn') // pour la fonction supprimer plus bas
    const newTextArea = newTask.querySelector('.task') //on sélectionne la class task (textarea)

    newTextArea.value = "New Task" //on définit la valeur de la zone de texte
    newDelBtn.addEventListener('click', function(){
        deleteTask(newTask);
    });
    
    tasksContainer.appendChild(newTask) //ça ajoute cette carte pour l'afficher
    count++; //a chaque clone de carte j'augmente le compteur
    textcount.innerHTML=count; // je modifie le span par le compteur actuel

    
}

// ------------------supprimer une carte-------------------

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function(){
    deleteTask(taskCard);
});

function deleteTask(task){
    task.remove();
    count--;
    textcount.innerHTML=count;
}

