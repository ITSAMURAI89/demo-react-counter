function Button({ step, increment }) {
  return (
    <button
      onClick={() => {
        increment(step);
      }}
    >
      {step > 0 ? "+" : ""}
      {step}
    </button>
  );
}

export default Button;
