const express = require('express');
const NCategoria = require('../NCategoria/NCategoria');

const root = express.Router();
const nCategoria = new NCategoria();

root.get('/getCategorias', async (_req,res)=>{
    const categorias = await nCategoria.getCategorias();
    res.status(200).json(categorias);
});

root.post('/save',async(req,res)=>{
    const {nombre} = req.body;
    if(nombre.length == 0) return res.status(404).json('undefined');
    await nCategoria.addCategoria(nombre);
    res.status(200).json('ok');
});

root.put('/edit/:id', async(req,res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    if(nombre.length == 0) return res.status(404).json('undefined');
    await nCategoria.editCategoria(parseInt(id),nombre);
    res.status(200).json('ok');
});

root.delete('/delete/:id', async(req,res)=>{
    const {id} = req.params;
    await nCategoria.delCategoria(parseInt(id));
    res.status(200).json('ok');
});

module.exports = root;