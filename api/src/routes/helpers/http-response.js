module.exports = class httpResponse {
    badRequest(message) {
        return {
            statusCode: 400,
            body: {
                message,
            },
        };
    }

    notFound(message) {
        return {
            statusCode: 404,
            body: {
                message,
            },
        };
    }

    ok(body) {
        return {
            statusCode: 200,
            body,
        };
    }

    serverError(message) {
        return {
            statusCode: 500,
            body: {
                message,
            },
        };
    }

    unauthorized(message) {
        return {
            statusCode: 401,
            body: {
                message,
            },
        };
    }

    forbidden(message) {
        return {
            statusCode: 403,
            body: {
                message,
            },
        };
    }

    created(body) {
        return {
            statusCode: 201,
            body,
        };
    }

    noContent() {
        return {
            statusCode: 204,
            body: {},
        };
    }

    accepted() {
        return {
            statusCode: 202,
            body: {},
        };
    }

    notModified() {
        return {
            statusCode: 304,
            body: {},
        };
    }

    badGateway() {
        return {
            statusCode: 502,
            body: {},
        };
    }

    serviceUnavailable() {
        return {
            statusCode: 503,
            body: {},
        };
    }

    gatewayTimeout() {
        return {
            statusCode: 504,
            body: {},
        };
    }

    versionNotSupported() {
        return {
            statusCode: 505,
            body: {},
        };
    }

    notImplemented() {
        return {
            statusCode: 501,
            body: {},
        };
    }

    conflict(message) {
        return {
            statusCode: 409,
            body: {
                message,
            },
        };
    }

    unprocessableEntity(message) {
        return {
            statusCode: 422,
            body: {
                message,
            },
        };
    }

    tooManyRequests(message) {
        return {
            statusCode: 429,
            body: {
                message,
            },
        };
    }

    internalServerError(message) {
        return {
            statusCode: 500,
            body: {
                message,
            },
        };
    }

    serviceUnavailable(message) {
        return {
            statusCode: 503,
            body: {
                message,
            },
        };
    }
}