const DFactura = require('../Datos/DFactura');
const DDetalleFactura = require('../Datos/DDetalleFactura');

const dFactura = new DFactura();
const ddetalle = new DDetalleFactura();

class NFactura{
    addFactura   = async(Factura)        => await dFactura.save(Factura);
    editFactura  = async(nro, Factura)   => await dFactura.update(nro,Factura);
    delFactura   = async (nro)           => await dFactura.delete(nro);
    getFacturas  = async()               => await dFactura.getFacturas();
    addUnDetalle = async(Detalle)        => await ddetalle.save(Detalle);
    resetSecuencia = async()             => await ddetalle.resetSecuencia();
}
module.exports = NFactura;