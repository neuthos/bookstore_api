import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1711121399834 implements MigrationInterface {
  name = 'initialMigration1711121399834';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tag" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_d70de2c1e1a3b52adb904028ea2" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "book" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "writer" character varying NOT NULL, "cover_image" text NOT NULL, "point" numeric(20,2) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_0a5875eb5ec460206c670c3b62d" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "book_tags" ("book_id" uuid NOT NULL, "tag_id" uuid NOT NULL, CONSTRAINT "PK_671237e5d51f5f5c958337cd6a1" PRIMARY KEY ("book_id", "tag_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4d06db2d11048c09ca05de823d" ON "book_tags" ("book_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_fb495c7e106e0c1c6332797d68" ON "book_tags" ("tag_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "book_tags" ADD CONSTRAINT "FK_4d06db2d11048c09ca05de823d6" FOREIGN KEY ("book_id") REFERENCES "book"("uuid") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "book_tags" ADD CONSTRAINT "FK_fb495c7e106e0c1c6332797d684" FOREIGN KEY ("tag_id") REFERENCES "tag"("uuid") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "book_tags" DROP CONSTRAINT "FK_fb495c7e106e0c1c6332797d684"`,
    );
    await queryRunner.query(
      `ALTER TABLE "book_tags" DROP CONSTRAINT "FK_4d06db2d11048c09ca05de823d6"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_fb495c7e106e0c1c6332797d68"`);
    await queryRunner.query(`DROP INDEX "IDX_4d06db2d11048c09ca05de823d"`);
    await queryRunner.query(`DROP TABLE "book_tags"`);
    await queryRunner.query(`DROP TABLE "book"`);
    await queryRunner.query(`DROP TABLE "tag"`);
  }
}
