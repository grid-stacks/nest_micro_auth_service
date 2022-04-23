import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRemoveName1650702821401 implements MigrationInterface {
  name = 'UserRemoveName1650702821401';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "auth" DROP COLUMN "name"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "auth" ADD "name" character varying NOT NULL`,
    );
  }
}
