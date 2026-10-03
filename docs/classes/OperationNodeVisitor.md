[**kysely**](../index.md)

***

[kysely](../modules.md) / OperationNodeVisitor

# Abstract Class: OperationNodeVisitor

Defined in: [operation-node/operation-node-visitor.ts:107](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L107)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`DefaultQueryCompiler`](DefaultQueryCompiler.md)

## Constructors

### Constructor

> **new OperationNodeVisitor**(): `OperationNodeVisitor`

#### Returns

`OperationNodeVisitor`

## Properties

### nodeStack

> `protected` `readonly` **nodeStack**: [`OperationNode`](../interfaces/OperationNode.md)[] = `[]`

Defined in: [operation-node/operation-node-visitor.ts:108](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L108)

## Accessors

### parentNode

#### Get Signature

> **get** `protected` **parentNode**(): [`OperationNode`](../interfaces/OperationNode.md) \| `undefined`

Defined in: [operation-node/operation-node-visitor.ts:110](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L110)

##### Returns

[`OperationNode`](../interfaces/OperationNode.md) \| `undefined`

## Methods

### visitAddColumn()

> `abstract` `protected` **visitAddColumn**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:242](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L242)

#### Parameters

##### node

[`AddColumnNode`](../interfaces/AddColumnNode.md)

#### Returns

`void`

***

### visitAddConstraint()

> `abstract` `protected` **visitAddConstraint**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:279](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L279)

#### Parameters

##### node

[`AddConstraintNode`](../interfaces/AddConstraintNode.md)

#### Returns

`void`

***

### visitAddIndex()

> `abstract` `protected` **visitAddIndex**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:326](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L326)

#### Parameters

##### node

[`AddIndexNode`](../interfaces/AddIndexNode.md)

#### Returns

`void`

***

### visitAddValue()

> `abstract` `protected` **visitAddValue**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:334](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L334)

#### Parameters

##### node

[`AddValueNode`](../interfaces/AddValueNode.md)

#### Returns

`void`

***

### visitAggregateFunction()

> `abstract` `protected` **visitAggregateFunction**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:308](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L308)

#### Parameters

##### node

[`AggregateFunctionNode`](../interfaces/AggregateFunctionNode.md)

#### Returns

`void`

***

### visitAlias()

> `abstract` `protected` **visitAlias**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:227](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L227)

#### Parameters

##### node

[`AliasNode`](../interfaces/AliasNode.md)

#### Returns

`void`

***

### visitAlterColumn()

> `abstract` `protected` **visitAlterColumn**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:277](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L277)

#### Parameters

##### node

[`AlterColumnNode`](../interfaces/AlterColumnNode.md)

#### Returns

`void`

***

### visitAlterTable()

> `abstract` `protected` **visitAlterTable**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:274](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L274)

#### Parameters

##### node

[`AlterTableNode`](../interfaces/AlterTableNode.md)

#### Returns

`void`

***

### visitAlterType()

> `abstract` `protected` **visitAlterType**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:333](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L333)

#### Parameters

##### node

[`AlterTypeNode`](../interfaces/AlterTypeNode.md)

#### Returns

`void`

***

### visitAnd()

> `abstract` `protected` **visitAnd**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:231](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L231)

#### Parameters

##### node

[`AndNode`](../interfaces/AndNode.md)

#### Returns

`void`

***

### visitBinaryOperation()

> `abstract` `protected` **visitBinaryOperation**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:313](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L313)

#### Parameters

##### node

[`BinaryOperationNode`](../interfaces/BinaryOperationNode.md)

#### Returns

`void`

***

### visitCase()

> `abstract` `protected` **visitCase**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:317](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L317)

#### Parameters

##### node

[`CaseNode`](../interfaces/CaseNode.md)

#### Returns

`void`

***

### visitCast()

> `abstract` `protected` **visitCast**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:327](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L327)

#### Parameters

##### node

[`CastNode`](../interfaces/CastNode.md)

#### Returns

`void`

***

### visitCheckConstraint()

> `abstract` `protected` **visitCheckConstraint**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:263](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L263)

#### Parameters

##### node

[`CheckConstraintNode`](../interfaces/CheckConstraintNode.md)

#### Returns

`void`

***

### visitCollate()

> `abstract` `protected` **visitCollate**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:332](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L332)

#### Parameters

##### node

[`CollateNode`](../interfaces/CollateNode.md)

#### Returns

`void`

***

### visitColumn()

> `abstract` `protected` **visitColumn**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:226](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L226)

#### Parameters

##### node

[`ColumnNode`](../interfaces/ColumnNode.md)

#### Returns

`void`

***

### visitColumnDefinition()

> `abstract` `protected` **visitColumnDefinition**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:243](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L243)

#### Parameters

##### node

[`ColumnDefinitionNode`](../interfaces/ColumnDefinitionNode.md)

#### Returns

`void`

***

### visitColumnUpdate()

> `abstract` `protected` **visitColumnUpdate**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:250](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L250)

#### Parameters

##### node

[`ColumnUpdateNode`](../interfaces/ColumnUpdateNode.md)

#### Returns

`void`

***

### visitCommonTableExpression()

> `abstract` `protected` **visitCommonTableExpression**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:265](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L265)

#### Parameters

##### node

[`CommonTableExpressionNode`](../interfaces/CommonTableExpressionNode.md)

#### Returns

`void`

***

### visitCommonTableExpressionName()

> `abstract` `protected` **visitCommonTableExpressionName**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:268](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L268)

#### Parameters

##### node

[`CommonTableExpressionNameNode`](../interfaces/CommonTableExpressionNameNode.md)

#### Returns

`void`

***

### visitCreateIndex()

> `abstract` `protected` **visitCreateIndex**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:255](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L255)

#### Parameters

##### node

[`CreateIndexNode`](../interfaces/CreateIndexNode.md)

#### Returns

`void`

***

### visitCreateSchema()

> `abstract` `protected` **visitCreateSchema**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:272](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L272)

#### Parameters

##### node

[`CreateSchemaNode`](../interfaces/CreateSchemaNode.md)

#### Returns

`void`

***

### visitCreateTable()

> `abstract` `protected` **visitCreateTable**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:241](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L241)

#### Parameters

##### node

[`CreateTableNode`](../interfaces/CreateTableNode.md)

#### Returns

`void`

***

### visitCreateType()

> `abstract` `protected` **visitCreateType**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:304](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L304)

#### Parameters

##### node

[`CreateTypeNode`](../interfaces/CreateTypeNode.md)

#### Returns

`void`

***

### visitCreateView()

> `abstract` `protected` **visitCreateView**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:294](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L294)

#### Parameters

##### node

[`CreateViewNode`](../interfaces/CreateViewNode.md)

#### Returns

`void`

***

### visitDataType()

> `abstract` `protected` **visitDataType**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:285](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L285)

#### Parameters

##### node

[`DataTypeNode`](../interfaces/DataTypeNode.md)

#### Returns

`void`

***

### visitDefaultInsertValue()

> `abstract` `protected` **visitDefaultInsertValue**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:307](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L307)

#### Parameters

##### node

[`DefaultInsertValueNode`](../interfaces/DefaultInsertValueNode.md)

#### Returns

`void`

***

### visitDefaultValue()

> `abstract` `protected` **visitDefaultValue**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:300](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L300)

#### Parameters

##### node

[`DefaultValueNode`](../interfaces/DefaultValueNode.md)

#### Returns

`void`

***

### visitDeleteQuery()

> `abstract` `protected` **visitDeleteQuery**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:239](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L239)

#### Parameters

##### node

[`DeleteQueryNode`](../interfaces/DeleteQueryNode.md)

#### Returns

`void`

***

### visitDropColumn()

> `abstract` `protected` **visitDropColumn**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:275](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L275)

#### Parameters

##### node

[`DropColumnNode`](../interfaces/DropColumnNode.md)

#### Returns

`void`

***

### visitDropConstraint()

> `abstract` `protected` **visitDropConstraint**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:280](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L280)

#### Parameters

##### node

[`DropConstraintNode`](../interfaces/DropConstraintNode.md)

#### Returns

`void`

***

### visitDropIndex()

> `abstract` `protected` **visitDropIndex**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:256](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L256)

#### Parameters

##### node

[`DropIndexNode`](../interfaces/DropIndexNode.md)

#### Returns

`void`

***

### visitDropSchema()

> `abstract` `protected` **visitDropSchema**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:273](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L273)

#### Parameters

##### node

[`DropSchemaNode`](../interfaces/DropSchemaNode.md)

#### Returns

`void`

***

### visitDropTable()

> `abstract` `protected` **visitDropTable**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:244](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L244)

#### Parameters

##### node

[`DropTableNode`](../interfaces/DropTableNode.md)

#### Returns

`void`

***

### visitDropType()

> `abstract` `protected` **visitDropType**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:305](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L305)

#### Parameters

##### node

[`DropTypeNode`](../interfaces/DropTypeNode.md)

#### Returns

`void`

***

### visitDropView()

> `abstract` `protected` **visitDropView**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:298](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L298)

#### Parameters

##### node

[`DropViewNode`](../interfaces/DropViewNode.md)

#### Returns

`void`

***

### visitExplain()

> `abstract` `protected` **visitExplain**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:306](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L306)

#### Parameters

##### node

[`ExplainNode`](../interfaces/ExplainNode.md)

#### Returns

`void`

***

### visitFetch()

> `abstract` `protected` **visitFetch**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:328](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L328)

#### Parameters

##### node

[`FetchNode`](../interfaces/FetchNode.md)

#### Returns

`void`

***

### visitForeignKeyConstraint()

> `abstract` `protected` **visitForeignKeyConstraint**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:282](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L282)

#### Parameters

##### node

[`ForeignKeyConstraintNode`](../interfaces/ForeignKeyConstraintNode.md)

#### Returns

`void`

***

### visitFrom()

> `abstract` `protected` **visitFrom**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:229](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L229)

#### Parameters

##### node

[`FromNode`](../interfaces/FromNode.md)

#### Returns

`void`

***

### visitFunction()

> `abstract` `protected` **visitFunction**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:316](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L316)

#### Parameters

##### node

[`FunctionNode`](../interfaces/FunctionNode.md)

#### Returns

`void`

***

### visitGenerated()

> `abstract` `protected` **visitGenerated**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:299](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L299)

#### Parameters

##### node

[`GeneratedNode`](../interfaces/GeneratedNode.md)

#### Returns

`void`

***

### visitGroupBy()

> `abstract` `protected` **visitGroupBy**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:247](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L247)

#### Parameters

##### node

[`GroupByNode`](../interfaces/GroupByNode.md)

#### Returns

`void`

***

### visitGroupByItem()

> `abstract` `protected` **visitGroupByItem**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:248](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L248)

#### Parameters

##### node

[`GroupByItemNode`](../interfaces/GroupByItemNode.md)

#### Returns

`void`

***

### visitHaving()

> `abstract` `protected` **visitHaving**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:271](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L271)

#### Parameters

##### node

[`HavingNode`](../interfaces/HavingNode.md)

#### Returns

`void`

***

### visitIdentifier()

> `abstract` `protected` **visitIdentifier**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:287](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L287)

#### Parameters

##### node

[`IdentifierNode`](../interfaces/IdentifierNode.md)

#### Returns

`void`

***

### visitInsertQuery()

> `abstract` `protected` **visitInsertQuery**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:238](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L238)

#### Parameters

##### node

[`InsertQueryNode`](../interfaces/InsertQueryNode.md)

#### Returns

`void`

***

### visitJoin()

> `abstract` `protected` **visitJoin**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:235](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L235)

#### Parameters

##### node

[`JoinNode`](../interfaces/JoinNode.md)

#### Returns

`void`

***

### visitJSONOperatorChain()

> `abstract` `protected` **visitJSONOperatorChain**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:322](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L322)

#### Parameters

##### node

[`JSONOperatorChainNode`](../interfaces/JSONOperatorChainNode.md)

#### Returns

`void`

***

### visitJSONPath()

> `abstract` `protected` **visitJSONPath**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:320](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L320)

#### Parameters

##### node

[`JSONPathNode`](../interfaces/JSONPathNode.md)

#### Returns

`void`

***

### visitJSONPathLeg()

> `abstract` `protected` **visitJSONPathLeg**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:321](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L321)

#### Parameters

##### node

[`JSONPathLegNode`](../interfaces/JSONPathLegNode.md)

#### Returns

`void`

***

### visitJSONReference()

> `abstract` `protected` **visitJSONReference**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:319](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L319)

#### Parameters

##### node

[`JSONReferenceNode`](../interfaces/JSONReferenceNode.md)

#### Returns

`void`

***

### visitLimit()

> `abstract` `protected` **visitLimit**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:251](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L251)

#### Parameters

##### node

[`LimitNode`](../interfaces/LimitNode.md)

#### Returns

`void`

***

### visitList()

> `abstract` `protected` **visitList**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:257](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L257)

#### Parameters

##### node

[`ListNode`](../interfaces/ListNode.md)

#### Returns

`void`

***

### visitMatched()

> `abstract` `protected` **visitMatched**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:325](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L325)

#### Parameters

##### node

[`MatchedNode`](../interfaces/MatchedNode.md)

#### Returns

`void`

***

### visitMergeQuery()

> `abstract` `protected` **visitMergeQuery**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:324](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L324)

#### Parameters

##### node

[`MergeQueryNode`](../interfaces/MergeQueryNode.md)

#### Returns

`void`

***

### visitModifyColumn()

> `abstract` `protected` **visitModifyColumn**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:278](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L278)

#### Parameters

##### node

[`ModifyColumnNode`](../interfaces/ModifyColumnNode.md)

#### Returns

`void`

***

### visitNode()

> `protected` `readonly` **visitNode**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:218](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L218)

#### Parameters

##### node

[`OperationNode`](../interfaces/OperationNode.md)

#### Returns

`void`

***

### visitOffset()

> `abstract` `protected` **visitOffset**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:252](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L252)

#### Parameters

##### node

[`OffsetNode`](../interfaces/OffsetNode.md)

#### Returns

`void`

***

### visitOn()

> `abstract` `protected` **visitOn**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:301](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L301)

#### Parameters

##### node

[`OnNode`](../interfaces/OnNode.md)

#### Returns

`void`

***

### visitOnConflict()

> `abstract` `protected` **visitOnConflict**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:253](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L253)

#### Parameters

##### node

[`OnConflictNode`](../interfaces/OnConflictNode.md)

#### Returns

`void`

***

### visitOnDuplicateKey()

> `abstract` `protected` **visitOnDuplicateKey**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:254](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L254)

#### Parameters

##### node

[`OnDuplicateKeyNode`](../interfaces/OnDuplicateKeyNode.md)

#### Returns

`void`

***

### visitOperator()

> `abstract` `protected` **visitOperator**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:293](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L293)

#### Parameters

##### node

[`OperatorNode`](../interfaces/OperatorNode.md)

#### Returns

`void`

***

### visitOr()

> `abstract` `protected` **visitOr**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:232](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L232)

#### Parameters

##### node

[`OrNode`](../interfaces/OrNode.md)

#### Returns

`void`

***

### visitOrAction()

> `abstract` `protected` **visitOrAction**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:331](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L331)

#### Parameters

##### node

[`OrActionNode`](../interfaces/OrActionNode.md)

#### Returns

`void`

***

### visitOrderBy()

> `abstract` `protected` **visitOrderBy**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:245](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L245)

#### Parameters

##### node

[`OrderByNode`](../interfaces/OrderByNode.md)

#### Returns

`void`

***

### visitOrderByItem()

> `abstract` `protected` **visitOrderByItem**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:246](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L246)

#### Parameters

##### node

[`OrderByItemNode`](../interfaces/OrderByItemNode.md)

#### Returns

`void`

***

### visitOutput()

> `abstract` `protected` **visitOutput**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:330](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L330)

#### Parameters

##### node

[`OutputNode`](../interfaces/OutputNode.md)

#### Returns

`void`

***

### visitOver()

> `abstract` `protected` **visitOver**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:309](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L309)

#### Parameters

##### node

[`OverNode`](../interfaces/OverNode.md)

#### Returns

`void`

***

### visitParens()

> `abstract` `protected` **visitParens**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:234](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L234)

#### Parameters

##### node

[`ParensNode`](../interfaces/ParensNode.md)

#### Returns

`void`

***

### visitPartitionBy()

> `abstract` `protected` **visitPartitionBy**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:310](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L310)

#### Parameters

##### node

[`PartitionByNode`](../interfaces/PartitionByNode.md)

#### Returns

`void`

***

### visitPartitionByItem()

> `abstract` `protected` **visitPartitionByItem**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:311](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L311)

#### Parameters

##### node

[`PartitionByItemNode`](../interfaces/PartitionByItemNode.md)

#### Returns

`void`

***

### visitPrimaryKeyConstraint()

> `abstract` `protected` **visitPrimaryKeyConstraint**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:258](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L258)

#### Parameters

##### node

[`PrimaryKeyConstraintNode`](../interfaces/PrimaryKeyConstraintNode.md)

#### Returns

`void`

***

### visitPrimitiveValueList()

> `abstract` `protected` **visitPrimitiveValueList**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:292](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L292)

#### Parameters

##### node

[`PrimitiveValueListNode`](../interfaces/PrimitiveValueListNode.md)

#### Returns

`void`

***

### visitRaw()

> `abstract` `protected` **visitRaw**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:236](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L236)

#### Parameters

##### node

[`RawNode`](../interfaces/RawNode.md)

#### Returns

`void`

***

### visitReference()

> `abstract` `protected` **visitReference**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:230](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L230)

#### Parameters

##### node

[`ReferenceNode`](../interfaces/ReferenceNode.md)

#### Returns

`void`

***

### visitReferences()

> `abstract` `protected` **visitReferences**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:262](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L262)

#### Parameters

##### node

[`ReferencesNode`](../interfaces/ReferencesNode.md)

#### Returns

`void`

***

### visitRefreshMaterializedView()

> `abstract` `protected` **visitRefreshMaterializedView**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:295](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L295)

#### Parameters

##### node

[`RefreshMaterializedViewNode`](../interfaces/RefreshMaterializedViewNode.md)

#### Returns

`void`

***

### visitRenameColumn()

> `abstract` `protected` **visitRenameColumn**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:276](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L276)

#### Parameters

##### node

[`RenameColumnNode`](../interfaces/RenameColumnNode.md)

#### Returns

`void`

***

### visitRenameConstraint()

> `abstract` `protected` **visitRenameConstraint**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:281](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L281)

#### Parameters

##### node

[`RenameConstraintNode`](../interfaces/RenameConstraintNode.md)

#### Returns

`void`

***

### visitRenameValue()

> `abstract` `protected` **visitRenameValue**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:335](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L335)

#### Parameters

##### node

[`RenameValueNode`](../interfaces/RenameValueNode.md)

#### Returns

`void`

***

### visitReturning()

> `abstract` `protected` **visitReturning**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:240](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L240)

#### Parameters

##### node

[`ReturningNode`](../interfaces/ReturningNode.md)

#### Returns

`void`

***

### visitSchemableIdentifier()

> `abstract` `protected` **visitSchemableIdentifier**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:288](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L288)

#### Parameters

##### node

[`SchemableIdentifierNode`](../interfaces/SchemableIdentifierNode.md)

#### Returns

`void`

***

### visitSelectAll()

> `abstract` `protected` **visitSelectAll**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:286](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L286)

#### Parameters

##### node

[`SelectAllNode`](../interfaces/SelectAllNode.md)

#### Returns

`void`

***

### visitSelection()

> `abstract` `protected` **visitSelection**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:225](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L225)

#### Parameters

##### node

[`SelectionNode`](../interfaces/SelectionNode.md)

#### Returns

`void`

***

### visitSelectModifier()

> `abstract` `protected` **visitSelectModifier**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:303](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L303)

#### Parameters

##### node

[`SelectModifierNode`](../interfaces/SelectModifierNode.md)

#### Returns

`void`

***

### visitSelectQuery()

> `abstract` `protected` **visitSelectQuery**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:224](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L224)

#### Parameters

##### node

[`SelectQueryNode`](../interfaces/SelectQueryNode.md)

#### Returns

`void`

***

### visitSetOperation()

> `abstract` `protected` **visitSetOperation**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:312](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L312)

#### Parameters

##### node

[`SetOperationNode`](../interfaces/SetOperationNode.md)

#### Returns

`void`

***

### visitTable()

> `abstract` `protected` **visitTable**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:228](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L228)

#### Parameters

##### node

[`TableNode`](../interfaces/TableNode.md)

#### Returns

`void`

***

### visitTop()

> `abstract` `protected` **visitTop**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:329](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L329)

#### Parameters

##### node

[`TopNode`](../interfaces/TopNode.md)

#### Returns

`void`

***

### visitTuple()

> `abstract` `protected` **visitTuple**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:323](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L323)

#### Parameters

##### node

[`TupleNode`](../interfaces/TupleNode.md)

#### Returns

`void`

***

### visitUnaryOperation()

> `abstract` `protected` **visitUnaryOperation**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:314](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L314)

#### Parameters

##### node

[`UnaryOperationNode`](../interfaces/UnaryOperationNode.md)

#### Returns

`void`

***

### visitUniqueConstraint()

> `abstract` `protected` **visitUniqueConstraint**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:261](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L261)

#### Parameters

##### node

[`UniqueConstraintNode`](../interfaces/UniqueConstraintNode.md)

#### Returns

`void`

***

### visitUpdateQuery()

> `abstract` `protected` **visitUpdateQuery**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:249](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L249)

#### Parameters

##### node

[`UpdateQueryNode`](../interfaces/UpdateQueryNode.md)

#### Returns

`void`

***

### visitUsing()

> `abstract` `protected` **visitUsing**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:315](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L315)

#### Parameters

##### node

[`UsingNode`](../interfaces/UsingNode.md)

#### Returns

`void`

***

### visitValue()

> `abstract` `protected` **visitValue**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:291](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L291)

#### Parameters

##### node

[`ValueNode`](../interfaces/ValueNode.md)

#### Returns

`void`

***

### visitValueList()

> `abstract` `protected` **visitValueList**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:233](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L233)

#### Parameters

##### node

[`ValueListNode`](../interfaces/ValueListNode.md)

#### Returns

`void`

***

### visitValues()

> `abstract` `protected` **visitValues**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:302](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L302)

#### Parameters

##### node

[`ValuesNode`](../interfaces/ValuesNode.md)

#### Returns

`void`

***

### visitWhen()

> `abstract` `protected` **visitWhen**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:318](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L318)

#### Parameters

##### node

[`WhenNode`](../interfaces/WhenNode.md)

#### Returns

`void`

***

### visitWhere()

> `abstract` `protected` **visitWhere**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:237](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L237)

#### Parameters

##### node

[`WhereNode`](../interfaces/WhereNode.md)

#### Returns

`void`

***

### visitWith()

> `abstract` `protected` **visitWith**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:264](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L264)

#### Parameters

##### node

[`WithNode`](../interfaces/WithNode.md)

#### Returns

`void`
