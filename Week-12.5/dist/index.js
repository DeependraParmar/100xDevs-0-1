"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: 'postgresql://postgres:mysupersecretpassword@localhost/postgres'
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `);
        console.log(result);
    });
}
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        INSERT INTO users2 (username, email, password) VALUES ($1,$2,$3);
    `, [username, email, password]); // prevents you from sql injection.fldf
        console.log(result);
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`SELECT * from users2`);
        console.log(result.rows);
    });
}
// createUsersTable();
// insertData('deependraparmar1', 'deependraparmar11@gmail.com', 'password');
// insertData('DELETE * FROM USERS', 'deependraparmar2039@gmail.com', 'hello123');
// insertData('deependraparmar2034038@gmail.com', 'hello123@gmail.com', 'hekjdjlkdjo85438o');
getData();
