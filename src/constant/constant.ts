
const db_host:string =`${process.env.DB_HOST}`;
const db_name:string =`${process.env.DB_NAME}`;
const db_user:string =`${process.env.DB_USER}`;
const connection_limit = 10

export default {
    db_name,
    db_host,
    db_user,
    connection_limit
}