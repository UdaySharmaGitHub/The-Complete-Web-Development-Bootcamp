# Axios Request Formate
### Get Request
```
import axios from "axios";
app.post("/",async (req,res)=>{
    try{
        await axios.get("URL");
        res.sendStatus(201);
    }catch(error){
        res.sendStatus(404).send(error.response.data);
    }
});
```
### Post Request
```
import axios from "axios";
app.post("/",async (req,res)=>{
    try{
        await axios.post("URL",body,config);
        res.sendStatus(201)
    }catch(error){
        res.sendStatus(404).send(error.response.data);
    }
});
```
### put Request
```
import axios from "axios";
app.post("/",async (req,res)=>{
    try{
        await axios.put("URL",body,config);
        res.sendStatus(201)
    }catch(error){
        res.sendStatus(404).send(error.response.data);
    }
});
```
### patch Request
```
import axios from "axios";
app.post("/",async (req,res)=>{
    try{
        await axios.patch("URL",body,config);
        res.sendStatus(201)
    }catch(error){
        res.sendStatus(404).send(error.response.data);
    }
});
```
### delete Request
```
import axios from "axios";
app.post("/",async (req,res)=>{
    try{
        await axios.delete("URL",config);
        res.sendStatus(201)
    }catch(error){
        res.sendStatus(404).send(error.response.data);
    }
});
```