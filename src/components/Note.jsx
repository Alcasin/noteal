import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

function Note(props) {

  function handleClick(){
    props.onDelete(props.id);
  }

  function handleEdit() {
  const noteToEdit = {
    title: props.title,
    content: props.content
  };
  props.onEdit(noteToEdit, props.id);
}



  return (
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={handleClick}><DeleteIcon /></button>
    <button onClick={handleEdit}><EditIcon /></button>
  </div>);
}

export default Note;