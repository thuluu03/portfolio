const Tape = ({ color, angle }: { color: string; angle: number }) => {
  return (
    <div>
      <div
        className={`${color ? color : "white"} + ${angle ? angle : "30"}`}
      ></div>
    </div>
  );
};

export default Tape;
