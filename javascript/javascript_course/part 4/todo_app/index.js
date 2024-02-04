let todo = [];

let req = prompt("Please enter your Request");

while (true) {
  if (req == "quit") {
    console.log("Quitting App");
    break;
  }

  if (req == "list") {
    console.log("**********");
   for(i = 0; i < todo.length; i++){
      console.log(`${i}: ${todo[i]}`);
    }
    console.log("**********");
  } else if (req == "add") {
    let task = prompt("Please Enter The Task You Want To Add");
    todo.push(task);  
    console.log('Task Added Successfully');
 
  }else if(req == "delete"){
    let index = prompt("Please Enter The Index You Want To Delete");
    todo.splice(index,1);
    console.log('Task Deleted Successfully');
  }else{
    console.log("Invalid Request");
  }
  req = prompt("Please enter your Request");
}
