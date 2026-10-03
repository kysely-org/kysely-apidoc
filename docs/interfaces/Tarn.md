[**kysely**](../index.md)

***

[kysely](../modules.md) / Tarn

# Interface: Tarn

Defined in: [dialect/mssql/mssql-dialect-config.ts:171](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L171)

## Properties

### options

> **options**: `Omit`\<[`TarnPoolOptions`](TarnPoolOptions.md)\<`any`\>, `"create"` \| `"destroy"` \| `"validate"`\>

Defined in: [dialect/mssql/mssql-dialect-config.ts:176](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L176)

Tarn.js' pool options, excluding `create`, `destroy` and `validate` functions,
which must be implemented by this dialect.

***

### Pool

> **Pool**: *typeof* [`TarnPool`](../classes/TarnPool.md)

Defined in: [dialect/mssql/mssql-dialect-config.ts:181](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L181)

Tarn.js' Pool class.
