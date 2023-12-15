const express = require("express");

const router = express.Router();

const articleControllers = require("./controllers/articleControllers");
// const validateArticle = require("./validators/validateArticle");

router.get("/articles", articleControllers.browse);
router.get("/articles/:id", articleControllers.read);
// router.post("/articles", validateArticle, articleControllers.add);
// router.put("/articles/:id", validateArticle, articleControllers.edit);
// router.delete("/articles/:id", articleControllers.destroy);

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */
const contactControllers = require("./controllers/contactControllers");

router.post("/contact", contactControllers.send);

module.exports = router;
