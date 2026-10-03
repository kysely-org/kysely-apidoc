[**kysely**](../index.md)

***

[kysely](../modules.md) / TediousRequestClass

# Interface: TediousRequestClass

Defined in: [dialect/mssql/mssql-dialect-config.ts:119](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L119)

## Constructors

### Constructor

> **new TediousRequestClass**(`sqlTextOrProcedure`, `callback`, `options?`): [`TediousRequest`](../classes/TediousRequest.md)

Defined in: [dialect/mssql/mssql-dialect-config.ts:120](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L120)

#### Parameters

##### sqlTextOrProcedure

`string` \| `undefined`

##### callback

(`error?`, `rowCount?`, `rows?`) => `void`

##### options?

###### statementColumnEncryptionSetting?

`any`

#### Returns

[`TediousRequest`](../classes/TediousRequest.md)
