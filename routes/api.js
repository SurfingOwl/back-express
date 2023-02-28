import express from 'express'

import User from '../models/user.js'

const router = express.Router()

  // List users from the database
  router.get('/users', async function (req, res, next) {
    let users = []
    try {
      users = await User.findAll()
    } catch (e) {
      console.error(`Could not load users: ${e}`)
    }
    res.set(Accept, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    res.send(users)
  })

  // Get user information from id
  router.get('/users/:identifier', async function (req, res, next) {
    const identifier = req.params.identifier
    let user = []
    try {
      user = await user.findByPk(identifier)
    } catch (e) {
      console.error(`Could not load user with id '${identifier}': ${e}`)
    }
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    res.send(user)
  })
  
  
  // Create new User in database
  router.post('/users', async function (req, res, next) {
    const { name, description } = req.body
    let users = []
    let error
    try {
      await User.create({ name, description })
      users = await User.findAll()
    } catch (e) {
      console.error(`Could not create User: ${e}`)
      error = e
    }
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    res.send(users)
  })
  
  // Delete user from id
  router.delete('/users/:identifier', async function (req, res, next) {
    const id = req.params.identifier
    let users = []
    try {
      await User.destroy({ where: { id } })
      users = await User.findAll()
    } catch (e) {
      console.error(`Could not delete user with id '${id}': ${e}`)
      return res.sendStatus(500)
    }
    res.send(users)
  })
  
export default router