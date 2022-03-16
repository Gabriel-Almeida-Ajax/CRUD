const RoutesAdapter = require("../helpers/RoutesAdapter");
const ProductRepository = require("../../controllers/products/product");
const httpResponse = require("../helpers/http-response");

class CreateRoute {
    async route(httpRequest) {
        const { body } = httpRequest;

        const product = await new ProductRepository().create(body);

        return new httpResponse().created({ message: 'Product created', product });
    }
}


module.exports = function (route) {
    const router = new CreateRoute();

    route.post('/create', new RoutesAdapter().adapt(router));

    return route;
};