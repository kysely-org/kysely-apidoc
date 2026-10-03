[**kysely**](../index.md)

***

[kysely](../modules.md) / SnakeCaseTransformer

# Class: SnakeCaseTransformer

Defined in: [plugin/camel-case/camel-case-transformer.ts:6](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-transformer.ts#L6)

Transforms an operation node tree into another one.

Kysely queries are expressed internally as a tree of objects (operation nodes).
`OperationNodeTransformer` takes such a tree as its input and returns a
transformed deep copy of it. By default the `OperationNodeTransformer`
does nothing. You need to override one or more methods to make it do
something.

There's a method for each node type. For example if you'd like to convert
each identifier (table name, column name, alias etc.) from camelCase to
snake_case, you'd do something like this:

```ts
import { type IdentifierNode, OperationNodeTransformer } from 'kysely'
import snakeCase from 'lodash/snakeCase'

class CamelCaseTransformer extends OperationNodeTransformer {
  override transformIdentifier(node: IdentifierNode): IdentifierNode {
    node = super.transformIdentifier(node)

    return {
      ...node,
      name: snakeCase(node.name),
    }
  }
}

const transformer = new CamelCaseTransformer()

const query = db.selectFrom('person').select(['first_name', 'last_name'])

const tree = transformer.transformNode(query.toOperationNode())
```

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNodeTransformer`](OperationNodeTransformer.md)

## Constructors

### Constructor

> **new SnakeCaseTransformer**(`snakeCase`): `SnakeCaseTransformer`

Defined in: [plugin/camel-case/camel-case-transformer.ts:9](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-transformer.ts#L9)

#### Parameters

##### snakeCase

[`StringMapper`](../types/StringMapper.md)

#### Returns

`SnakeCaseTransformer`

#### Overrides

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`constructor`](OperationNodeTransformer.md#constructor)

## Properties

### nodeStack

> `protected` `readonly` **nodeStack**: [`OperationNode`](../interfaces/OperationNode.md)[] = `[]`

Defined in: [operation-node/operation-node-transformer.ts:142](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L142)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`nodeStack`](OperationNodeTransformer.md#nodestack)

## Methods

### transformAddColumn()

> `protected` **transformAddColumn**(`node`, `queryId?`): [`AddColumnNode`](../interfaces/AddColumnNode.md)

Defined in: [operation-node/operation-node-transformer.ts:523](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L523)

#### Parameters

##### node

[`AddColumnNode`](../interfaces/AddColumnNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`AddColumnNode`](../interfaces/AddColumnNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformAddColumn`](OperationNodeTransformer.md#transformaddcolumn)

***

### transformAddConstraint()

> `protected` **transformAddConstraint**(`node`, `queryId?`): [`AddConstraintNode`](../interfaces/AddConstraintNode.md)

Defined in: [operation-node/operation-node-transformer.ts:908](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L908)

#### Parameters

##### node

[`AddConstraintNode`](../interfaces/AddConstraintNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`AddConstraintNode`](../interfaces/AddConstraintNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformAddConstraint`](OperationNodeTransformer.md#transformaddconstraint)

***

### transformAddIndex()

> `protected` **transformAddIndex**(`node`, `queryId?`): [`AddIndexNode`](../interfaces/AddIndexNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1253](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1253)

#### Parameters

##### node

[`AddIndexNode`](../interfaces/AddIndexNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`AddIndexNode`](../interfaces/AddIndexNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformAddIndex`](OperationNodeTransformer.md#transformaddindex)

***

### transformAddValue()

> `protected` **transformAddValue**(`node`, `queryId?`): [`AddValueNode`](../interfaces/AddValueNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1312](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1312)

#### Parameters

##### node

[`AddValueNode`](../interfaces/AddValueNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`AddValueNode`](../interfaces/AddValueNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformAddValue`](OperationNodeTransformer.md#transformaddvalue)

***

### transformAggregateFunction()

> `protected` **transformAggregateFunction**(`node`, `queryId?`): [`AggregateFunctionNode`](../interfaces/AggregateFunctionNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1071](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1071)

#### Parameters

##### node

[`AggregateFunctionNode`](../interfaces/AggregateFunctionNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`AggregateFunctionNode`](../interfaces/AggregateFunctionNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformAggregateFunction`](OperationNodeTransformer.md#transformaggregatefunction)

***

### transformAlias()

> `protected` **transformAlias**(`node`, `queryId?`): [`AliasNode`](../interfaces/AliasNode.md)

Defined in: [operation-node/operation-node-transformer.ts:328](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L328)

#### Parameters

##### node

[`AliasNode`](../interfaces/AliasNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`AliasNode`](../interfaces/AliasNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformAlias`](OperationNodeTransformer.md#transformalias)

***

### transformAlterColumn()

> `protected` **transformAlterColumn**(`node`, `queryId?`): [`AlterColumnNode`](../interfaces/AlterColumnNode.md)

Defined in: [operation-node/operation-node-transformer.ts:882](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L882)

#### Parameters

##### node

[`AlterColumnNode`](../interfaces/AlterColumnNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`AlterColumnNode`](../interfaces/AlterColumnNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformAlterColumn`](OperationNodeTransformer.md#transformaltercolumn)

***

### transformAlterTable()

> `protected` **transformAlterTable**(`node`, `queryId?`): [`AlterTableNode`](../interfaces/AlterTableNode.md)

Defined in: [operation-node/operation-node-transformer.ts:839](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L839)

#### Parameters

##### node

[`AlterTableNode`](../interfaces/AlterTableNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`AlterTableNode`](../interfaces/AlterTableNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformAlterTable`](OperationNodeTransformer.md#transformaltertable)

***

### transformAlterType()

> `protected` **transformAlterType**(`node`, `queryId?`): [`AlterTypeNode`](../interfaces/AlterTypeNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1298](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1298)

#### Parameters

##### node

[`AlterTypeNode`](../interfaces/AlterTypeNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`AlterTypeNode`](../interfaces/AlterTypeNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformAlterType`](OperationNodeTransformer.md#transformaltertype)

***

### transformAnd()

> `protected` **transformAnd**(`node`, `queryId?`): [`AndNode`](../interfaces/AndNode.md)

Defined in: [operation-node/operation-node-transformer.ts:361](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L361)

#### Parameters

##### node

[`AndNode`](../interfaces/AndNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`AndNode`](../interfaces/AndNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformAnd`](OperationNodeTransformer.md#transformand)

***

### transformBinaryOperation()

> `protected` **transformBinaryOperation**(`node`, `queryId?`): [`BinaryOperationNode`](../interfaces/BinaryOperationNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1115](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1115)

#### Parameters

##### node

[`BinaryOperationNode`](../interfaces/BinaryOperationNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`BinaryOperationNode`](../interfaces/BinaryOperationNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformBinaryOperation`](OperationNodeTransformer.md#transformbinaryoperation)

***

### transformCase()

> `protected` **transformCase**(`node`, `queryId?`): [`CaseNode`](../interfaces/CaseNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1156](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1156)

#### Parameters

##### node

[`CaseNode`](../interfaces/CaseNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CaseNode`](../interfaces/CaseNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCase`](OperationNodeTransformer.md#transformcase)

***

### transformCast()

> `protected` **transformCast**(`node`, `queryId?`): [`CastNode`](../interfaces/CastNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1267](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1267)

#### Parameters

##### node

[`CastNode`](../interfaces/CastNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CastNode`](../interfaces/CastNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCast`](OperationNodeTransformer.md#transformcast)

***

### transformCheckConstraint()

> `protected` **transformCheckConstraint**(`node`, `queryId?`): [`CheckConstraintNode`](../interfaces/CheckConstraintNode.md)

Defined in: [operation-node/operation-node-transformer.ts:767](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L767)

#### Parameters

##### node

[`CheckConstraintNode`](../interfaces/CheckConstraintNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CheckConstraintNode`](../interfaces/CheckConstraintNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCheckConstraint`](OperationNodeTransformer.md#transformcheckconstraint)

***

### transformCollate()

> `protected` **transformCollate**(`node`, `_queryId?`): [`CollateNode`](../interfaces/CollateNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1397](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1397)

#### Parameters

##### node

[`CollateNode`](../interfaces/CollateNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CollateNode`](../interfaces/CollateNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCollate`](OperationNodeTransformer.md#transformcollate)

***

### transformColumn()

> `protected` **transformColumn**(`node`, `queryId?`): [`ColumnNode`](../interfaces/ColumnNode.md)

Defined in: [operation-node/operation-node-transformer.ts:321](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L321)

#### Parameters

##### node

[`ColumnNode`](../interfaces/ColumnNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ColumnNode`](../interfaces/ColumnNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformColumn`](OperationNodeTransformer.md#transformcolumn)

***

### transformColumnDefinition()

> `protected` **transformColumnDefinition**(`node`, `queryId?`): [`ColumnDefinitionNode`](../interfaces/ColumnDefinitionNode.md)

Defined in: [operation-node/operation-node-transformer.ts:498](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L498)

#### Parameters

##### node

[`ColumnDefinitionNode`](../interfaces/ColumnDefinitionNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ColumnDefinitionNode`](../interfaces/ColumnDefinitionNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformColumnDefinition`](OperationNodeTransformer.md#transformcolumndefinition)

***

### transformColumnUpdate()

> `protected` **transformColumnUpdate**(`node`, `queryId?`): [`ColumnUpdateNode`](../interfaces/ColumnUpdateNode.md)

Defined in: [operation-node/operation-node-transformer.ts:611](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L611)

#### Parameters

##### node

[`ColumnUpdateNode`](../interfaces/ColumnUpdateNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ColumnUpdateNode`](../interfaces/ColumnUpdateNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformColumnUpdate`](OperationNodeTransformer.md#transformcolumnupdate)

***

### transformCommonTableExpression()

> `protected` **transformCommonTableExpression**(`node`, `queryId?`): [`CommonTableExpressionNode`](../interfaces/CommonTableExpressionNode.md)

Defined in: [operation-node/operation-node-transformer.ts:786](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L786)

#### Parameters

##### node

[`CommonTableExpressionNode`](../interfaces/CommonTableExpressionNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CommonTableExpressionNode`](../interfaces/CommonTableExpressionNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCommonTableExpression`](OperationNodeTransformer.md#transformcommontableexpression)

***

### transformCommonTableExpressionName()

> `protected` **transformCommonTableExpressionName**(`node`, `queryId?`): [`CommonTableExpressionNameNode`](../interfaces/CommonTableExpressionNameNode.md)

Defined in: [operation-node/operation-node-transformer.ts:798](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L798)

#### Parameters

##### node

[`CommonTableExpressionNameNode`](../interfaces/CommonTableExpressionNameNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CommonTableExpressionNameNode`](../interfaces/CommonTableExpressionNameNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCommonTableExpressionName`](OperationNodeTransformer.md#transformcommontableexpressionname)

***

### transformCreateIndex()

> `protected` **transformCreateIndex**(`node`, `queryId?`): [`CreateIndexNode`](../interfaces/CreateIndexNode.md)

Defined in: [operation-node/operation-node-transformer.ts:662](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L662)

#### Parameters

##### node

[`CreateIndexNode`](../interfaces/CreateIndexNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CreateIndexNode`](../interfaces/CreateIndexNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCreateIndex`](OperationNodeTransformer.md#transformcreateindex)

***

### transformCreateSchema()

> `protected` **transformCreateSchema**(`node`, `queryId?`): [`CreateSchemaNode`](../interfaces/CreateSchemaNode.md)

Defined in: [operation-node/operation-node-transformer.ts:816](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L816)

#### Parameters

##### node

[`CreateSchemaNode`](../interfaces/CreateSchemaNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CreateSchemaNode`](../interfaces/CreateSchemaNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCreateSchema`](OperationNodeTransformer.md#transformcreateschema)

***

### transformCreateTable()

> `protected` **transformCreateTable**(`node`, `queryId?`): [`CreateTableNode`](../interfaces/CreateTableNode.md)

Defined in: [operation-node/operation-node-transformer.ts:479](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L479)

#### Parameters

##### node

[`CreateTableNode`](../interfaces/CreateTableNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CreateTableNode`](../interfaces/CreateTableNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCreateTable`](OperationNodeTransformer.md#transformcreatetable)

***

### transformCreateType()

> `protected` **transformCreateType**(`node`, `queryId?`): [`CreateTypeNode`](../interfaces/CreateTypeNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1025](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1025)

#### Parameters

##### node

[`CreateTypeNode`](../interfaces/CreateTypeNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CreateTypeNode`](../interfaces/CreateTypeNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCreateType`](OperationNodeTransformer.md#transformcreatetype)

***

### transformCreateView()

> `protected` **transformCreateView**(`node`, `queryId?`): [`CreateViewNode`](../interfaces/CreateViewNode.md)

Defined in: [operation-node/operation-node-transformer.ts:941](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L941)

#### Parameters

##### node

[`CreateViewNode`](../interfaces/CreateViewNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CreateViewNode`](../interfaces/CreateViewNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformCreateView`](OperationNodeTransformer.md#transformcreateview)

***

### transformDataType()

> `protected` **transformDataType**(`node`, `_queryId?`): [`DataTypeNode`](../interfaces/DataTypeNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1336](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1336)

#### Parameters

##### node

[`DataTypeNode`](../interfaces/DataTypeNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DataTypeNode`](../interfaces/DataTypeNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDataType`](OperationNodeTransformer.md#transformdatatype)

***

### transformDefaultInsertValue()

> `protected` **transformDefaultInsertValue**(`node`, `_queryId?`): [`DefaultInsertValueNode`](../interfaces/DefaultInsertValueNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1381](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1381)

#### Parameters

##### node

[`DefaultInsertValueNode`](../interfaces/DefaultInsertValueNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DefaultInsertValueNode`](../interfaces/DefaultInsertValueNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDefaultInsertValue`](OperationNodeTransformer.md#transformdefaultinsertvalue)

***

### transformDefaultValue()

> `protected` **transformDefaultValue**(`node`, `queryId?`): [`DefaultValueNode`](../interfaces/DefaultValueNode.md)

Defined in: [operation-node/operation-node-transformer.ts:996](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L996)

#### Parameters

##### node

[`DefaultValueNode`](../interfaces/DefaultValueNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DefaultValueNode`](../interfaces/DefaultValueNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDefaultValue`](OperationNodeTransformer.md#transformdefaultvalue)

***

### transformDeleteQuery()

> `protected` **transformDeleteQuery**(`node`, `queryId?`): [`DeleteQueryNode`](../interfaces/DeleteQueryNode.md)

Defined in: [operation-node/operation-node-transformer.ts:448](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L448)

#### Parameters

##### node

[`DeleteQueryNode`](../interfaces/DeleteQueryNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DeleteQueryNode`](../interfaces/DeleteQueryNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDeleteQuery`](OperationNodeTransformer.md#transformdeletequery)

***

### transformDropColumn()

> `protected` **transformDropColumn**(`node`, `queryId?`): [`DropColumnNode`](../interfaces/DropColumnNode.md)

Defined in: [operation-node/operation-node-transformer.ts:860](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L860)

#### Parameters

##### node

[`DropColumnNode`](../interfaces/DropColumnNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DropColumnNode`](../interfaces/DropColumnNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDropColumn`](OperationNodeTransformer.md#transformdropcolumn)

***

### transformDropConstraint()

> `protected` **transformDropConstraint**(`node`, `queryId?`): [`DropConstraintNode`](../interfaces/DropConstraintNode.md)

Defined in: [operation-node/operation-node-transformer.ts:918](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L918)

#### Parameters

##### node

[`DropConstraintNode`](../interfaces/DropConstraintNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DropConstraintNode`](../interfaces/DropConstraintNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDropConstraint`](OperationNodeTransformer.md#transformdropconstraint)

***

### transformDropIndex()

> `protected` **transformDropIndex**(`node`, `queryId?`): [`DropIndexNode`](../interfaces/DropIndexNode.md)

Defined in: [operation-node/operation-node-transformer.ts:686](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L686)

#### Parameters

##### node

[`DropIndexNode`](../interfaces/DropIndexNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DropIndexNode`](../interfaces/DropIndexNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDropIndex`](OperationNodeTransformer.md#transformdropindex)

***

### transformDropSchema()

> `protected` **transformDropSchema**(`node`, `queryId?`): [`DropSchemaNode`](../interfaces/DropSchemaNode.md)

Defined in: [operation-node/operation-node-transformer.ts:827](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L827)

#### Parameters

##### node

[`DropSchemaNode`](../interfaces/DropSchemaNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DropSchemaNode`](../interfaces/DropSchemaNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDropSchema`](OperationNodeTransformer.md#transformdropschema)

***

### transformDropTable()

> `protected` **transformDropTable**(`node`, `queryId?`): [`DropTableNode`](../interfaces/DropTableNode.md)

Defined in: [operation-node/operation-node-transformer.ts:533](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L533)

#### Parameters

##### node

[`DropTableNode`](../interfaces/DropTableNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DropTableNode`](../interfaces/DropTableNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDropTable`](OperationNodeTransformer.md#transformdroptable)

***

### transformDropType()

> `protected` **transformDropType**(`node`, `queryId?`): [`DropTypeNode`](../interfaces/DropTypeNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1036](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1036)

#### Parameters

##### node

[`DropTypeNode`](../interfaces/DropTypeNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DropTypeNode`](../interfaces/DropTypeNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDropType`](OperationNodeTransformer.md#transformdroptype)

***

### transformDropView()

> `protected` **transformDropView**(`node`, `queryId?`): [`DropViewNode`](../interfaces/DropViewNode.md)

Defined in: [operation-node/operation-node-transformer.ts:969](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L969)

#### Parameters

##### node

[`DropViewNode`](../interfaces/DropViewNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`DropViewNode`](../interfaces/DropViewNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformDropView`](OperationNodeTransformer.md#transformdropview)

***

### transformExplain()

> `protected` **transformExplain**(`node`, `queryId?`): [`ExplainNode`](../interfaces/ExplainNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1049](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1049)

#### Parameters

##### node

[`ExplainNode`](../interfaces/ExplainNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ExplainNode`](../interfaces/ExplainNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformExplain`](OperationNodeTransformer.md#transformexplain)

***

### transformFetch()

> `protected` **transformFetch**(`node`, `queryId?`): [`FetchNode`](../interfaces/FetchNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1275](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1275)

#### Parameters

##### node

[`FetchNode`](../interfaces/FetchNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`FetchNode`](../interfaces/FetchNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformFetch`](OperationNodeTransformer.md#transformfetch)

***

### transformForeignKeyConstraint()

> `protected` **transformForeignKeyConstraint**(`node`, `queryId?`): [`ForeignKeyConstraintNode`](../interfaces/ForeignKeyConstraintNode.md)

Defined in: [operation-node/operation-node-transformer.ts:726](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L726)

#### Parameters

##### node

[`ForeignKeyConstraintNode`](../interfaces/ForeignKeyConstraintNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ForeignKeyConstraintNode`](../interfaces/ForeignKeyConstraintNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformForeignKeyConstraint`](OperationNodeTransformer.md#transformforeignkeyconstraint)

***

### transformFrom()

> `protected` **transformFrom**(`node`, `queryId?`): [`FromNode`](../interfaces/FromNode.md)

Defined in: [operation-node/operation-node-transformer.ts:343](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L343)

#### Parameters

##### node

[`FromNode`](../interfaces/FromNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`FromNode`](../interfaces/FromNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformFrom`](OperationNodeTransformer.md#transformfrom)

***

### transformFunction()

> `protected` **transformFunction**(`node`, `queryId?`): [`FunctionNode`](../interfaces/FunctionNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1145](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1145)

#### Parameters

##### node

[`FunctionNode`](../interfaces/FunctionNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`FunctionNode`](../interfaces/FunctionNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformFunction`](OperationNodeTransformer.md#transformfunction)

***

### transformGenerated()

> `protected` **transformGenerated**(`node`, `queryId?`): [`GeneratedNode`](../interfaces/GeneratedNode.md)

Defined in: [operation-node/operation-node-transformer.ts:982](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L982)

#### Parameters

##### node

[`GeneratedNode`](../interfaces/GeneratedNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`GeneratedNode`](../interfaces/GeneratedNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformGenerated`](OperationNodeTransformer.md#transformgenerated)

***

### transformGroupBy()

> `protected` **transformGroupBy**(`node`, `queryId?`): [`GroupByNode`](../interfaces/GroupByNode.md)

Defined in: [operation-node/operation-node-transformer.ts:569](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L569)

#### Parameters

##### node

[`GroupByNode`](../interfaces/GroupByNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`GroupByNode`](../interfaces/GroupByNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformGroupBy`](OperationNodeTransformer.md#transformgroupby)

***

### transformGroupByItem()

> `protected` **transformGroupByItem**(`node`, `queryId?`): [`GroupByItemNode`](../interfaces/GroupByItemNode.md)

Defined in: [operation-node/operation-node-transformer.ts:579](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L579)

#### Parameters

##### node

[`GroupByItemNode`](../interfaces/GroupByItemNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`GroupByItemNode`](../interfaces/GroupByItemNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformGroupByItem`](OperationNodeTransformer.md#transformgroupbyitem)

***

### transformHaving()

> `protected` **transformHaving**(`node`, `queryId?`): [`HavingNode`](../interfaces/HavingNode.md)

Defined in: [operation-node/operation-node-transformer.ts:809](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L809)

#### Parameters

##### node

[`HavingNode`](../interfaces/HavingNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`HavingNode`](../interfaces/HavingNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformHaving`](OperationNodeTransformer.md#transformhaving)

***

### transformIdentifier()

> `protected` **transformIdentifier**(`node`, `queryId`): [`IdentifierNode`](../interfaces/IdentifierNode.md)

Defined in: [plugin/camel-case/camel-case-transformer.ts:14](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-transformer.ts#L14)

#### Parameters

##### node

[`IdentifierNode`](../interfaces/IdentifierNode.md)

##### queryId

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`IdentifierNode`](../interfaces/IdentifierNode.md)

#### Overrides

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformIdentifier`](OperationNodeTransformer.md#transformidentifier)

***

### transformInsertQuery()

> `protected` **transformInsertQuery**(`node`, `queryId?`): [`InsertQueryNode`](../interfaces/InsertQueryNode.md)

Defined in: [operation-node/operation-node-transformer.ts:418](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L418)

#### Parameters

##### node

[`InsertQueryNode`](../interfaces/InsertQueryNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`InsertQueryNode`](../interfaces/InsertQueryNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformInsertQuery`](OperationNodeTransformer.md#transforminsertquery)

***

### transformJoin()

> `protected` **transformJoin**(`node`, `queryId?`): [`JoinNode`](../interfaces/JoinNode.md)

Defined in: [operation-node/operation-node-transformer.ts:394](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L394)

#### Parameters

##### node

[`JoinNode`](../interfaces/JoinNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`JoinNode`](../interfaces/JoinNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformJoin`](OperationNodeTransformer.md#transformjoin)

***

### transformJSONOperatorChain()

> `protected` **transformJSONOperatorChain**(`node`, `queryId?`): [`JSONOperatorChainNode`](../interfaces/JSONOperatorChainNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1207](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1207)

#### Parameters

##### node

[`JSONOperatorChainNode`](../interfaces/JSONOperatorChainNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`JSONOperatorChainNode`](../interfaces/JSONOperatorChainNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformJSONOperatorChain`](OperationNodeTransformer.md#transformjsonoperatorchain)

***

### transformJSONPath()

> `protected` **transformJSONPath**(`node`, `queryId?`): [`JSONPathNode`](../interfaces/JSONPathNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1185](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1185)

#### Parameters

##### node

[`JSONPathNode`](../interfaces/JSONPathNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`JSONPathNode`](../interfaces/JSONPathNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformJSONPath`](OperationNodeTransformer.md#transformjsonpath)

***

### transformJSONPathLeg()

> `protected` **transformJSONPathLeg**(`node`, `_queryId?`): [`JSONPathLegNode`](../interfaces/JSONPathLegNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1196](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1196)

#### Parameters

##### node

[`JSONPathLegNode`](../interfaces/JSONPathLegNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`JSONPathLegNode`](../interfaces/JSONPathLegNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformJSONPathLeg`](OperationNodeTransformer.md#transformjsonpathleg)

***

### transformJSONReference()

> `protected` **transformJSONReference**(`node`, `queryId?`): [`JSONReferenceNode`](../interfaces/JSONReferenceNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1174](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1174)

#### Parameters

##### node

[`JSONReferenceNode`](../interfaces/JSONReferenceNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`JSONReferenceNode`](../interfaces/JSONReferenceNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformJSONReference`](OperationNodeTransformer.md#transformjsonreference)

***

### transformLimit()

> `protected` **transformLimit**(`node`, `queryId?`): [`LimitNode`](../interfaces/LimitNode.md)

Defined in: [operation-node/operation-node-transformer.ts:622](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L622)

#### Parameters

##### node

[`LimitNode`](../interfaces/LimitNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`LimitNode`](../interfaces/LimitNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformLimit`](OperationNodeTransformer.md#transformlimit)

***

### transformList()

> `protected` **transformList**(`node`, `queryId?`): [`ListNode`](../interfaces/ListNode.md)

Defined in: [operation-node/operation-node-transformer.ts:679](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L679)

#### Parameters

##### node

[`ListNode`](../interfaces/ListNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ListNode`](../interfaces/ListNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformList`](OperationNodeTransformer.md#transformlist)

***

### transformMatched()

> `protected` **transformMatched**(`node`, `_queryId?`): [`MatchedNode`](../interfaces/MatchedNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1242](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1242)

#### Parameters

##### node

[`MatchedNode`](../interfaces/MatchedNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`MatchedNode`](../interfaces/MatchedNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformMatched`](OperationNodeTransformer.md#transformmatched)

***

### transformMergeQuery()

> `protected` **transformMergeQuery**(`node`, `queryId?`): [`MergeQueryNode`](../interfaces/MergeQueryNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1225](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1225)

#### Parameters

##### node

[`MergeQueryNode`](../interfaces/MergeQueryNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`MergeQueryNode`](../interfaces/MergeQueryNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformMergeQuery`](OperationNodeTransformer.md#transformmergequery)

***

### transformModifyColumn()

> `protected` **transformModifyColumn**(`node`, `queryId?`): [`ModifyColumnNode`](../interfaces/ModifyColumnNode.md)

Defined in: [operation-node/operation-node-transformer.ts:898](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L898)

#### Parameters

##### node

[`ModifyColumnNode`](../interfaces/ModifyColumnNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ModifyColumnNode`](../interfaces/ModifyColumnNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformModifyColumn`](OperationNodeTransformer.md#transformmodifycolumn)

***

### transformNode()

> **transformNode**\<`T`\>(`node`, `queryId?`): `T`

Defined in: [operation-node/operation-node-transformer.ts:253](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L253)

#### Type Parameters

##### T

`T` *extends* [`OperationNode`](../interfaces/OperationNode.md) \| `undefined`

#### Parameters

##### node

`T`

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

`T`

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformNode`](OperationNodeTransformer.md#transformnode)

***

### transformNodeImpl()

> `protected` **transformNodeImpl**\<`T`\>(`node`, `queryId?`): `T`

Defined in: [operation-node/operation-node-transformer.ts:268](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L268)

#### Type Parameters

##### T

`T` *extends* [`OperationNode`](../interfaces/OperationNode.md)

#### Parameters

##### node

`T`

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

`T`

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformNodeImpl`](OperationNodeTransformer.md#transformnodeimpl)

***

### transformNodeList()

> `protected` **transformNodeList**\<`T`\>(`list`, `queryId?`): `T`

Defined in: [operation-node/operation-node-transformer.ts:275](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L275)

#### Type Parameters

##### T

`T` *extends* readonly [`OperationNode`](../interfaces/OperationNode.md)[] \| `undefined`

#### Parameters

##### list

`T`

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

`T`

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformNodeList`](OperationNodeTransformer.md#transformnodelist)

***

### transformOffset()

> `protected` **transformOffset**(`node`, `queryId?`): [`OffsetNode`](../interfaces/OffsetNode.md)

Defined in: [operation-node/operation-node-transformer.ts:629](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L629)

#### Parameters

##### node

[`OffsetNode`](../interfaces/OffsetNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OffsetNode`](../interfaces/OffsetNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOffset`](OperationNodeTransformer.md#transformoffset)

***

### transformOn()

> `protected` **transformOn**(`node`, `queryId?`): [`OnNode`](../interfaces/OnNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1006](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1006)

#### Parameters

##### node

[`OnNode`](../interfaces/OnNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OnNode`](../interfaces/OnNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOn`](OperationNodeTransformer.md#transformon)

***

### transformOnConflict()

> `protected` **transformOnConflict**(`node`, `queryId?`): [`OnConflictNode`](../interfaces/OnConflictNode.md)

Defined in: [operation-node/operation-node-transformer.ts:636](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L636)

#### Parameters

##### node

[`OnConflictNode`](../interfaces/OnConflictNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OnConflictNode`](../interfaces/OnConflictNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOnConflict`](OperationNodeTransformer.md#transformonconflict)

***

### transformOnDuplicateKey()

> `protected` **transformOnDuplicateKey**(`node`, `queryId?`): [`OnDuplicateKeyNode`](../interfaces/OnDuplicateKeyNode.md)

Defined in: [operation-node/operation-node-transformer.ts:652](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L652)

#### Parameters

##### node

[`OnDuplicateKeyNode`](../interfaces/OnDuplicateKeyNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OnDuplicateKeyNode`](../interfaces/OnDuplicateKeyNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOnDuplicateKey`](OperationNodeTransformer.md#transformonduplicatekey)

***

### transformOperator()

> `protected` **transformOperator**(`node`, `_queryId?`): [`OperatorNode`](../interfaces/OperatorNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1373](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1373)

#### Parameters

##### node

[`OperatorNode`](../interfaces/OperatorNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OperatorNode`](../interfaces/OperatorNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOperator`](OperationNodeTransformer.md#transformoperator)

***

### transformOr()

> `protected` **transformOr**(`node`, `queryId?`): [`OrNode`](../interfaces/OrNode.md)

Defined in: [operation-node/operation-node-transformer.ts:369](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L369)

#### Parameters

##### node

[`OrNode`](../interfaces/OrNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OrNode`](../interfaces/OrNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOr`](OperationNodeTransformer.md#transformor)

***

### transformOrAction()

> `protected` **transformOrAction**(`node`, `_queryId?`): [`OrActionNode`](../interfaces/OrActionNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1389](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1389)

#### Parameters

##### node

[`OrActionNode`](../interfaces/OrActionNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OrActionNode`](../interfaces/OrActionNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOrAction`](OperationNodeTransformer.md#transformoraction)

***

### transformOrderBy()

> `protected` **transformOrderBy**(`node`, `queryId?`): [`OrderByNode`](../interfaces/OrderByNode.md)

Defined in: [operation-node/operation-node-transformer.ts:546](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L546)

#### Parameters

##### node

[`OrderByNode`](../interfaces/OrderByNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OrderByNode`](../interfaces/OrderByNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOrderBy`](OperationNodeTransformer.md#transformorderby)

***

### transformOrderByItem()

> `protected` **transformOrderByItem**(`node`, `queryId?`): [`OrderByItemNode`](../interfaces/OrderByItemNode.md)

Defined in: [operation-node/operation-node-transformer.ts:556](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L556)

#### Parameters

##### node

[`OrderByItemNode`](../interfaces/OrderByItemNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OrderByItemNode`](../interfaces/OrderByItemNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOrderByItem`](OperationNodeTransformer.md#transformorderbyitem)

***

### transformOutput()

> `protected` **transformOutput**(`node`, `queryId?`): [`OutputNode`](../interfaces/OutputNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1291](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1291)

#### Parameters

##### node

[`OutputNode`](../interfaces/OutputNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OutputNode`](../interfaces/OutputNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOutput`](OperationNodeTransformer.md#transformoutput)

***

### transformOver()

> `protected` **transformOver**(`node`, `queryId?`): [`OverNode`](../interfaces/OverNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1087](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1087)

#### Parameters

##### node

[`OverNode`](../interfaces/OverNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`OverNode`](../interfaces/OverNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformOver`](OperationNodeTransformer.md#transformover)

***

### transformParens()

> `protected` **transformParens**(`node`, `queryId?`): [`ParensNode`](../interfaces/ParensNode.md)

Defined in: [operation-node/operation-node-transformer.ts:387](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L387)

#### Parameters

##### node

[`ParensNode`](../interfaces/ParensNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ParensNode`](../interfaces/ParensNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformParens`](OperationNodeTransformer.md#transformparens)

***

### transformPartitionBy()

> `protected` **transformPartitionBy**(`node`, `queryId?`): [`PartitionByNode`](../interfaces/PartitionByNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1095](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1095)

#### Parameters

##### node

[`PartitionByNode`](../interfaces/PartitionByNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`PartitionByNode`](../interfaces/PartitionByNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformPartitionBy`](OperationNodeTransformer.md#transformpartitionby)

***

### transformPartitionByItem()

> `protected` **transformPartitionByItem**(`node`, `queryId?`): [`PartitionByItemNode`](../interfaces/PartitionByItemNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1105](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1105)

#### Parameters

##### node

[`PartitionByItemNode`](../interfaces/PartitionByItemNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`PartitionByItemNode`](../interfaces/PartitionByItemNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformPartitionByItem`](OperationNodeTransformer.md#transformpartitionbyitem)

***

### transformPrimaryKeyConstraint()

> `protected` **transformPrimaryKeyConstraint**(`node`, `queryId?`): [`PrimaryKeyConstraintNode`](../interfaces/PrimaryKeyConstraintNode.md)

Defined in: [operation-node/operation-node-transformer.ts:699](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L699)

#### Parameters

##### node

[`PrimaryKeyConstraintNode`](../interfaces/PrimaryKeyConstraintNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`PrimaryKeyConstraintNode`](../interfaces/PrimaryKeyConstraintNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformPrimaryKeyConstraint`](OperationNodeTransformer.md#transformprimarykeyconstraint)

***

### transformPrimitiveValueList()

> `protected` **transformPrimitiveValueList**(`node`, `_queryId?`): [`PrimitiveValueListNode`](../interfaces/PrimitiveValueListNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1365](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1365)

#### Parameters

##### node

[`PrimitiveValueListNode`](../interfaces/PrimitiveValueListNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`PrimitiveValueListNode`](../interfaces/PrimitiveValueListNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformPrimitiveValueList`](OperationNodeTransformer.md#transformprimitivevaluelist)

***

### transformRaw()

> `protected` **transformRaw**(`node`, `queryId?`): [`RawNode`](../interfaces/RawNode.md)

Defined in: [operation-node/operation-node-transformer.ts:403](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L403)

#### Parameters

##### node

[`RawNode`](../interfaces/RawNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`RawNode`](../interfaces/RawNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformRaw`](OperationNodeTransformer.md#transformraw)

***

### transformReference()

> `protected` **transformReference**(`node`, `queryId?`): [`ReferenceNode`](../interfaces/ReferenceNode.md)

Defined in: [operation-node/operation-node-transformer.ts:350](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L350)

#### Parameters

##### node

[`ReferenceNode`](../interfaces/ReferenceNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ReferenceNode`](../interfaces/ReferenceNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformReference`](OperationNodeTransformer.md#transformreference)

***

### transformReferences()

> `protected` **transformReferences**(`node`, `queryId?`): [`ReferencesNode`](../interfaces/ReferencesNode.md)

Defined in: [operation-node/operation-node-transformer.ts:754](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L754)

#### Parameters

##### node

[`ReferencesNode`](../interfaces/ReferencesNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ReferencesNode`](../interfaces/ReferencesNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformReferences`](OperationNodeTransformer.md#transformreferences)

***

### transformRefreshMaterializedView()

> `protected` **transformRefreshMaterializedView**(`node`, `queryId?`): [`RefreshMaterializedViewNode`](../interfaces/RefreshMaterializedViewNode.md)

Defined in: [operation-node/operation-node-transformer.ts:957](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L957)

#### Parameters

##### node

[`RefreshMaterializedViewNode`](../interfaces/RefreshMaterializedViewNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`RefreshMaterializedViewNode`](../interfaces/RefreshMaterializedViewNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformRefreshMaterializedView`](OperationNodeTransformer.md#transformrefreshmaterializedview)

***

### transformRenameColumn()

> `protected` **transformRenameColumn**(`node`, `queryId?`): [`RenameColumnNode`](../interfaces/RenameColumnNode.md)

Defined in: [operation-node/operation-node-transformer.ts:871](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L871)

#### Parameters

##### node

[`RenameColumnNode`](../interfaces/RenameColumnNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`RenameColumnNode`](../interfaces/RenameColumnNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformRenameColumn`](OperationNodeTransformer.md#transformrenamecolumn)

***

### transformRenameConstraint()

> `protected` **transformRenameConstraint**(`node`, `queryId?`): [`RenameConstraintNode`](../interfaces/RenameConstraintNode.md)

Defined in: [operation-node/operation-node-transformer.ts:930](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L930)

#### Parameters

##### node

[`RenameConstraintNode`](../interfaces/RenameConstraintNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`RenameConstraintNode`](../interfaces/RenameConstraintNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformRenameConstraint`](OperationNodeTransformer.md#transformrenameconstraint)

***

### transformRenameValue()

> `protected` **transformRenameValue**(`node`, `queryId?`): [`RenameValueNode`](../interfaces/RenameValueNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1325](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1325)

#### Parameters

##### node

[`RenameValueNode`](../interfaces/RenameValueNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`RenameValueNode`](../interfaces/RenameValueNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformRenameValue`](OperationNodeTransformer.md#transformrenamevalue)

***

### transformReturning()

> `protected` **transformReturning**(`node`, `queryId?`): [`ReturningNode`](../interfaces/ReturningNode.md)

Defined in: [operation-node/operation-node-transformer.ts:469](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L469)

#### Parameters

##### node

[`ReturningNode`](../interfaces/ReturningNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ReturningNode`](../interfaces/ReturningNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformReturning`](OperationNodeTransformer.md#transformreturning)

***

### transformSchemableIdentifier()

> `protected` **transformSchemableIdentifier**(`node`, `queryId?`): [`SchemableIdentifierNode`](../interfaces/SchemableIdentifierNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1060](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1060)

#### Parameters

##### node

[`SchemableIdentifierNode`](../interfaces/SchemableIdentifierNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`SchemableIdentifierNode`](../interfaces/SchemableIdentifierNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformSchemableIdentifier`](OperationNodeTransformer.md#transformschemableidentifier)

***

### transformSelectAll()

> `protected` **transformSelectAll**(`node`, `_queryId?`): [`SelectAllNode`](../interfaces/SelectAllNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1344](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1344)

#### Parameters

##### node

[`SelectAllNode`](../interfaces/SelectAllNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`SelectAllNode`](../interfaces/SelectAllNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformSelectAll`](OperationNodeTransformer.md#transformselectall)

***

### transformSelection()

> `protected` **transformSelection**(`node`, `queryId?`): [`SelectionNode`](../interfaces/SelectionNode.md)

Defined in: [operation-node/operation-node-transformer.ts:311](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L311)

#### Parameters

##### node

[`SelectionNode`](../interfaces/SelectionNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`SelectionNode`](../interfaces/SelectionNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformSelection`](OperationNodeTransformer.md#transformselection)

***

### transformSelectModifier()

> `protected` **transformSelectModifier**(`node`, `queryId?`): [`SelectModifierNode`](../interfaces/SelectModifierNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1013](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1013)

#### Parameters

##### node

[`SelectModifierNode`](../interfaces/SelectModifierNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`SelectModifierNode`](../interfaces/SelectModifierNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformSelectModifier`](OperationNodeTransformer.md#transformselectmodifier)

***

### transformSelectQuery()

> `protected` **transformSelectQuery**(`node`, `queryId?`): [`SelectQueryNode`](../interfaces/SelectQueryNode.md)

Defined in: [operation-node/operation-node-transformer.ts:285](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L285)

#### Parameters

##### node

[`SelectQueryNode`](../interfaces/SelectQueryNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`SelectQueryNode`](../interfaces/SelectQueryNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformSelectQuery`](OperationNodeTransformer.md#transformselectquery)

***

### transformSetOperation()

> `protected` **transformSetOperation**(`node`, `queryId?`): [`SetOperationNode`](../interfaces/SetOperationNode.md)

Defined in: [operation-node/operation-node-transformer.ts:742](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L742)

#### Parameters

##### node

[`SetOperationNode`](../interfaces/SetOperationNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`SetOperationNode`](../interfaces/SetOperationNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformSetOperation`](OperationNodeTransformer.md#transformsetoperation)

***

### transformTable()

> `protected` **transformTable**(`node`, `queryId?`): [`TableNode`](../interfaces/TableNode.md)

Defined in: [operation-node/operation-node-transformer.ts:336](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L336)

#### Parameters

##### node

[`TableNode`](../interfaces/TableNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`TableNode`](../interfaces/TableNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformTable`](OperationNodeTransformer.md#transformtable)

***

### transformTop()

> `protected` **transformTop**(`node`, `_queryId?`): [`TopNode`](../interfaces/TopNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1283](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1283)

#### Parameters

##### node

[`TopNode`](../interfaces/TopNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`TopNode`](../interfaces/TopNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformTop`](OperationNodeTransformer.md#transformtop)

***

### transformTuple()

> `protected` **transformTuple**(`node`, `queryId?`): [`TupleNode`](../interfaces/TupleNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1218](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1218)

#### Parameters

##### node

[`TupleNode`](../interfaces/TupleNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`TupleNode`](../interfaces/TupleNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformTuple`](OperationNodeTransformer.md#transformtuple)

***

### transformUnaryOperation()

> `protected` **transformUnaryOperation**(`node`, `queryId?`): [`UnaryOperationNode`](../interfaces/UnaryOperationNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1127](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1127)

#### Parameters

##### node

[`UnaryOperationNode`](../interfaces/UnaryOperationNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`UnaryOperationNode`](../interfaces/UnaryOperationNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformUnaryOperation`](OperationNodeTransformer.md#transformunaryoperation)

***

### transformUniqueConstraint()

> `protected` **transformUniqueConstraint**(`node`, `queryId?`): [`UniqueConstraintNode`](../interfaces/UniqueConstraintNode.md)

Defined in: [operation-node/operation-node-transformer.ts:712](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L712)

#### Parameters

##### node

[`UniqueConstraintNode`](../interfaces/UniqueConstraintNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`UniqueConstraintNode`](../interfaces/UniqueConstraintNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformUniqueConstraint`](OperationNodeTransformer.md#transformuniqueconstraint)

***

### transformUpdateQuery()

> `protected` **transformUpdateQuery**(`node`, `queryId?`): [`UpdateQueryNode`](../interfaces/UpdateQueryNode.md)

Defined in: [operation-node/operation-node-transformer.ts:589](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L589)

#### Parameters

##### node

[`UpdateQueryNode`](../interfaces/UpdateQueryNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`UpdateQueryNode`](../interfaces/UpdateQueryNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformUpdateQuery`](OperationNodeTransformer.md#transformupdatequery)

***

### transformUsing()

> `protected` **transformUsing**(`node`, `queryId?`): [`UsingNode`](../interfaces/UsingNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1138](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1138)

#### Parameters

##### node

[`UsingNode`](../interfaces/UsingNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`UsingNode`](../interfaces/UsingNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformUsing`](OperationNodeTransformer.md#transformusing)

***

### transformValue()

> `protected` **transformValue**(`node`, `_queryId?`): [`ValueNode`](../interfaces/ValueNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1360](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1360)

#### Parameters

##### node

[`ValueNode`](../interfaces/ValueNode.md)

##### \_queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ValueNode`](../interfaces/ValueNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformValue`](OperationNodeTransformer.md#transformvalue)

***

### transformValueList()

> `protected` **transformValueList**(`node`, `queryId?`): [`ValueListNode`](../interfaces/ValueListNode.md)

Defined in: [operation-node/operation-node-transformer.ts:377](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L377)

#### Parameters

##### node

[`ValueListNode`](../interfaces/ValueListNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ValueListNode`](../interfaces/ValueListNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformValueList`](OperationNodeTransformer.md#transformvaluelist)

***

### transformValues()

> `protected` **transformValues**(`node`, `queryId?`): [`ValuesNode`](../interfaces/ValuesNode.md)

Defined in: [operation-node/operation-node-transformer.ts:441](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L441)

#### Parameters

##### node

[`ValuesNode`](../interfaces/ValuesNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`ValuesNode`](../interfaces/ValuesNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformValues`](OperationNodeTransformer.md#transformvalues)

***

### transformWhen()

> `protected` **transformWhen**(`node`, `queryId?`): [`WhenNode`](../interfaces/WhenNode.md)

Defined in: [operation-node/operation-node-transformer.ts:1166](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L1166)

#### Parameters

##### node

[`WhenNode`](../interfaces/WhenNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`WhenNode`](../interfaces/WhenNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformWhen`](OperationNodeTransformer.md#transformwhen)

***

### transformWhere()

> `protected` **transformWhere**(`node`, `queryId?`): [`WhereNode`](../interfaces/WhereNode.md)

Defined in: [operation-node/operation-node-transformer.ts:411](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L411)

#### Parameters

##### node

[`WhereNode`](../interfaces/WhereNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`WhereNode`](../interfaces/WhereNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformWhere`](OperationNodeTransformer.md#transformwhere)

***

### transformWith()

> `protected` **transformWith**(`node`, `queryId?`): [`WithNode`](../interfaces/WithNode.md)

Defined in: [operation-node/operation-node-transformer.ts:778](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-transformer.ts#L778)

#### Parameters

##### node

[`WithNode`](../interfaces/WithNode.md)

##### queryId?

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`WithNode`](../interfaces/WithNode.md)

#### Inherited from

[`OperationNodeTransformer`](OperationNodeTransformer.md).[`transformWith`](OperationNodeTransformer.md#transformwith)
