import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMovie1597943646730 implements MigrationInterface {

  private table = new Table({
    name: 'movie',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      {
        name: 'language_id',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'synopsis',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'genre',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'release_date',
        type: 'timestamptz',
        isNullable: true,
      },
      {
        name: 'subtitles',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'author',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'imdb_link',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'evaluation',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'active',
        type: 'bool',
        default: true,
      },
      {
        name: 'created_at',
        type: 'timestamptz',
        default: 'now()',
        isNullable: true,
      },
      {
        name: 'updated_at',
        type: 'timestamptz',
        default: 'now()',
        isNullable: true,
      },
    ]
  });

  private foreignKey = new TableForeignKey({
    columnNames: ['language_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'language',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
    await queryRunner.createForeignKey('movie', this.foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
    await queryRunner.dropForeignKey('movie', this.foreignKey);
  }

}
