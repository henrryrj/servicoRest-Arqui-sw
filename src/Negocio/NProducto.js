const DProducto = require('../Datos/DProducto');

const dProducto = new DProducto();

class NProducto{

    addProducto = async(Producto)       => await dProducto.save(Producto);
    editProducto = async(id, Producto)  => await dProducto.edit(id,Producto);
    delProducto = async(id)             => await dProducto.delete(id);
    getProductos = async()              => await dProducto.getProductos();
}
module.exports = NProducto;

