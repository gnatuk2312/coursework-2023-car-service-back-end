import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSparePartTable1699111066874 implements MigrationInterface {
  name = 'CreateSparePartTable1699111066874';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."spare_part_currency_enum" AS ENUM('UAH', 'USD')`,
    );
    await queryRunner.query(
      `CREATE TABLE "spare_part" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "brand" character varying NOT NULL, "price" integer NOT NULL, "currency" "public"."spare_part_currency_enum" NOT NULL DEFAULT 'UAH', CONSTRAINT "PK_10e3c1ce9b357df381cc81d1654" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "spare_part"`);
    await queryRunner.query(`DROP TYPE "public"."spare_part_currency_enum"`);
  }
}
