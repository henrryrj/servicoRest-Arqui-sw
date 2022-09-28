const pgAdmin = require('../DBConecction');

class DCategoria{
    constructor(id,nombre){
        this.id =id;
        this.nombre = nombre;
    }
    
    async save(nombre){
        const resp = 
        await pgAdmin
        .query('SELECT * FROM categoria WHERE nombre = $1',[nombre.toLowerCase().trim()]);
        if(resp.rows.length > 0) return;
        await pgAdmin
        .query('INSERT INTO categoria(nombre) VALUES($1)',[nombre.toLowerCase().trim()]);
    }
    async update(id,nombre){
        await pgAdmin.query('UPDATE categoria SET nombre = $1 WHERE id = $2',
        [this.parseString(nombre),id]);
    }
    async delete(id){
        await pgAdmin.query('DELETE FROM categoria WHERE id= $1',[id]);
    }
    async getCategorias(){
        const resp= await pgAdmin.query('SELECT * FROM categoria ORDER BY id ASC');
        return resp.rows;
    }

    parseString(variable) {
        if(variable.length >0) return variable[0].toUpperCase() + variable.slice(1).trim();
    }


}

module.exports = DCategoria;