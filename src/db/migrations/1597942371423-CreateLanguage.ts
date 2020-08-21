import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLanguage1597942371423 implements MigrationInterface {

    private table = new Table({
      name: 'language',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar',
          length: '255',
          isNullable: false,
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
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(this.table);
    }

}
