module.exports = class RoutesAdapter {
    adapt(router) {
        return async (req, res) => {
            const httpRequest = {
                query: req.query,
                params: req.params,
                body: req.body,
            }

            const httpResponse = await router.route(httpRequest)

            res
                .status(httpResponse.statusCode)
                .json(httpResponse.body)
        }
    }
};