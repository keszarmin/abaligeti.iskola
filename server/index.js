let n = 0;
const path = require('path');
var express = require('express');
var cors = require('cors');
var fs = require("fs");
var app = express();
app.use(cors());
const port = 9001;

var documentPATH = path.join(__dirname,'/assets/documents');
var galeryPATH = path.join(__dirname, '/assets/galery');
var aktualitasokPATH = path.join(__dirname, "/assets/aktualitasok");

app.use("/get_documents",express.static(documentPATH));
app.use('/get_galery', express.static(galeryPATH));
app.use("/get_aktualitasok", express.static(aktualitasokPATH));
app.get('/get_documents', function (req, res) {
    console.log("File Sent");
    res.send();
});

app.get("/get_galery",(req,res) => {
    console.log("File Sent");
    res.send();
});

app.get("/get_aktualitasok",(req,res) => {
    console.log("File send");
    res.send();
})

app.get("/get_path/:kategory/:year",(req,res) => {

    switch (req.params.kategory) {
        case "calendar": 
            fs.readdir(path.join(__dirname,"/assets/calendar"),(err,file_name) => {
                
                let links = [];

                for (let i = file_name.length;i > 0;i--) {

                    const file_data = fs.readFileSync(`./assets/calendar/${file_name[i-1]}`,"utf-8")

                    links[i-1] = {"src":[{"date":file_name[i-1]},{"description":file_data}]}
                }

                res.send(JSON.stringify(links));
            })
            break;
        case "aktualitasok":
            res.send({"hireink":"qwoijudhizbhaupjisugzvdbahsiudgzvahsbiazdgvaugsdbhizavsdtug absdvtasgdgf"})
            break;
        case "galery":
            fs.readdir(path.join(__dirname, `/assets/galery/${req.params.year}`),(err,file_name) => {
                
                let links = [];
                for (let i = file_name.length;i > 0;i--) {
                    
                    links[i-1] = {"src":`http://localhost:9001/get_galery/${req.params.year}/${file_name[i-1]}`} 
                }

                res.send(JSON.stringify(links));
            })
            break;
        case "documents":
            fs.readdir(documentPATH,(err,file_name) => {
    
                let links = [];
                for (let i = file_name.length;i > 0;i--) {
            
                    links[i-1] = {"src":`http://localhost:9001/get_documents/${file_name[i-1]}`} 
                }
            
                res.send(JSON.stringify(links));
            
            })
            break;
        case "galery_path":

            fs.readdir(galeryPATH,(err,dirs_name) => {

                res.json({"links":dirs_name});

            })
            break;
        case "csengetesi_rend":
            fs.readFile(path.join(__dirname,"./assets/csengetesi_rend/csengetesi_rend.json"),"utf-8",(err,data) => {
                res.json(data);
            })
            break;
        case "news_path":
            fs.readdir(path.join(__dirname,"./assets/aktualitasok"),(err,dirs_name) => {

                res.json({"links":dirs_name});

            })
            break;
        case "news":
            fs.readdir(path.join(__dirname, `/assets/aktualitasok/${req.params.year}`),(err,file_name) => {
                
                let links = [];
                for (let i = file_name.length/2;i > 0;i--) {
                    
                    const file_data = fs.readFileSync(`./assets/aktualitasok/${req.params.year}/${file_name[0]}`,"utf-8")

                    links[i-1] = {"src":[{"img_src":`http://localhost:9001/get_aktualitasok/${req.params.year}/${file_name[1]}`},{"description":file_data}]} 
                }

                res.send(JSON.stringify(links));
            })
            break;
            case "home_news":
            
            const last_dir_name = fs.readdirSync(path.join(__dirname,"/assets/aktualitasok")).reverse();

            fs.readdir(path.join(__dirname, `/assets/aktualitasok/${last_dir_name[0]}`),(err,file_name) => {
                
                let links = [];
                for (let i = file_name.length/2;i > 0;i--) {
                    
                    const file_data = fs.readFileSync(`./assets/aktualitasok/${last_dir_name[0]}/${file_name[0]}`,"utf-8")

                    links[i-1] = {"src":[{"img_src":`http://localhost:9001/get_aktualitasok/${last_dir_name[0]}/${file_name[1]}`},{"description":file_data}]} 
                }

                res.send(JSON.stringify(links));
            })
                
            break; 
    }

})

//const last_dir_name = fs.readdirSync(path.join(__dirname,"/assets/aktualitasok")).reverse();
//const readlastdir = fs.readdirSync(path.join(__dirname,`/assets/aktualitasok/${last_dir_name.toString()}`))

//console.log(readlastdir);

app.listen(port,() => {
    console.log(" <+> Server started on: ",port);
    console.log(" <+> Server Path routes: /get_path/:kategory/:year")
});
