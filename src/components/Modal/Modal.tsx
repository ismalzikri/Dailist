import { FormEventHandler, useState } from "react";
import "./Modal.css";

type ModalProps = {
  handleSubmitTodo: FormEventHandler<HTMLFormElement>;
  onClose: () => void;
};

// TODO: Use Dialog component from Radix UI
export function Modal({ handleSubmitTodo, onClose }: ModalProps) {
  // 1. controlled with state = state input is handled manually ⭐
  // 2. uncontrolled without state = get form field values from FormData ⭐⭐⭐
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>What you gonna do?</h3>
        <form id="todo-form" onSubmit={handleSubmitTodo}>
          <input name="title" type="text" placeholder="Playing guitar or somethin.."
          />
          <textarea name="description" rows={5} />
          <div className="modal-buttons">
            <button type="submit">Add</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
