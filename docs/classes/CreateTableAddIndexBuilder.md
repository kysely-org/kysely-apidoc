[**kysely**](../index.md)

***

[kysely](../modules.md) / CreateTableAddIndexBuilder

# Class: CreateTableAddIndexBuilder

Defined in: [schema/create-table-add-index-builder.ts:6](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-add-index-builder.ts#L6)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new CreateTableAddIndexBuilder**(`node`): `CreateTableAddIndexBuilder`

Defined in: [schema/create-table-add-index-builder.ts:9](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-add-index-builder.ts#L9)

#### Parameters

##### node

[`AddIndexNode`](../interfaces/AddIndexNode.md)

#### Returns

`CreateTableAddIndexBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/create-table-add-index-builder.ts:46](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-add-index-builder.ts#L46)

Simply calls the provided function passing `this` as the only argument. `$call` returns
what the provided function returns.

#### Type Parameters

##### T

`T`

#### Parameters

##### func

(`qb`) => `T`

#### Returns

`T`

***

### toOperationNode()

> **toOperationNode**(): [`AddIndexNode`](../interfaces/AddIndexNode.md)

Defined in: [schema/create-table-add-index-builder.ts:50](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-add-index-builder.ts#L50)

#### Returns

[`AddIndexNode`](../interfaces/AddIndexNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)

***

### using()

#### Call Signature

> **using**(`indexType`): `CreateTableAddIndexBuilder`

Defined in: [schema/create-table-add-index-builder.ts:32](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-add-index-builder.ts#L32)

Specifies the index type.

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('email', 'varchar(255)')
  .addIndex('email_index', ['email'], (ib) => ib.using('hash'))
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (`email` varchar(255), index `email_index` (`email`) using hash)
```

##### Parameters

###### indexType

[`IndexType`](../types/IndexType.md)

##### Returns

`CreateTableAddIndexBuilder`

#### Call Signature

> **using**(`indexType`): `CreateTableAddIndexBuilder`

Defined in: [schema/create-table-add-index-builder.ts:33](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-add-index-builder.ts#L33)

Specifies the index type.

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('email', 'varchar(255)')
  .addIndex('email_index', ['email'], (ib) => ib.using('hash'))
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (`email` varchar(255), index `email_index` (`email`) using hash)
```

##### Parameters

###### indexType

`string`

##### Returns

`CreateTableAddIndexBuilder`
