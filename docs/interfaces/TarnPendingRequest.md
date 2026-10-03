[**kysely**](../index.md)

***

[kysely](../modules.md) / TarnPendingRequest

# Interface: TarnPendingRequest\<R\>

Defined in: [dialect/mssql/mssql-dialect-config.ts:207](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L207)

## Type Parameters

### R

`R`

## Properties

### promise

> **promise**: `Promise`\<`R`\>

Defined in: [dialect/mssql/mssql-dialect-config.ts:208](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L208)

***

### reject

> **reject**: (`err`) => `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:210](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L210)

#### Parameters

##### err

`Error`

#### Returns

`void`

***

### resolve

> **resolve**: (`resource`) => `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:209](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L209)

#### Parameters

##### resource

`R`

#### Returns

`void`
