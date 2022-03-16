const RoutesAdapter = require("../helpers/RoutesAdapter");
const ProductRepository = require("../../controllers/products/product");
const httpResponse = require("../helpers/http-response");

class FindManyRoute {
    async route(httpRequest) {
        const { query } = httpRequest;

        const product = await new ProductRepository().findMany(query);

        return new httpResponse().ok({ message: 'Product find one', product });
    }
}


module.exports = function (route) {
    const router = new FindManyRoute();

    route.get('/findMany', new RoutesAdapter().adapt(router));

    return route;
};