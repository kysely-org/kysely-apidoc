[**kysely**](../index.md)

***

[kysely](../modules.md) / TediousRequest

# Class: TediousRequest

Defined in: [dialect/mssql/mssql-dialect-config.ts:129](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L129)

## Constructors

### Constructor

> **new TediousRequest**(): `TediousRequest`

#### Returns

`TediousRequest`

## Methods

### addParameter()

> **addParameter**(`name`, `dataType`, `value?`, `options?`): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:130](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L130)

#### Parameters

##### name

`string`

##### dataType

[`TediousDataType`](../interfaces/TediousDataType.md)

##### value?

`unknown`

##### options?

`Readonly`\<\{ `length?`: `number`; `output?`: `boolean`; `precision?`: `number`; `scale?`: `number`; \}\> \| `null`

#### Returns

`void`

***

### off()

#### Call Signature

> **off**(`event`, `listener`): `this`

Defined in: [dialect/mssql/mssql-dialect-config.ts:141](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L141)

##### Parameters

###### event

`"row"`

###### listener

(`columns`) => `void`

##### Returns

`this`

#### Call Signature

> **off**(`event`, `listener`): `this`

Defined in: [dialect/mssql/mssql-dialect-config.ts:142](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L142)

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

Defined in: [dialect/mssql/mssql-dialect-config.ts:143](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L143)

##### Parameters

###### event

`"row"`

###### listener

(`columns`) => `void`

##### Returns

`this`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: [dialect/mssql/mssql-dialect-config.ts:144](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L144)

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

Defined in: [dialect/mssql/mssql-dialect-config.ts:145](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L145)

##### Parameters

###### event

`"requestCompleted"`

###### listener

() => `void`

##### Returns

`this`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: [dialect/mssql/mssql-dialect-config.ts:146](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L146)

##### Parameters

###### event

`string`

###### listener

(...`args`) => `void`

##### Returns

`this`

***

### pause()

> **pause**(): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:147](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L147)

#### Returns

`void`

***

### resume()

> **resume**(): `void`

Defined in: [dialect/mssql/mssql-dialect-config.ts:148](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L148)

#### Returns

`void`
