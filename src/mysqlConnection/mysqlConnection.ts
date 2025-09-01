import type { Connection } from "mysql2/promise";
import mysql from "mysql2/promise";

const getConnection =  async (): Promise<Connection | null> => {
    try{
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "manager_system"
        });
        return connection;
    }catch(error){
        console.log(`Erro na conexão mysql: ${error}`)
        return null;
    }
}

export default getConnection;
