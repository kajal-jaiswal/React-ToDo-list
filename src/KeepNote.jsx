import React, { useState } from "react";
import KHeader from "./KHeader";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const KeepNote = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert ('i am clicked');
    setAddItem((oldData) => {
      return [...oldData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <KHeader />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};
export default KeepNote;
