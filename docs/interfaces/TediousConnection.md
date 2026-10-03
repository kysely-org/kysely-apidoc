[**kysely**](../index.md)

***

[kysely](../modules.md) / TediousConnection

# Interface: TediousConnection

Defined in: [dialect/mssql/mssql-dialect-config.ts:83](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L83)

## Methods

### beginTransaction()

> **beginTransaction**(`callback`, `name?`, `isolationLevel?`): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:84](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L84)

#### Parameters

##### callback

(`err`, `transactionDescriptor?`) => `void`

##### name?

`string`

##### isolationLevel?

`number`

#### Returns

`void`

***

### cancel()

> **cancel**(): `boolean`

Defined in: [dialect/mssql/mssql-dialect-config.ts:92](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L92)

#### Returns

`boolean`

***

### close()

> **close**(): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:93](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L93)

#### Returns

`void`

***

### commitTransaction()

> **commitTransaction**(`callback`, `name?`): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:94](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L94)

#### Parameters

##### callback

(`err`) => `void`

##### name?

`string`

#### Returns

`void`

***

### connect()

> **connect**(`connectListener`): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:98](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L98)

#### Parameters

##### connectListener

(`err?`) => `void`

#### Returns

`void`

***

### execSql()

> **execSql**(`request`): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:99](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L99)

#### Parameters

##### request

[`TediousRequest`](../classes/TediousRequest.md)

#### Returns

`void`

***

### off()

#### Call Signature

> **off**(`event`, `listener`): `this`

Defined in: [dialect/mssql/mssql-dialect-config.ts:100](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L100)

##### Parameters

###### event

`"error"`

###### listener

(`error`) => `void`

##### Returns

`this`

#### Call Signature

> **off**(`event`, `listener`): `this`

Defined in: [dialect/mssql/mssql-dialect-config.ts:101](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L101)

##### Parameters

###### event

`string`

###### listener

(...`args`) => `void`

##### Returns

`this`

***

### on()

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: [dialect/mssql/mssql-dialect-config.ts:102](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L102)

##### Parameters

###### event

`"error"`

###### listener

(`error`) => `void`

##### Returns

`this`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: [dialect/mssql/mssql-dialect-config.ts:103](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L103)

##### Parameters

###### event

`string`

###### listener

(...`args`) => `void`

##### Returns

`this`

***

### once()

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: [dialect/mssql/mssql-dialect-config.ts:104](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L104)

##### Parameters

###### event

`"end"`

###### listener

() => `void`

##### Returns

`this`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: [dialect/mssql/mssql-dialect-config.ts:105](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L105)

##### Parameters

###### event

`string`

###### listener

(...`args`) => `void`

##### Returns

`this`

***

### reset()

> **reset**(`callback`): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:106](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L106)

#### Parameters

##### callback

(`err`) => `void`

#### Returns

`void`

***

### rollbackTransaction()

> **rollbackTransaction**(`callback`, `name?`): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:107](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L107)

#### Parameters

##### callback

(`err`) => `void`

##### name?

`string`

#### Returns

`void`

***

### saveTransaction()

> **saveTransaction**(`callback`, `name`): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:111](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L111)

#### Parameters

##### callback

(`err`) => `void`

##### name

`string`

#### Returns

`void`
