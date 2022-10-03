# RECOMENDACION
En la raiz del proyecto crerse su conecion a la bd "DBConecction"

## const { Pool } = require("pg");
~~~

const pgAdmin = new Pool({
  database: <nombre de su base de datos>,
  host: <host>,
  password: <passwor>,
  port: '5432',
  user: <user>,
});

~~~
module.exports = pgAdmin;

# INSTALACION
ejecutar: 
npm instal.
npm run dev para correr el servidor.