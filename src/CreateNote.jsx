import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  // const {addNote}=props;
  const [minimize, setMinimize] = useState(false);
  let [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value= event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const maximize = () => {
    setMinimize(true);
  };
  const reChange = () => {
    setMinimize(false);
  };
  return (
    <>
      <div className="main_note" onDoubleClick={reChange}>
        <form>
          {minimize ? (
            <input
              type="text"
              value={note.title}
              name="title"
              placeholder="Title"
              autoComplete="off"
              onChange={InputEvent}
            />
          ) : null}

          <hr />

          <textarea
            rows=""
            value={note.content}
            name="content"
            colums=""
            placeholder="write a note..."
            onChange={InputEvent}
            onClick={maximize}
          ></textarea>

          {minimize ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
