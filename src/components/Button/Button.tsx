import "./Button.css";

type ButtonProps = {
  onOpenModal: () => void;
};

export function Button({ onOpenModal }: ButtonProps) {
  return (
    <div className="wrapper__bottom-navigation" onClick={onOpenModal}>
      <span className="wrapper__bottom-navigation__icon">+</span>
    </div>
  );
}
