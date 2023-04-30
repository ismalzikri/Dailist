import "./Button.css";

type ButtonProps = {
  onClick: () => void;
};

export function Button({ onClick }: ButtonProps) {
  return (
    <button className="wrapper__bottom-navigation__button" onClick={onClick}>
      <span className="wrapper__bottom-navigation__icon">+</span>
    </button>
  );
}
