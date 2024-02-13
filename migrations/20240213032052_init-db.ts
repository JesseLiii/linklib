import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('content_items', (table) => {
    table.string('id', 25).primary()
    table.string('title', 280)
    table.timestamp('createdAt').defaultTo(knex.fn.now()).index()
    table.string('link', 280).notNullable().notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('content_items')
}
