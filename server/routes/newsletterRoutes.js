const express = require("express");
const router = express.Router();
const {getnewsletter,createnewsletter} = require("../controllers/newsletterController");
const {jwtAuthMiddleware} = require("../middlewares/jwtmiddlewares");

router.get("/",getnewsletter);

router.post("/",jwtAuthMiddleware,createnewsletter);