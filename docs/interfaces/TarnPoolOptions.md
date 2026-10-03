[**kysely**](../index.md)

***

[kysely](../modules.md) / TarnPoolOptions

# Interface: TarnPoolOptions\<R\>

Defined in: [dialect/mssql/mssql-dialect-config.ts:191](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L191)

## Type Parameters

### R

`R`

## Properties

### acquireTimeoutMillis?

> `optional` **acquireTimeoutMillis?**: `number`

Defined in: [dialect/mssql/mssql-dialect-config.ts:192](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L192)

***

### createRetryIntervalMillis?

> `optional` **createRetryIntervalMillis?**: `number`

Defined in: [dialect/mssql/mssql-dialect-config.ts:194](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L194)

***

### createTimeoutMillis?

> `optional` **createTimeoutMillis?**: `number`

Defined in: [dialect/mssql/mssql-dialect-config.ts:195](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L195)

***

### destroyTimeoutMillis?

> `optional` **destroyTimeoutMillis?**: `number`

Defined in: [dialect/mssql/mssql-dialect-config.ts:197](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L197)

***

### idleTimeoutMillis?

> `optional` **idleTimeoutMillis?**: `number`

Defined in: [dialect/mssql/mssql-dialect-config.ts:198](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L198)

***

### max

> **max**: `number`

Defined in: [dialect/mssql/mssql-dialect-config.ts:200](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L200)

***

### min

> **min**: `number`

Defined in: [dialect/mssql/mssql-dialect-config.ts:201](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L201)

***

### propagateCreateError?

> `optional` **propagateCreateError?**: `boolean`

Defined in: [dialect/mssql/mssql-dialect-config.ts:202](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L202)

***

### reapIntervalMillis?

> `optional` **reapIntervalMillis?**: `number`

Defined in: [dialect/mssql/mssql-dialect-config.ts:203](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L203)

## Methods

### create()

> **create**(`cb`): `any`

Defined in: [dialect/mssql/mssql-dialect-config.ts:193](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L193)

#### Parameters

##### cb

(`err`, `resource`) => `void`

#### Returns

`any`

***

### destroy()

> **destroy**(`resource`): `any`

Defined in: [dialect/mssql/mssql-dialect-config.ts:196](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L196)

#### Parameters

##### resource

`R`

#### Returns

`any`

***

### log()?

> `optional` **log**(`msg`): `any`

Defined in: [dialect/mssql/mssql-dialect-config.ts:199](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L199)

#### Parameters

##### msg

`string`

#### Returns

`any`

***

### validate()?

> `optional` **validate**(`resource`): `boolean`

Defined in: [dialect/mssql/mssql-dialect-config.ts:204](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L204)

#### Parameters

##### resource

`R`

#### Returns

`boolean`
