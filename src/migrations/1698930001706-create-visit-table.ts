import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateVisitTable1698930001706 implements MigrationInterface {
  name = 'CreateVisitTable1698930001706';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "visit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "date" TIMESTAMP WITH TIME ZONE NOT NULL, "time" character varying NOT NULL, "description" character varying, "phone" character varying, "clientId" uuid, CONSTRAINT "PK_c9919ef5a07627657c535d8eb88" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "visit" ADD CONSTRAINT "FK_029271fbce024d1971de68c2576" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "visit" DROP CONSTRAINT "FK_029271fbce024d1971de68c2576"`,
    );
    await queryRunner.query(`DROP TABLE "visit"`);
  }
}
