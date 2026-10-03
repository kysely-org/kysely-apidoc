[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractRowFromCommonTableExpression

# Type Alias: ExtractRowFromCommonTableExpression\<CTE\>

> **ExtractRowFromCommonTableExpression**\<`CTE`\> = `CTE` *extends* [`Expression`](../interfaces/Expression.md)\<infer O\> \| [`Compilable`](../interfaces/Compilable.md)\<infer O\> ? `O` : `CTE` *extends* (`creator`) => infer Q ? `Q` *extends* [`Expression`](../interfaces/Expression.md)\<infer O\> \| [`Compilable`](../interfaces/Compilable.md)\<infer O\> ? `O` : `never` : `never`

Defined in: [parser/with-parser.ts:66](https://github.com/kysely-org/kysely/blob/master/src/parser/with-parser.ts#L66)

Given a common CommonTableExpression CTE extracts the row type from it.

For example a CTE `(db) => db.selectFrom('person').select(['id', 'first_name'])`
would result in `Pick<Person, 'id' | 'first_name'>`.

## Type Parameters

### CTE

`CTE`
