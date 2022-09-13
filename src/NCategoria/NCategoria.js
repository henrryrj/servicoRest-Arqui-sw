const DCategoria = require('../DCategoria/DCategoria');
const dCategoria = new DCategoria();

const addCategoria  = async (nombre) => await dCategoria.save(nombre);

const editCategoria = async (id,nombre) => await dCategoria.update(id,nombre);

const delCategoria  = async (id) => await dCategoria.delete(id);

const getCategorias = async ()=> await dCategoria.getCategorias();

module.exports ={
    addCategoria,
    editCategoria,
    delCategoria,
    getCategorias
}
