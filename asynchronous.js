// // Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.

let promise = new Promise(function (resolve){
     setTimeout(function(){
         resolve ("The time is now four seconds")}, 4000);
    })

 async function logMessageAfterDelay(message,delayTime){
         let result = await promise;

         console.log({result});
         console.log("Hello, time has been delayed by four seconds");
     }

 logMessageAfterDelay();


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
async function getUserData(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`User data for ID ${id}`);
      }, 1000); 
    });
  }

  const userIds = [1, 2, 3, 4, 5];
  
  
  async function fetchAndLogUserDataSequentially(userIds) {
    
    const results = await userIds.reduce(async (previousPromise, id) => {
   
      await previousPromise;
     
      const userData = await getUserData(id);
           console.log(userData);
      
      return getUserData(id + 1); 
    }, Promise.resolve());

    console.log('All user data fetched and logged.');
  }
  
fetchAndLogUserDataSequentially(userIds);


// You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
const result = true;
const ourPromise = new Promise((resolve, reject)=>{
    if(result){
        resolve ("Successful");
    }
    else{
       reject("Message not successful")
    }
})

ourPromise.then((response)=>{
    console.log({response});
    console.log("I will continue working hard");
})

.catch((error)=>{
    console.log({error});
    console.log("I will continue applying for jobs");
})

console.log({ourPromise});

async function performTask(){
    try{
        console.log("This is my dream");
        await ourPromise;
    }

    catch{
        console.log("Our dream is not yet successful");
    }
}

performTask();

// Write a function unstableTask that:
// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
//  Logs whether the task succeeded or failed after all attempts.


function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > failureProbability) {
            resolve(`${taskName} succeeded`);
        } else {
            reject(`${taskName} failed`);
        }
    });
}

async function executeWithRetry(taskName, retries, failureProbability) {
    // Write your code here
}

executeWithRetry("SampleTask", 3, 0.5);




