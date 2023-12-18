const express = require("express");
const port = 3000;
const app = express();
app.use(express.json());

const users = [{
    name: "John",
    kidneys: [{
        healthy: false,
    },{
        healthy: true,
    }]
}]


app.get("/", (req,res,next) => {
    let kidneys = users[0].kidneys;
    let kidneysLength = kidneys.length;
    let healthyKidneys = 0;
    for(let i=0; i<kidneysLength; i++){
        if(kidneys[i].healthy){
            healthyKidneys++;
        }
    }

    res.status(200).json({
        "Kidney related Information: " :kidneys,
        "Total Kidneys available: " : kidneysLength,
        "Total healthy Kidneys: ": healthyKidneys,
    })
});


app.post("/", (req,res,next) => {
    const isHealthy = req.body;
    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.status(200).json({
        success: true,
        message: "Kidney Inserted successfully",
    })
});


app.put("/", (req,res,next) => {
    const kidneys = users[0].kidneys;

    for(let i=0; i<kidneys.length; i++){
        kidneys[i].healthy = true;
    }

    res.status(200).json({
        success: true,
        message: "All kidneys made healthy..."
    })
});


app.delete("/", (req,res,next) => {
    let newKidneys = [];

    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true,
            })
        }
    }

    users[0].kidneys = newKidneys;
    res.status(200).json({
        success: true,
        message: "Unhealthy Kidneys deleted successfully"
    })
});


app.listen(port, ()=> {
    console.log(`Server up at http://localhost:${port}`);
})