const express = require('express')
const userController = require('../controllers/user')

const userRouter = express.Router()

userRouter
  .post('/', (req, resp) => {
    userController.create(req.body, (err, res) => {
      let respObj
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        }
        return resp.status(400).json(respObj)
      }
      respObj = {
        status: "success",
        msg: res
      }
      resp.status(201).json(respObj)
    })
  })
  .get('/:username', (req, resp, next) => { // Express URL params - https://expressjs.com/en/guide/routing.html
    // TODO Create get method API
    const username = req.params.username
    userController.get(username, (err,res) => {
      let respObj;
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        };
        return resp.status(400).json(respObj);
      }
      respObj = {
        status: "success",
        msg: res
      };
      resp.status(200).json(respObj);
    });
  })
  .delete('/:username', (req,resp) => {
    const username = req.params.username;
    userController.delete(username, (err,res) => {
      if(err)
      {
        return resp.status(400).json({
          status: "error",
          msg: err.message
        })
      }
      else
      {
        return resp.status(200).json({
          status: "success",
          msg: res
        })
      }
    })
  })
  
module.exports = userRouter
