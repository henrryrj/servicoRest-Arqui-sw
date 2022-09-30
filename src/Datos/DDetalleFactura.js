const pgAdmin = require("../DBConecction");

class DDetalleFactura {
    constructor(id, nro_factura,id_producto, cantidad, sub_total){
        this.id =id;
        this.nro_factura = nro_factura;
        this.id_producto = id_producto;
        this.cantidad = cantidad;
        this.sub_total = sub_total;
    }
    save = async(Detalle) => {
        await pgAdmin.
        query(`INSERT INTO 
        detallefactura(nro_factura,id_producto,cantidad,sub_total) 
        VALUES($1,$2,$3,$4)`,[
            Detalle.nro_factura.toUpperCase().trim(),
            Detalle.id_producto,
            Detalle.cantidad,
            Detalle.sub_total
        ]);
    }
    delete = async (id) =>{
        await pgAdmin.
        query('DELETE FROM detallefactura WHERE id = $1',
        [parseInt(id)]);
    }

    resetSecuencia = async ()=>{
        await pgAdmin.
        query('ALTER SEQUENCE detallefactura_id_seq RESTART WITH 1');
    }
    
}

module.exports = DDetalleFactura;