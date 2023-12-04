import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1701459755340 implements MigrationInterface {
    name = 'Default1701459755340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "words" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(20) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "words"`);
    }

}
