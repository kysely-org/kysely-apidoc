[**kysely**](../index.md)

***

[kysely](../modules.md) / FilterObject

# Type Alias: FilterObject\<DB, TB\>

> **FilterObject**\<`DB`, `TB`\> = [`IsNever`](IsNever.md)\<`TB`\> *extends* `true` ? [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"there are no tables in query context, so a filter object cannot be defined. try passing an array instead."`\> : `{ [R in StringReference<DB, TB>]?: ValueExpressionOrList<DB, TB, SelectType<ExtractTypeFromStringReference<DB, TB, R>>> }`

Defined in: [parser/binary-operation-parser.ts:59](https://github.com/kysely-org/kysely/blob/master/src/parser/binary-operation-parser.ts#L59)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`
