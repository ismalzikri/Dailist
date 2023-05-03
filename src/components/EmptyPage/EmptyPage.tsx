import iconEmpty from "../../assets/cute_ghost-removebg-preview.png";

export function EmptyPage() {
  return (
    <div
      style={{
        marginTop: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>You don't have any todo yet!</p>
      <span>Let's plan them...</span>
      <div>
        <img style={{ width: 300 }} src={iconEmpty} alt="icon-empty" />
      </div>
    </div>
  );
}
