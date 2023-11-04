import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePerformedWorkTableAddRelationToSparePartTable1699112573152
  implements MigrationInterface
{
  name = 'UpdatePerformedWorkTableAddRelationToSparePartTable1699112573152';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "performed_work_spare_parts_spare_part" ("performedWorkId" uuid NOT NULL, "sparePartId" uuid NOT NULL, CONSTRAINT "PK_4dae89e92f791b6f088a822b7e1" PRIMARY KEY ("performedWorkId", "sparePartId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f675eeb89f4553b16258f65a49" ON "performed_work_spare_parts_spare_part" ("performedWorkId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_660afd59270ae4a2b60c34aea8" ON "performed_work_spare_parts_spare_part" ("sparePartId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "performed_work_spare_parts_spare_part" ADD CONSTRAINT "FK_f675eeb89f4553b16258f65a491" FOREIGN KEY ("performedWorkId") REFERENCES "performed_work"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "performed_work_spare_parts_spare_part" ADD CONSTRAINT "FK_660afd59270ae4a2b60c34aea8f" FOREIGN KEY ("sparePartId") REFERENCES "spare_part"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "performed_work_spare_parts_spare_part" DROP CONSTRAINT "FK_660afd59270ae4a2b60c34aea8f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "performed_work_spare_parts_spare_part" DROP CONSTRAINT "FK_f675eeb89f4553b16258f65a491"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_660afd59270ae4a2b60c34aea8"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f675eeb89f4553b16258f65a49"`,
    );
    await queryRunner.query(
      `DROP TABLE "performed_work_spare_parts_spare_part"`,
    );
  }
}
