const pgAdmin = require('../DBConecction');


class DFactura {
    constructor(nro, fecha, monto_total, nit, nombre) {
        this.nro = nro;
        this.fecha = fecha;
        this.monto_total = monto_total;
        this.nit = nit;
        this.nombre = nombre;
    }

    save = async(Factura) =>{
        const existe = await this.existeFactura(Factura.nro);
        if(!existe){
            await pgAdmin.
            query('INSERT INTO factura(nro,fecha,monto_total,nit,nombre) VALUES($1,$2,$3,$4,$5)',
            [
                Factura.nro.toUpperCase().trim(),
                Factura.fecha,
                Factura.monto_total,
                Factura.nit,
                Factura.nombre
            ])
        }
    }
    update = async(nro,Factura) =>{
        await pgAdmin.
        query('UPDATE factura SET nit = $1, nombre = $2, monto_total = $3 WHERE nro = $4',
        [
            Factura.nit,
            Factura.nombre,
            Factura.monto_total,
            nro.toUpperCase().trim()
        ])
    }
    delete = async(nro) =>{
        await pgAdmin.
        query('DELETE FROM factura WHERE nro = $1',
        [nro.toUpperCase().trim()]);
    }

    getFacturas = async()=>{
        const resp = await pgAdmin
        .query('SELECT * FROM factura ORDER BY fecha DESC');
        return resp.rows;
    }

    existeFactura = async (nro) => {
        const resp = await pgAdmin.
            query('SELECT * FROM factura WHERE nro = $1',
                [nro]);
        return resp.rows.length > 0;
    }
    parseString(variable) {
        if (variable.length > 0) return variable[0].toUpperCase() + variable.slice(1).trim();
    }
}
module.exports = DFactura;