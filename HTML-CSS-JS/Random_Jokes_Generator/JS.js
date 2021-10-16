var c=0;
document.getElementById('d').addEventListener('click',LOAD);

function LOAD()
{
c++;
fetch('https://official-joke-api.appspot.com/jokes/ten')
.then(function(response){
return response.json();
})

.then(function(Jokes){
    var i;  
    for(i=0;i<Jokes.length;i++){
document.getElementById(i+1).innerHTML= (i+1)+") "+"TYPE -"+ Jokes[i].type+ ":-     "+Jokes[i].setup+ " "+ Jokes[i].punchline;
    }
    document.getElementById("CC").innerHTML="COUNT = "+c; 
})
.catch(function(error){
console.log(error);
})
}