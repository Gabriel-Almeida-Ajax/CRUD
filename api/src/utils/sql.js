const pg = require('pg');

class Connection {
    constructor() {
        this.db = new pg.Client({
            user: 'postgres',
            host: 'localhost',
            database: 'ecommerce',
            password: 'postgres',
            port: 5432,
        });
    }
}

class Select extends Connection {
    constructor(fields) {
        super();
        this.fields = fields;
        this.table = '';
        this.sqlwhere = '';
        this.sqlValues = [];
    }

    from(table) {
        this.table = table;

        return this
    }

    where(field, value) {
        this.sqlValues.push(value);

        if (!this.sqlwhere.toUpperCase().includes(' WHERE '))
            this.sqlwhere = ` WHERE ${field} = $${this.sqlValues.length} `;
        else
            this.sqlwhere += ` AND ${field} = $${this.sqlValues.length} `;


        return this
    }

    and(field, value) {
        this.sqlValues.push(value);

        if (!this.sqlwhere.toUpperCase().includes(' WHERE '))
            this.sqlwhere = ` WHERE ${field} = $${this.sqlValues.length} `;
        else
            this.sqlwhere += ` AND ${field} = $${this.sqlValues.length} `;

        return this
    }

    query() {
        return {
            queryText: `SELECT ${this.fields} FROM ${this.table} ${this.sqlwhere}`,
            values: this.sqlValues
        };
    }

    async execute() {
        await this.db.connect();
        const { queryText, values } = this.query();
        
        const result = await this.db.query(queryText, values);

        await this.db.end();

        return result.rows;
    }
}

module.exports = class SqlController {
    select(fields) {
        return new Select(fields, this.execute);
    }
}
/*
async where(query = '', values = {}, aceptedValues = [], initialValues = []) {
        const _values = initialValues;

        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                if (aceptedValues.includes(key)) {
                    _values.push(values[key].value);
                    if (!query.toUpperCase().includes(' WHERE '))
                        query += ` WHERE ${key} ${values[key].comparator || '='} $${_values.length} `;
                    else
                        query += ` AND ${key} ${values[key].comparator || '='} $${_values.length} `;
                }
            }
        }

        return {
            query: query,
            values: _values,
        }
    }

    async select(table, values = {}, aceptedValues = []) {
        const { query, values: _values } = this.where(`SELECT * FROM ${table}`, values, aceptedValues);

        return await this.db.query(query, _values);
    }

    async update(table, values = {}, aceptedValues = [], whereValues = {}, aceptedWhereValues = []) {
        const _values = [1];
        let query = `UPDATE ${table} SET`;
        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                if (aceptedValues.includes(key)) {
                    _values.push(values[key].value);
                    query += ` ${key} = $${_values.length} `;
                }
            }
        }

        const queryResponse = this.where(query, whereValues, aceptedWhereValues, _values);

        console.log(queryResponse);
    }*/