const request= require('request-promise');
const cheerio= require('cheerio');
const fs = require("fs");
const json2csv=require("json2csv").Parser;

const movies=["https://www.imdb.com/title/tt9231040/?ref_=hm_tpks_tt_i_26_pd_tp1_cp",
                "https://www.imdb.com/title/tt0064940/?ref_=fn_al_tt_1",
            "https://www.imdb.com/title/tt0111341/?ref_=nv_sr_srsg_0"];

(async()=>{
    let imdbData=[]
    for(let movie of movies){
    const response=await request({
        uri: movie,
        headers:{
            accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en;q=0.9,en-US;q=0.8,bn;q=0.7"
        },
        
    });

    let $=cheerio.load(response);
const title=$('div[class="title_wrapper"] > h1').text().trim();
const rating=$('div[class="ratingValue"]>strong>span').text();
const summary=$('div[class="summary_text"]').text().trim();
const releaseDate=$('a[title="See more release dates"]').text().trim();

imdbData.push({
    title, rating, summary, releaseDate
});
const js2cp= new json2csv();
const csv=js2cp.parse(imdbData);

fs.writeFileSync("./imdb.csv", csv, "utf-8");
}}
)();

