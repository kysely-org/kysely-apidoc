[**kysely**](../index.md)

***

[kysely](../modules.md) / NoResultError

# Class: NoResultError

Defined in: [query-builder/no-result-error.ts:5](https://github.com/kysely-org/kysely/blob/master/src/query-builder/no-result-error.ts#L5)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- `Error`

## Constructors

### Constructor

> **new NoResultError**(`node`): `NoResultError`

Defined in: [query-builder/no-result-error.ts:11](https://github.com/kysely-org/kysely/blob/master/src/query-builder/no-result-error.ts#L11)

#### Parameters

##### node

`QueryNode`

#### Returns

`NoResultError`

#### Overrides

`Error.constructor`

## Properties

### node

> `readonly` **node**: `QueryNode`

Defined in: [query-builder/no-result-error.ts:9](https://github.com/kysely-org/kysely/blob/master/src/query-builder/no-result-error.ts#L9)

The operation node tree of the query that was executed.
