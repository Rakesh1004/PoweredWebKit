require('dotenv').config()
const Discord=require('discord.js')
const client=new Discord.Client()
// const uri=process.env.MONGO_URI

const PORT=process.env.port || 5000;
const triggers = ['bleak',
'depressed',
'daunting',
'disheartening',
'dismal',
'dispiriting',
'distressing',
'dreary',
'gloomy',
'heartbreaking',
'sad',
'black',
'dejecting',
'saddening',
'funereal',
'hopeless',
'joyless',
'melancholic',
'melancholy',
'mournful',
'oppressive',
'dark',
'cry',
'crying',
'lonely',
'existential',
'worst',
'toxic']


const axios = require('axios');
let results;
const getComment=async()=>{
   results=await axios.get(`http://localhost:${PORT}/comments`)
}

getComment();


client.on('ready',()=>{
    console.log("Logged in")
})


client.on('message',(message)=>{
    if(message.author.bot) return ;
    console.log(`${message.content}:${message.author}`)
    if(message.content==="$Hello"){
        message.channel.send(`Hi ${message.author}`)
        
    }
   

    if(triggers.some(word=>message.content.includes(word))){
        message.channel.send(`${results.data.comments[Math.floor(Math.random() * results.data.comments.length)].quote}`)
    }
})
client.login(process.env.TOKEN)