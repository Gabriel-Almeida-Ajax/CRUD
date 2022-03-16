const RoutesAdapter = require("../helpers/RoutesAdapter");
const ProductRepository = require("../../controllers/products/product");
const httpResponse = require("../helpers/http-response");

class UpdateRoute {
    async route(httpRequest) {
        const { body } = httpRequest;

        const product = await new ProductRepository().update(body);

        return new httpResponse().ok({ message: 'Product updated', product });
    }
}


module.exports = function (route) {
    const router = new UpdateRoute();

    route.post('/update', new RoutesAdapter().adapt(router));

    return route;
};