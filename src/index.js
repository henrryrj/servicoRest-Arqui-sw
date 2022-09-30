const express = require('express');
const cors=require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true, //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
// middlerwares
app.use(express.json());
app.use(cors(corsOptions));
// Routes
app.use('/apiRest/categoria/',require('./servicioRest/apiRestCategoria'));
app.use('/apiRest/producto/',require('./servicioRest/apiRestProducto'));
app.use('/apiRest/factura/',require('./servicioRest/apiRestFactura'));

app.listen(app.get('port'), () => {
    console.log('server en el puerto :', app.get('port'));
});