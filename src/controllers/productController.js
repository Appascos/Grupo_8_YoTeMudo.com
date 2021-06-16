const productController = {
    producto: (req,res) => {
        res.render ('producto');
    },
    carrito: (req,res) => {
        res.render ('carrito');
    },
    carga: (req,res) => {
        res.render ('cargaProducto');
    },
    edicion:  (req,res) => {
        res.render ('edicionProducto');
    }
};

module.exports = productController; 
