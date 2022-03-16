const Sql = require('../../utils/sql');

module.exports = class ProductRepository {
    async create(product) {
        return {
            product,
        }
    }

    async findOne(productId) {
        const sql = new Sql();

        const rows = await sql.select('*').from('products').where('id', productId).execute()

        return rows
    }

    async findMany(where) {
        let sql = new Sql();

        sql = sql.select('*').from('products')

        for(let key in where) {
            sql = sql.where(key, where[key])
        }

        const rows = await sql.execute()

        return rows
    }

    async update(product) {
        return {
            product,
        }
    }
}