import * as dotenv from 'dotenv';
import {Pool } from "pg"

dotenv.config();

const { 
    POSTGRES_DB,
    POSTGRES_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DB,
    ENV
 } = process.env;


let Client

if (ENV === 'test'){
     Client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    })
}
if (ENV === 'dev'){
  Client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    })
}


export default Client;