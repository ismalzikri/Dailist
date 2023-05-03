import { FormEventHandler } from "react";
import closeIcon from "../../assets/close-icon.svg";
import "./Modal.css";

type ModalProps = {
  handleSubmitTodo: FormEventHandler<HTMLFormElement>;
  onClose: () => void;
};

export function Modal({ handleSubmitTodo, onClose }: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>What you gonna do?</h3>
        <div className="modal__close-button" onClick={onClose}>
          <img src={closeIcon} alt="close-icon" />
        </div>
        <form id="todo-form" onSubmit={handleSubmitTodo}>
          <input
            name="title"
            type="text"
            placeholder="Playing guitar or something.."
            required
          />
          <div className="modal-buttons">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
