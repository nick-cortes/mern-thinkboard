export function getAllNotes(req, res) {
    res.status(200).send("You just fetched the notes");
};

export function createNote(req, res) {
    res.status(200).send("Note created successfully!");
};

export function updateNote(req, res) {
    res.status(200).json({message: "Note updated sucessfully!"});
};

export function deleteNote(req, res) {
    res.status(200).json({message: "Note deleted sucessfully!"});
};