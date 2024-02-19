import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('content_items', (table) => {
    table.string('id', 25).primary()
    table.dateTime('createdAt').defaultTo(knex.fn.now())
    table.string('link', 280)
    // table
    //   .enum('type', [
    //     'INSTAGRAM',
    //     'TWITTER',
    //     'PINTEREST',
    //     'LINKEDIN',
    //     'TIKTOK',
    //     'YOUTUBE',
    //   ])
    //   .notNullable()
    table.string('type').notNullable()

    table.string('nativeId', 280)

    // Define indexes
    table.index('createdAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('content_items')
}
