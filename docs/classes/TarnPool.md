[**kysely**](../index.md)

***

[kysely](../modules.md) / TarnPool

# Class: TarnPool\<R\>

Defined in: [dialect/mssql/mssql-dialect-config.ts:184](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L184)

## Type Parameters

### R

`R`

## Constructors

### Constructor

> **new TarnPool**\<`R`\>(`opt`): `TarnPool`\<`R`\>

Defined in: [dialect/mssql/mssql-dialect-config.ts:185](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L185)

#### Parameters

##### opt

[`TarnPoolOptions`](../interfaces/TarnPoolOptions.md)\<`R`\>

#### Returns

`TarnPool`\<`R`\>

## Methods

### acquire()

> **acquire**(): [`TarnPendingRequest`](../interfaces/TarnPendingRequest.md)\<`R`\>

Defined in: [dialect/mssql/mssql-dialect-config.ts:186](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L186)

#### Returns

[`TarnPendingRequest`](../interfaces/TarnPendingRequest.md)\<`R`\>

***

### destroy()

> **destroy**(): `any`

Defined in: [dialect/mssql/mssql-dialect-config.ts:187](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L187)

#### Returns

`any`

***

### release()

> **release**(`resource`): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:188](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L188)

#### Parameters

##### resource

`R`

#### Returns

`void`
