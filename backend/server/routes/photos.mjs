import express from "express";
import db from "../db/connection.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("photos")
    let result = await collection.find().toArray();

    res.send(result).status(200);
})

// Delete an entry
// router.delete("/:id", async (req, res) => {
//     const query = { _id: ObjectId(req.params.id) };
//
//     const collection = db.collection("photos");
//     let result = await collection.deleteOne(query);
//
//     res.send(result).status(200);
// });

export default router;