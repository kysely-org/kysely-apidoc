[**kysely**](../index.md)

***

[kysely](../modules.md) / MssqlRequest

# Class: MssqlRequest\<O\>

Defined in: [dialect/mssql/mssql-driver.ts:373](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L373)

## Type Parameters

### O

`O`

## Constructors

### Constructor

> **new MssqlRequest**\<`O`\>(`props`): `MssqlRequest`\<`O`\>

Defined in: [dialect/mssql/mssql-driver.ts:384](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L384)

#### Parameters

##### props

[`MssqlRequestProps`](../interfaces/MssqlRequestProps.md)\<`O`\>

#### Returns

`MssqlRequest`\<`O`\>

## Accessors

### request

#### Get Signature

> **get** **request**(): [`TediousRequest`](TediousRequest.md)

Defined in: [dialect/mssql/mssql-driver.ts:433](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L433)

##### Returns

[`TediousRequest`](TediousRequest.md)

## Methods

### readChunk()

> **readChunk**(): `Promise`\<`O`[]\>

Defined in: [dialect/mssql/mssql-driver.ts:437](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L437)

#### Returns

`Promise`\<`O`[]\>
