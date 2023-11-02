import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateVehicleTable1698933569419 implements MigrationInterface {
  name = 'CreateVehicleTable1698933569419';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "brand" character varying NOT NULL, "model" character varying NOT NULL, "year" smallint NOT NULL, "additionalInfo" character varying, "licensePlate" character varying NOT NULL, "engine" character varying NOT NULL, "ownerId" uuid, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle" ADD CONSTRAINT "FK_61e825bc57f59788efc068a6134" FOREIGN KEY ("ownerId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "vehicle" DROP CONSTRAINT "FK_61e825bc57f59788efc068a6134"`,
    );
    await queryRunner.query(`DROP TABLE "vehicle"`);
  }
}
