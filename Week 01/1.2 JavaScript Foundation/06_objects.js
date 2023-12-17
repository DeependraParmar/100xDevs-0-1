const data = [
    {
        name: "deep",
        gender: "male",
    },
    {
        name: "hello",
        gender: "male",
    },
    {
        name: "meera",
        gender: "female",
    }
]

for(let i=0; i<data.length; i++){
    if(data[i].gender == "male"){
        console.log(data[i].name);
    }
}