import db from '../bdd/connect.js'

function resToInstance(res) {
  return res ? new Task(res.id, res.name, res.description, res.checked) : null
}

export default class Task {
  constructor(id, name, description, checked) {
    this.id = id
    this.name = name
    this.description = description
    this.checked = checked
  }

  static async getAll() {
    const [results] = await db.conn.query(
      'SELECT * FROM `task`'
    )
    return results.map(r => resToInstance(r))
  }
  static async getById(id) {
    const [results] = await db.conn.query(
      'SELECT * FROM `task` where `id` = ?',
      [id]
    )
    return resToInstance(results[0])
  }

  static async add({ name, description, checked }) {
    const [results] = await db.conn.query(
      'INSERT INTO `task` (name, description, checked) value (?, ?, ?)',
      [name, description, checked]
    )
    return results
  }
  static async update({ id, name, description, checked }) {
    const [results] = await db.conn.query(
      'UPDATE `task` set name=?, description=?, checked=? where id=?',
      [name, description, checked, id]
    )
    return results
  }
  static async del(id) {
    const [results] = await db.conn.query(
      'DELETE FROM `task` where id=?',
      [id]
    )
    return results
  }
}