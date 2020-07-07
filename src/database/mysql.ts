import { createConnection, EntitySchema, getConnectionManager } from 'typeorm'
import { EventEmitter } from 'events'

export default class MySQL extends EventEmitter {
  static async connect(entities: Function[]) {
    return getConnectionManager().create({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2031163243',
      database: 'uidesign',
      connectTimeout: 1000,
      synchronize: true,
      entities
    }).connect()
  }
}
async function test() {

}