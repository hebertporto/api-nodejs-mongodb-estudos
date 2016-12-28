module.exports = function (app) {
        app.use('/products', require('./src/products'));

};
