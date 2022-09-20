const DCategoria = require('../DCategoria/DCategoria');
const dCategoria = new DCategoria();
class NCategoria{
    addCategoria  = async (nombre) => await dCategoria.save(nombre);
    
    editCategoria = async (id,nombre) => await dCategoria.update(id,nombre);
    
    delCategoria  = async (id) => await dCategoria.delete(id);
    
    getCategorias = async ()=> await dCategoria.getCategorias();
}
module.exports =NCategoria;
