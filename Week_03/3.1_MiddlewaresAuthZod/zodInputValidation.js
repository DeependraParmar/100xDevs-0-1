// Zod: Zod is input validation library which has already written checks. We just have to use the zod by just telling the structure of the schema or the validation formats.
// Zod helps us with the automatic cheks with primitives and non-primitives data types and makes the life very easy. It basically validates arrays, objects, numbers, strings, etc.

const express = require("express");
const app = express();
const zod = require("zod");

const schema = zod.array(zod.number());
// email: string => @
// password: at lease 8 characters
// country: "IN", "US"
const userSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8).max(20),
    country: zod.literal("IN").or(zod.literal("US"))
})

app.use(express.json());

app.post("/health-checkup", (req,res,next) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            message: "Invalid Input!",
        });
    }
    else{
        res.status(200).json({
            response
        });
    }
})






app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
})