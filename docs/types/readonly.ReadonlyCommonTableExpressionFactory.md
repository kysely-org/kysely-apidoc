[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyCommonTableExpressionFactory

# Type Alias: ReadonlyCommonTableExpressionFactory\<DB, CN\>

> **ReadonlyCommonTableExpressionFactory**\<`DB`, `CN`\> = (`creator`) => [`ReadonlyCommonTableExpressionOutput`](readonly.ReadonlyCommonTableExpressionOutput.md)\<`DB`, `CN`\>

Defined in: [readonly/readonly-with-parser.ts:25](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-with-parser.ts#L25)

Similar to [CommonTableExpressionFactory](CommonTableExpressionFactory.md) but read-only.

## Type Parameters

### DB

`DB`

### CN

`CN`

## Parameters

### creator

[`ReadonlyQueryCreator`](../interfaces/readonly.ReadonlyQueryCreator.md)\<`DB`\>

## Returns

[`ReadonlyCommonTableExpressionOutput`](readonly.ReadonlyCommonTableExpressionOutput.md)\<`DB`, `CN`\>
