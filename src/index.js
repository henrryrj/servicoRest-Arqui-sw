const express = require('express');
const app = express();
//require('./DBConecction');
//settings
app.set('port', process.env.PORT || 3000);
// middlerwares
app.use(express.json());

// Routes
app.use('/apiRest/categoria/',require('./servicioRest/apiRestCategoria'));

app.listen(app.get('port'), () => {
    console.log('server en el puerto :', app.get('port'));
});