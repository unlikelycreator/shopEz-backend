const { Router } = require("express");

const { getItem, saveItem, deleteItem} = require("../controllers/itemController");

const router = Router();

router.get("/items", getItem);

router.post("/items/save", saveItem);

//router.post('/tasks/update', updateTask);

router.post('/items/delete', deleteItem)

module.exports = router;