
function Note({note, handleDeleteNote}) {

  let datestamp = note.created_at.split("T")[0];

  function handleDeleteSubmit(){
    fetch(`/api/notes/${note.id}`, {
      method: "DELETE"
    });
    handleDeleteNote(note.id)
  };

  return (
    <div className="Note">
      <h3> Note for {note.song ? `"${note.song.name}"` : "(SONG DELETED)"} on {datestamp}: </h3>
      <p>{note.text}</p>
      <button className="button" id="card-button"onClick={handleDeleteSubmit}>
        <div role="img" aria-label="delete"> 🗑 </div>
      </button>
    </div>
  );
}

export default Note;