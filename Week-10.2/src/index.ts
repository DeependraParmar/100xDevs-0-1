import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
    const response = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName,
        }
    });
    console.log(response);
}

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(email: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { email },
        data: {
            firstName: firstName,
            lastName: lastName
        }
    });
    console.log(res);
}

async function getUser(email: string){
    const response = await prisma.user.findFirst({
        where: {email},
        select: {
            firstName: true,
            lastName: true,
        }
    });
    console.log(response);
    
}

// insertUser("deependraparmar1@gmail.com", "password", "Deependra", "Parmar");
updateUser("deependraparmar1@gmail.com", {firstName: "Deependra Singh", lastName: "Parmar"});
getUser("deependraparmar1@gmail.com");