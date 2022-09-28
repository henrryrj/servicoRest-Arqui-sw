const pgAdmin = require('../DBConecction');
class DProducto {

    constructor(id, nombre, precio, id_categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.id_categoria = id_categoria
    }

    async save(Producto) {
        const existe = await this.existeProducto(Producto.id);
        if (!existe) {
            await pgAdmin
                .query('INSERT INTO producto(id,nombre,precio,id_categoria) VALUES($1,$2,$3,$4)',
                    [Producto.id.toUpperCase().trim(), this.parseString(Producto.nombre), Producto.precio, Producto.id_categoria]);
        }
    }
    async edit(id, Producto) {
        await pgAdmin
            .query('UPDATE producto SET nombre = $1, precio = $2, id_categoria = $3 WHERE id = $4',
                [this.parseString(Producto.nombre), Producto.precio, Producto.id_categoria, id.toUpperCase().trim()]);
    }

    async delete(id) {
        await pgAdmin.
            query('DELETE FROM producto WHERE id= $1',
                [id.toUpperCase().trim()]);
    }
    async getProductos() {
        const resp = await pgAdmin.query('SELECT * FROM producto ORDER BY id ASC');
        return resp.rows;
    }


    parseString(variable) {
        if (variable.length > 0) return variable[0].toUpperCase() + variable.slice(1).trim();
    }
    async existeProducto(id) {
        const resp = await pgAdmin.
            query('SELECT * FROM producto WHERE id = $1', [id.toUpperCase().trim]);
        return resp.rows.length > 0;
    }
}

module.exports = DProducto;