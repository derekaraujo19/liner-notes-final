
function Note({note}) {

  let datestamp = note.created_at.split("T")[0];

  return (
    <div className="Note">
      <h3> Note for {note.song ? `"${note.song.name}"` : "(SONG DELETED)"} on {datestamp}: </h3>
      <p>{note.text}</p>
    </div>
  );
}

export default Note;