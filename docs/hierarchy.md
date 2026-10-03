[**kysely**](index.md)

***

# kysely

## Hierarchy Summary

### AbortableOperationOptions

- [AbortableOperationOptions](interfaces/AbortableOperationOptions.md)
  - [PluginTransformResultArgs](interfaces/PluginTransformResultArgs.md)
  - [StreamOptions](interfaces/StreamOptions.md)
  - [AbortableQueryOptions](interfaces/AbortableQueryOptions.md)
    - [ExecuteTakeFirstOrThrowOptions](interfaces/ExecuteTakeFirstOrThrowOptions.md)

***

### AlterTableBuilderProps

- [AlterTableBuilderProps](interfaces/AlterTableBuilderProps.md)
  - [AlterTableColumnAlteringBuilderProps](interfaces/AlterTableColumnAlteringBuilderProps.md)

***

### ColumnAlteringInterface

- [ColumnAlteringInterface](interfaces/ColumnAlteringInterface.md)
  - [AlterTableBuilder](classes/AlterTableBuilder.md)
  - [AlterTableColumnAlteringBuilder](classes/AlterTableColumnAlteringBuilder.md)

***

### Compilable

- [Compilable](interfaces/Compilable.md)
  - [AlterTableAddForeignKeyConstraintBuilder](classes/AlterTableAddForeignKeyConstraintBuilder.md)
  - [AlterTableAddIndexBuilder](classes/AlterTableAddIndexBuilder.md)

  - [AlterTableDropConstraintBuilder](classes/AlterTableDropConstraintBuilder.md)
  - [AlterTableExecutor](classes/AlterTableExecutor.md)
  - [CreateIndexBuilder](classes/CreateIndexBuilder.md)
  - [CreateSchemaBuilder](classes/CreateSchemaBuilder.md)
  - [CreateTableBuilder](classes/CreateTableBuilder.md)
  - [CreateTypeBuilder](classes/CreateTypeBuilder.md)
  - [CreateViewBuilder](classes/CreateViewBuilder.md)
  - [DeleteQueryBuilder](classes/DeleteQueryBuilder.md)
  - [DropIndexBuilder](classes/DropIndexBuilder.md)
  - [DropSchemaBuilder](classes/DropSchemaBuilder.md)
  - [DropTableBuilder](classes/DropTableBuilder.md)
  - [DropTypeBuilder](classes/DropTypeBuilder.md)
  - [DropViewBuilder](classes/DropViewBuilder.md)
  - [InsertQueryBuilder](classes/InsertQueryBuilder.md)
  - [QueryFinalizer](classes/QueryFinalizer.md)
    - [AlterTypeAddValueBuilder](classes/AlterTypeAddValueBuilder.md)
  - [RefreshMaterializedViewBuilder](classes/RefreshMaterializedViewBuilder.md)
  - [UpdateQueryBuilder](classes/UpdateQueryBuilder.md)
  - [WheneableMergeQueryBuilder](classes/WheneableMergeQueryBuilder.md)
  - [SelectQueryBuilder](interfaces/SelectQueryBuilder.md)

***

### ConnectionProvider

- [ConnectionProvider](interfaces/ConnectionProvider.md)
  - [DefaultConnectionProvider](classes/DefaultConnectionProvider.md)
  - [SingleConnectionProvider](classes/SingleConnectionProvider.md)
  - [QueryExecutor](interfaces/QueryExecutor.md)
    - [QueryExecutorBase](classes/QueryExecutorBase.md)
      - [DefaultQueryExecutor](classes/DefaultQueryExecutor.md)
      - [NoopQueryExecutor](classes/NoopQueryExecutor.md)

***

### DatabaseConnection

- [DatabaseConnection](interfaces/DatabaseConnection.md)
  - [MssqlConnection](classes/MssqlConnection.md)
  - [MysqlConnection](classes/MysqlConnection.md)
  - [PGliteConnection](classes/PGliteConnection.md)
  - [PostgresConnection](classes/PostgresConnection.md)

***

### DatabaseIntrospector

- [DatabaseIntrospector](interfaces/DatabaseIntrospector.md)
  - [MssqlIntrospector](classes/MssqlIntrospector.md)
  - [MysqlIntrospector](classes/MysqlIntrospector.md)
  - [PostgresIntrospector](classes/PostgresIntrospector.md)
  - [SqliteIntrospector](classes/SqliteIntrospector.md)

***

### Dialect

- [Dialect](interfaces/Dialect.md)
  - [MssqlDialect](classes/MssqlDialect.md)
  - [MysqlDialect](classes/MysqlDialect.md)
  - [PGliteDialect](classes/PGliteDialect.md)
  - [PostgresDialect](classes/PostgresDialect.md)
  - [SqliteDialect](classes/SqliteDialect.md)

***

### DialectAdapter

- [DialectAdapter](interfaces/DialectAdapter.md)
  - [DialectAdapterBase](classes/DialectAdapterBase.md)
    - [SqliteAdapter](classes/SqliteAdapter.md)
    - [MysqlAdapter](classes/MysqlAdapter.md)
    - [PostgresAdapter](classes/PostgresAdapter.md)
      - [PGliteAdapter](classes/PGliteAdapter.md)
    - [MssqlAdapter](classes/MssqlAdapter.md)

***

### Driver

- [Driver](interfaces/Driver.md)
  - [DummyDriver](classes/DummyDriver.md)
  - [MssqlDriver](classes/MssqlDriver.md)
  - [MysqlDriver](classes/MysqlDriver.md)
  - [PGliteDriver](classes/PGliteDriver.md)
  - [PostgresDriver](classes/PostgresDriver.md)
  - [SqliteDriver](classes/SqliteDriver.md)

***

### Endable

- [Endable](interfaces/Endable.md)
  - [CaseEndBuilder](classes/CaseEndBuilder.md)
  - [CaseWhenBuilder](classes/CaseWhenBuilder.md)

***

### Executable

- [Executable](interfaces/Executable.md)

***

### Explainable

- [Explainable](interfaces/Explainable.md)

***

### ForeignKeyConstraintBuilderInterface

- [ForeignKeyConstraintBuilderInterface](interfaces/ForeignKeyConstraintBuilderInterface.md)

  - [ForeignKeyConstraintBuilder](classes/ForeignKeyConstraintBuilder.md)

***

### HavingInterface

- [HavingInterface](interfaces/HavingInterface.md)

***

### JSONPathBuilder

- [JSONPathBuilder](classes/JSONPathBuilder.md)
  - [TraversedJSONPathBuilder](classes/TraversedJSONPathBuilder.md)

***

### KyselyPlugin

- [KyselyPlugin](interfaces/KyselyPlugin.md)
  - [CamelCasePlugin](classes/CamelCasePlugin.md)
  - [DeduplicateJoinsPlugin](classes/DeduplicateJoinsPlugin.md)
  - [HandleEmptyInListsPlugin](classes/HandleEmptyInListsPlugin.md)
  - [ParseJSONResultsPlugin](classes/ParseJSONResultsPlugin.md)
  - [SafeNullComparisonPlugin](classes/SafeNullComparisonPlugin.md)
  - [WithSchemaPlugin](classes/WithSchemaPlugin.md)

***

### KyselyProps

- [KyselyProps](interfaces/KyselyProps.md)
  - [ConnectionBuilderProps](interfaces/ConnectionBuilderProps.md)
  - [TransactionBuilderProps](interfaces/TransactionBuilderProps.md)
  - [ControlledTransactionProps](interfaces/ControlledTransactionProps.md)

***

### MigrateOptions

- [MigrateOptions](interfaces/migration.MigrateOptions.md)
  - [MigratorProps](interfaces/migration.MigratorProps.md)

***

### Migration

- [Migration](interfaces/migration.Migration.md)
  - [NamedMigration](interfaces/migration.NamedMigration.md)

***

### MigrationProvider

- [MigrationProvider](interfaces/migration.MigrationProvider.md)
  - [FileMigrationProvider](classes/migration.FileMigrationProvider.md)

***

### MysqlConnection

- [MysqlConnection](interfaces/MysqlConnection.md)
  - [MysqlPoolConnection](interfaces/MysqlPoolConnection.md)

***

### OperationNode

- [OperationNode](interfaces/OperationNode.md)
  - [AddColumnNode](interfaces/AddColumnNode.md)
  - [AddConstraintNode](interfaces/AddConstraintNode.md)
  - [AddIndexNode](interfaces/AddIndexNode.md)
  - [AggregateFunctionNode](interfaces/AggregateFunctionNode.md)
  - [AliasNode](interfaces/AliasNode.md)
  - [AlterColumnNode](interfaces/AlterColumnNode.md)
  - [AlterTableNode](interfaces/AlterTableNode.md)
  - [AndNode](interfaces/AndNode.md)
  - [BinaryOperationNode](interfaces/BinaryOperationNode.md)
  - [CaseNode](interfaces/CaseNode.md)
  - [CastNode](interfaces/CastNode.md)
  - [CheckConstraintNode](interfaces/CheckConstraintNode.md)
  - [CollateNode](interfaces/CollateNode.md)
  - [ColumnDefinitionNode](interfaces/ColumnDefinitionNode.md)
  - [ColumnNode](interfaces/ColumnNode.md)
  - [ColumnUpdateNode](interfaces/ColumnUpdateNode.md)
  - [CommonTableExpressionNameNode](interfaces/CommonTableExpressionNameNode.md)
  - [CommonTableExpressionNode](interfaces/CommonTableExpressionNode.md)
  - [CreateIndexNode](interfaces/CreateIndexNode.md)
  - [CreateSchemaNode](interfaces/CreateSchemaNode.md)
  - [CreateTableNode](interfaces/CreateTableNode.md)
  - [CreateTypeNode](interfaces/CreateTypeNode.md)
  - [CreateViewNode](interfaces/CreateViewNode.md)
  - [RefreshMaterializedViewNode](interfaces/RefreshMaterializedViewNode.md)
  - [DataTypeNode](interfaces/DataTypeNode.md)
  - [DefaultInsertValueNode](interfaces/DefaultInsertValueNode.md)
  - [DefaultValueNode](interfaces/DefaultValueNode.md)
  - [DeleteQueryNode](interfaces/DeleteQueryNode.md)
  - [DropColumnNode](interfaces/DropColumnNode.md)
  - [DropConstraintNode](interfaces/DropConstraintNode.md)
  - [DropIndexNode](interfaces/DropIndexNode.md)
  - [DropSchemaNode](interfaces/DropSchemaNode.md)
  - [DropTableNode](interfaces/DropTableNode.md)
  - [DropTypeNode](interfaces/DropTypeNode.md)
  - [DropViewNode](interfaces/DropViewNode.md)
  - [ExplainNode](interfaces/ExplainNode.md)
  - [FetchNode](interfaces/FetchNode.md)
  - [ForeignKeyConstraintNode](interfaces/ForeignKeyConstraintNode.md)
  - [FromNode](interfaces/FromNode.md)
  - [FunctionNode](interfaces/FunctionNode.md)
  - [GeneratedNode](interfaces/GeneratedNode.md)
  - [GroupByItemNode](interfaces/GroupByItemNode.md)
  - [GroupByNode](interfaces/GroupByNode.md)
  - [HavingNode](interfaces/HavingNode.md)
  - [IdentifierNode](interfaces/IdentifierNode.md)
  - [InsertQueryNode](interfaces/InsertQueryNode.md)
  - [JoinNode](interfaces/JoinNode.md)
  - [JSONOperatorChainNode](interfaces/JSONOperatorChainNode.md)
  - [JSONPathLegNode](interfaces/JSONPathLegNode.md)
  - [JSONPathNode](interfaces/JSONPathNode.md)
  - [JSONReferenceNode](interfaces/JSONReferenceNode.md)
  - [LimitNode](interfaces/LimitNode.md)
  - [ListNode](interfaces/ListNode.md)
  - [MatchedNode](interfaces/MatchedNode.md)
  - [MergeQueryNode](interfaces/MergeQueryNode.md)
  - [ModifyColumnNode](interfaces/ModifyColumnNode.md)
  - [OffsetNode](interfaces/OffsetNode.md)
  - [OnConflictNode](interfaces/OnConflictNode.md)
  - [OnDuplicateKeyNode](interfaces/OnDuplicateKeyNode.md)
  - [OnNode](interfaces/OnNode.md)
  - [OperatorNode](interfaces/OperatorNode.md)
  - [OrActionNode](interfaces/OrActionNode.md)
  - [OrNode](interfaces/OrNode.md)
  - [OrderByItemNode](interfaces/OrderByItemNode.md)
  - [OrderByNode](interfaces/OrderByNode.md)
  - [OutputNode](interfaces/OutputNode.md)
  - [OverNode](interfaces/OverNode.md)
  - [ParensNode](interfaces/ParensNode.md)
  - [PartitionByItemNode](interfaces/PartitionByItemNode.md)
  - [PartitionByNode](interfaces/PartitionByNode.md)
  - [PrimaryKeyConstraintNode](interfaces/PrimaryKeyConstraintNode.md)
  - [PrimitiveValueListNode](interfaces/PrimitiveValueListNode.md)
  - [RawNode](interfaces/RawNode.md)
  - [ReferenceNode](interfaces/ReferenceNode.md)
  - [ReferencesNode](interfaces/ReferencesNode.md)
  - [RenameColumnNode](interfaces/RenameColumnNode.md)
  - [RenameConstraintNode](interfaces/RenameConstraintNode.md)
  - [ReturningNode](interfaces/ReturningNode.md)
  - [SchemableIdentifierNode](interfaces/SchemableIdentifierNode.md)
  - [SelectAllNode](interfaces/SelectAllNode.md)
  - [SelectModifierNode](interfaces/SelectModifierNode.md)
  - [SelectQueryNode](interfaces/SelectQueryNode.md)
  - [SelectionNode](interfaces/SelectionNode.md)
  - [SetOperationNode](interfaces/SetOperationNode.md)
  - [TableNode](interfaces/TableNode.md)
  - [TopNode](interfaces/TopNode.md)
  - [TupleNode](interfaces/TupleNode.md)
  - [UnaryOperationNode](interfaces/UnaryOperationNode.md)
  - [UniqueConstraintNode](interfaces/UniqueConstraintNode.md)
  - [UpdateQueryNode](interfaces/UpdateQueryNode.md)
  - [UsingNode](interfaces/UsingNode.md)
  - [ValueListNode](interfaces/ValueListNode.md)
  - [ValueNode](interfaces/ValueNode.md)
  - [ValuesNode](interfaces/ValuesNode.md)
  - [WhenNode](interfaces/WhenNode.md)
  - [WhereNode](interfaces/WhereNode.md)
  - [WithNode](interfaces/WithNode.md)
  - [AlterTypeNode](interfaces/AlterTypeNode.md)
  - [AddValueNode](interfaces/AddValueNode.md)
  - [RenameValueNode](interfaces/RenameValueNode.md)

***

### OperationNodeSource

- [OperationNodeSource](interfaces/OperationNodeSource.md)
  - [AliasedDynamicTableBuilder](classes/AliasedDynamicTableBuilder.md)

  - [AlteredColumnBuilder](classes/AlteredColumnBuilder.md)
  - [CTEBuilder](classes/readonly.CTEBuilder.md)
  - [CheckConstraintBuilder](classes/CheckConstraintBuilder.md)
  - [ColumnDefinitionBuilder](classes/ColumnDefinitionBuilder.md)

  - [CreateTableAddIndexBuilder](classes/CreateTableAddIndexBuilder.md)

  - [DropColumnBuilder](classes/DropColumnBuilder.md)

  - [DynamicReferenceBuilder](classes/DynamicReferenceBuilder.md)

  - [JoinBuilder](classes/JoinBuilder.md)
  - [OnConflictDoNothingBuilder](classes/OnConflictDoNothingBuilder.md)
  - [OnConflictUpdateBuilder](classes/OnConflictUpdateBuilder.md)
  - [OrderByItemBuilder](classes/OrderByItemBuilder.md)
  - [OverBuilder](classes/OverBuilder.md)
  - [PrimaryKeyConstraintBuilder](classes/PrimaryKeyConstraintBuilder.md)

  - [UniqueConstraintNodeBuilder](classes/UniqueConstraintNodeBuilder.md)

  - [Expression](interfaces/Expression.md)
    - [AliasableExpression](interfaces/AliasableExpression.md)
      - [AggregateFunctionBuilder](classes/AggregateFunctionBuilder.md)
      - [AndWrapper](classes/AndWrapper.md)
      - [ExpressionWrapper](classes/ExpressionWrapper.md)
      - [OrWrapper](classes/OrWrapper.md)

      - [RawBuilder](interfaces/RawBuilder.md)
      - [SelectQueryBuilderExpression](interfaces/SelectQueryBuilderExpression.md)

  - [AliasedExpression](interfaces/AliasedExpression.md)
    - [AliasedAggregateFunctionBuilder](classes/AliasedAggregateFunctionBuilder.md)
    - [AliasedExpressionWrapper](classes/AliasedExpressionWrapper.md)
    - [AliasedJSONPathBuilder](classes/AliasedJSONPathBuilder.md)
    - [AliasedSelectQueryBuilder](interfaces/AliasedSelectQueryBuilder.md)
    - [AliasedRawBuilder](interfaces/AliasedRawBuilder.md)

***

### OperationNodeTransformer

- [OperationNodeTransformer](classes/OperationNodeTransformer.md)
  - [SnakeCaseTransformer](classes/SnakeCaseTransformer.md)
  - [DeduplicateJoinsTransformer](classes/DeduplicateJoinsTransformer.md)
  - [WithSchemaTransformer](classes/WithSchemaTransformer.md)
  - [HandleEmptyInListsTransformer](classes/HandleEmptyInListsTransformer.md)
  - [SafeNullComparisonTransformer](classes/SafeNullComparisonTransformer.md)

***

### OperationNodeVisitor

- [OperationNodeVisitor](classes/OperationNodeVisitor.md)
  - [DefaultQueryCompiler](classes/DefaultQueryCompiler.md)
    - [SqliteQueryCompiler](classes/SqliteQueryCompiler.md)
    - [MysqlQueryCompiler](classes/MysqlQueryCompiler.md)
    - [PostgresQueryCompiler](classes/PostgresQueryCompiler.md)
    - [MssqlQueryCompiler](classes/MssqlQueryCompiler.md)

***

### OrderByInterface

- [OrderByInterface](interfaces/OrderByInterface.md)

***

### OutputInterface

- [OutputInterface](interfaces/OutputInterface.md)

  - [MergeQueryBuilder](classes/MergeQueryBuilder.md)

***

### QueryCompiler

- [QueryCompiler](interfaces/QueryCompiler.md)

***

### QueryCreator

- [QueryCreator](classes/QueryCreator.md)
  - [Kysely](classes/Kysely.md)
    - [Transaction](classes/Transaction.md)
      - [ControlledTransaction](classes/ControlledTransaction.md)

***

### ReadonlyQueryCreator

- [ReadonlyQueryCreator](interfaces/readonly.ReadonlyQueryCreator.md)
  - [ReadonlyKysely](interfaces/readonly.ReadonlyKysely.md)

***

### ReadonlyTransaction

- [ReadonlyTransaction](interfaces/readonly.ReadonlyTransaction.md)
  - [ReadonlyControlledTransaction](interfaces/readonly.ReadonlyControlledTransaction.md)

***

### ReturningInterface

- [ReturningInterface](interfaces/ReturningInterface.md)

  - [MultiTableReturningInterface](interfaces/MultiTableReturningInterface.md)

***

### Streamable

- [Streamable](interfaces/Streamable.md)

***

### Whenable

- [Whenable](interfaces/Whenable.md)
  - [CaseBuilder](classes/CaseBuilder.md)

***

### WhereInterface

- [WhereInterface](interfaces/WhereInterface.md)

  - [OnConflictBuilder](classes/OnConflictBuilder.md)

***
