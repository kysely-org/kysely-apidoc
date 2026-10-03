[**kysely**](../index.md)

***

[kysely](../modules.md) / MssqlRequestProps

# Interface: MssqlRequestProps\<O\>

Defined in: [dialect/mssql/mssql-driver.ts:535](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L535)

## Type Parameters

### O

`O`

## Properties

### compiledQuery

> **compiledQuery**: [`CompiledQuery`](CompiledQuery.md)

Defined in: [dialect/mssql/mssql-driver.ts:536](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L536)

***

### onDone?

> `optional` **onDone?**: [`Deferred`](../classes/Deferred.md)\<[`OnDone`](OnDone.md)\<`O`\>\> \| [`PlainDeferred`](PlainDeferred.md)\<[`OnDone`](OnDone.md)\<`O`\>\>

Defined in: [dialect/mssql/mssql-driver.ts:537](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L537)

***

### streamChunkSize?

> `optional` **streamChunkSize?**: `number`

Defined in: [dialect/mssql/mssql-driver.ts:538](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L538)

***

### tedious

> **tedious**: [`Tedious`](Tedious.md)

Defined in: [dialect/mssql/mssql-driver.ts:539](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L539)
