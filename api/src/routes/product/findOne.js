const RoutesAdapter = require("../helpers/RoutesAdapter");
const ProductRepository = require("../../controllers/products/product");
const httpResponse = require("../helpers/http-response");

class FindOneRoute {
    async route(httpRequest) {
        const { id } = httpRequest.query;

        const product = await new ProductRepository().findOne(id);

        return new httpResponse().ok({ message: 'Product find one', product });
    }
}


module.exports = function (route) {
    const router = new FindOneRoute();

    route.get('/findOne', new RoutesAdapter().adapt(router));

    return route;
};