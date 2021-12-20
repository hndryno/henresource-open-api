import { createPool } from "mysql2/promise";
import * as constant from './constant/constant' ;


export async function connect(){
    const connection:any = await createPool({
        host: constant.default.db_name,
        user: constant.default.db_user,
        database: constant.default.db_name,
        connectionLimit: constant.default.connection_limit
    });

    return connection;
}