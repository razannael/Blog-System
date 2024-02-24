import { Sequelize } from'sequelize'
export const sequelize = new Sequelize('freedb_blogsystem1', 'freedb_razannael14', 'eg@AFNB7!Duqkn$', {
    host: 'sql.freedb.tech',
    port:3306,
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });


export const connectDB = async()=>{
try{
    return await sequelize.sync({alter: true , force: true});
}
catch(error){
    console.log("error to connect ot databse.", error)
}
}