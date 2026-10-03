[**kysely**](../index.md)

***

[kysely](../modules.md) / JoinResultForUnknownTable

# Type Alias: JoinResultForUnknownTable\<O\>

> **JoinResultForUnknownTable**\<`O`\> = [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`any`, `any`, `O`\>

Defined in: [query-builder/select-query-builder.ts:2808](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2808)

Guards a join's result type against being computed for an unknown table
expression.

`TableExpression<DB, TB> extends TE` only holds when `TE` is as wide as its
own constraint, which never happens at a call site - there `TE` is a specific
table name, alias or subquery. It does happen when the compiler asks what a
join returns for an arbitrary table expression, which is what it has to do
whenever it compares two `SelectQueryBuilder` types structurally.

Without this guard that comparison never terminates on its own: computing the
join result yields a `SelectQueryBuilder` over a wider `DB`, whose own join
methods yield a wider one still, so the compiler only stops when it hits its
internal recursion limit. That limit differs between TypeScript versions - 7.0
searches a level deeper than 5.9 and 6.0 - which made comparing two select
query builders over 6x more expensive there.

Collapsing to a fixed type makes the recursion converge instead: joining an
unknown table expression again produces the same type, so the compiler
recognises the pair it is already comparing and stops immediately.

## Type Parameters

### O

`O`
