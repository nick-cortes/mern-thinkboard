import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("You just fetched the notes");
});

router.post("/", (req, res) => {
    res.status(200).send("Note created successfully!");
});

router.put("/:id", (req, res) => {
    res.status(200).json({message: "Note updated sucessfully!"});
});

router.delete("/:id", (req, res) => {
    res.status(200).json({message: "Note deleted sucessfully!"});
});

export default router;