import { Client } from "pg";

const client = new Client({
    connectionString: 'postgresql://postgres:mysupersecretpassword@localhost/postgres'
});

async function createUsersTable(){
    await client.connect();

    const result = await client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `)

    console.log(result);
}

async function insertData(username: string, email: string, password: string){
    await client.connect();
    const result = await client.query(`
        INSERT INTO users2 (username, email, password) VALUES ($1,$2,$3);
    `, [username, email, password]);
    console.log(result);
}

async function getData(){
    await client.connect();
    const result = await client.query(`SELECT * from users2`);
    console.log(result.rows);
}

// createUsersTable();
// insertData('deependraparmar1', 'deependraparmar11@gmail.com', 'password');
getData();