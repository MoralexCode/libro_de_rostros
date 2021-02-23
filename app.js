let express = require('express');
let app = express();
let methodOverride = require('method-override');
const routes = require('./routes/userRoutes');
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/', routes);
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})