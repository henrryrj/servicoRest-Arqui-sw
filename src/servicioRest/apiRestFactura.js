const root = require('express').Router();

const NFactura = require('../Negocio/NFactura');
const nFactura = new NFactura();

root.get('/getFacturas', async (_req, res) => {
    const facturas = await nFactura.getFacturas();
    res.status(200).json(facturas);
})

root.post('/save', async (req, res) => {
    const facturaCompleta = { ...req.body };
    //Todo: Agredando la cabecera;
    const cabecera = {
        nro: facturaCompleta.nro,
        fecha: facturaCompleta.fecha,
        monto_total: facturaCompleta.monto_total,
        nit: facturaCompleta.nit,
        nombre: facturaCompleta.nombre
    };
    await nFactura.addFactura({ ...cabecera });
    //Todo: Agregando el detalle;
    const detalles = facturaCompleta.detalles;
    detalles.forEach(async (unDetalle) => {
        const detalle = {
            nro_factura: cabecera.nro,
            id_producto: unDetalle.id_producto,
            cantidad: unDetalle.cantidad,
            sub_total: unDetalle.sub_total
        }
        await nFactura.addUnDetalleFactura({...detalle});
    });
    res.status(200).json({ ok: true });
});
root.put('/edit/:nroFactura', async (req, res) => {
    const { nroFactura } = req.params;
    const datos = { ...req.body };
    if (!datos) return res.status(400).json({ ok: false });
    await nFactura.editFactura(nroFactura, datos);
    res.status(200).json({ ok: true });

});

root.delete('/delete/:nroFactura', async(req,res)=>{
    const { nroFactura } = req.params;
    await nFactura.delFactura(nroFactura);
    res.status(200).json({ok:true});


})






module.exports = root;