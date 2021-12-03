import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Notes extends BaseSchema {
  protected tableName = 'notes'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('title').notNullable()
      table.text('body').notNullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('title')
      table.dropColumn('body')
    })
  }
}
