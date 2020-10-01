const users = require("../controllers/user.controller.js");
const userRouter = require("express").Router();

  // Create a new user
  userRouter.post("/", users.create);

  // // Retrieve all user
  userRouter.get("/", users.findAll);

  // // Retrieve a single user with id
  userRouter.get("/:id", users.findOne);

  // Update a user with id
  userRouter.put("/:id", users.update);

  // // Delete a user with id
  userRouter.delete("/:id", users.delete);

  // // Create a new user
  // router.delete("/", users.deleteAll);

module.exports = userRouter;