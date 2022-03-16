const RoutesAdapter = require("../helpers/RoutesAdapter");
const ProductRepository = require("../../controllers/products/product");
const httpResponse = require("../helpers/http-response");

class RemoveRoute {
    async route(httpRequest) {
        const { id } = httpRequest.query;

        const product = await new ProductRepository().remove(id);

        return new httpResponse().ok({ message: 'Product updated', product });
    }
}


module.exports = function (route) {
    const router = new RemoveRoute();

    route.delete('/remove', new RoutesAdapter().adapt(router));

    return route;
};