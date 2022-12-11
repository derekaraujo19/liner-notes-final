function AddNote({setShowAddNotes}) {

  function returnToNotes(){
    setShowAddNotes(false)
  };
  return (
    <button onClick={returnToNotes}> Return to Notes </button>
  );
}

export default AddNote;