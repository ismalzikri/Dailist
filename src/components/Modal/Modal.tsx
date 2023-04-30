import "./Modal.css";

type ModalProps = {
  onClose: () => void;
  //   onSubmit: (value: string) => void;
};

export function Modal({ onClose }: ModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>What you gonna do?</h3>
        <form>
          <input type="text" placeholder="Playing guitar or somethin.." />
          <div className="modal-buttons">
            <button type="submit">Add</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
