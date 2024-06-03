import { Task } from '../models/Task.js'

export async function createTask(req, res) {
  try {
    const task = await Task.create({ ...req.body, author: req.user.id })

    return res.status(201).json(task)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao criar tarefa' })
  }
}

export async function getTasks(req, res) {
  try {
    const task = await Task.find({ author: req.user.id })

    return res.status(200).json(task)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao buscar tarefas' })
  }
}

export async function updateTask(req, res) {
  try {
    const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.status(200).json(taskUpdated)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao atualizar tarefa' })
  }
}

export async function deleteTask(req, res) {
  try {
    await Task.findByIdAndDelete(req.params.id)

    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao remover tarefa' })
  }
}
