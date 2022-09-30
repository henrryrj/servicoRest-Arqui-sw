const express = require('express');
const root = express.Router();

const NProducto =  require('../Negocio/NProducto');
const nProducto = new NProducto();

root.get('/getProductos', async(req, res)=>{
    const listProductos =  await nProducto.getProductos();
    res.status(200).json(listProductos);
})

root.post('/save', async(req,res)=>{
    const producto = {...req.body};
    if(!producto) return res.status(400).json({ok:false});
    await nProducto.addProducto({...producto});
    res.status(200).json({ok:true});
    
})

root.put('/edit/:idProducto',async (req,res)=>{
    const {idProducto} = req.params;
    const productoActualizado = {...req.body};
    if(!productoActualizado) return res.status(400).json({ok:false});
    await nProducto.editProducto(idProducto,productoActualizado);
    res.status(200).json({ok:true});
});
root.delete('/delete/:idProducto', async(req,res)=>{
    const {idProducto} = req.params;
    await nProducto.delProducto(idProducto);
    res.status(200).json({ok:true});
});

module.exports = root;