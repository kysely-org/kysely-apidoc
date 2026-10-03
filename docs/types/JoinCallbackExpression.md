[**kysely**](../index.md)

***

[kysely](../modules.md) / JoinCallbackExpression

# Type Alias: JoinCallbackExpression\<DB, TB, TE\>

> **JoinCallbackExpression**\<`DB`, `TB`, `TE`\> = (`join`) => [`JoinBuilder`](../classes/JoinBuilder.md)\<`any`, `any`\>

Defined in: [parser/join-parser.ts:25](https://github.com/kysely-org/kysely/blob/master/src/parser/join-parser.ts#L25)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### TE

`TE`

## Parameters

### join

[`JoinBuilder`](../classes/JoinBuilder.md)\<[`From`](From.md)\<`DB`, `TE`\>, [`FromTables`](FromTables.md)\<`DB`, `TB`, `TE`\>\>

## Returns

[`JoinBuilder`](../classes/JoinBuilder.md)\<`any`, `any`\>
