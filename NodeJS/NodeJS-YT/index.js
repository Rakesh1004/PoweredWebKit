const express = require('express');
const fs = require('fs')
const ytdl = require('ytdl-core');
const app = express();

const PORT = 4005;
app.use(express.static('public'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'public/index.html');
})

app.get('/videoInfo',async (req,res)=>{
    const videoURL = req.query.videoURL;
    const info = await ytdl.getInfo(videoURL);
    res.status(200).json(info);
})
app.get('/download',async(req,res)=>{
    const videoURL = req.query.videoURL;
    const itag = req.query.itag;
    res.header('Content-Disposition','attachment;\ filename="video.mp4"');
    ytdl(videoURL,{
        filter: format => format.itag==itag
    }).pipe(res);
})

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})