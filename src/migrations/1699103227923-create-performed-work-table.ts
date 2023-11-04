import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePerformedWorkTable1699103227923
  implements MigrationInterface
{
  name = 'CreatePerformedWorkTable1699103227923';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."performed_work_currency_enum" AS ENUM('UAH', 'USD')`,
    );
    await queryRunner.query(
      `CREATE TABLE "performed_work" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "description" character varying, "price" integer NOT NULL, "currency" "public"."performed_work_currency_enum" NOT NULL DEFAULT 'UAH', "vehicleId" uuid, CONSTRAINT "PK_6e1a150a483456af0d56d34ddfb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "performed_work" ADD CONSTRAINT "FK_6f58b9fd1fbef1b0d108bface16" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "performed_work" DROP CONSTRAINT "FK_6f58b9fd1fbef1b0d108bface16"`,
    );
    await queryRunner.query(`DROP TABLE "performed_work"`);
    await queryRunner.query(
      `DROP TYPE "public"."performed_work_currency_enum"`,
    );
  }
}
