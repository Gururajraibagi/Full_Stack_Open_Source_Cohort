// Write to a file
//Using the fs library again, try to write to the contents of a file.
//You can use the fs library to as a black box, the goal is to understand async tasks.



const fs=require('fs');

async function writeToFile(filename,content){
    try{
        await fs.promises.writeFile(filename,content,'utf8');
        console.log("File has been written successfully : ",filename)
    }
    catch(err){
        console.log("Error : ",err);
    }0
}

writeToFile('newTxt.txt',"Gururaj updated");


/*fs.writeFile('newTxt.txt',"Gururaj",'utf8',(err)=>{
    if(err)
        console.log(err);
})*/


