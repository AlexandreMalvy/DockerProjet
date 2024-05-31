import Task from '../models/task.js'

async function getAll(_, res) {
  try {
    const response = await Task.getAll()
    res.status(200).json(response)
  } catch (e) {
    res.status(500).end('Internal server error.')
    console.log(e)
  }
}
async function getById(req, res) {
  try {
    const response = await Task.getById(req.params.id)
    res.status(200).json(response)
    
  } catch (e) {
    res.status(500).end('Internal Server Error.')
    console.log(e)
  }
}
async function add(req, res) {
  const task = {
    name: req.body.name,
    description: req.body.description,
    checked: req.body.checked
  }

  try {
    const response = await Task.add(task)
    res.status(200).json(response)
  } catch (e) {
    res.status(500).end('Internal Server Error.')
    console.log(e)
  }
}
async function update(req, res) {
  const task = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    checked: req.body.checked
  }
  try {
    const response = await Task.update(task)
    res.status(200).json(response)
  } catch (e) {
    res.status(500).end('Internal Server Error.')
    console.log(e)
  }
}
async function del(req, res) {
  try {
    const response = await Task.del(req.params.id)
    res.status(200).json(response)
  } catch (e) {
    res.status(500).end('Internal Server Error.')
    console.log(e)
  }
}

export { getAll, getById, add, update, del }