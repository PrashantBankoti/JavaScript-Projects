let input = prompt("What do you Want todo?");
const todo=[];
 while(input!=='q'&& input!=='quit'){
    
// for listing the items in the array todo:
     if(input==='list'){

         console.log("*****************");
         for(let i=0;i<todo.length;i++){
             console.log(`${i}: ${todo[i]}`);
         }
         console.log("*****************");

     }
    // for inserting new elemnts in the to do 
     
     else if(input==='new'){
         const newToDo=prompt("Enter New TODO: ");
         todo.push(newToDo);
         console.log(`${newToDo} added to the list!`)

     } 

    //  for deleting the element from the array
    else if(input==='delete'){
        const delTodo =parseInt(prompt("Enter the index of item to delete:"));
        if(!Number.isNaN(delTodo)){
        const deleted=todo.splice(delTodo,1);
        console.log(`${deleted[0]} deleted from list `);
        }else{
            console.log("Unknown Index");
        }
    }

     input= prompt("What do you Want todo?");

 }
 console.log("Okay! You are Exiting!!!");