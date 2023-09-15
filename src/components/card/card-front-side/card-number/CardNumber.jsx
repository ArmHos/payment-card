const CardNumber = ({ codeValue }) => {
  return (
    <div className="card-number">
      <span className="number-code">
        {!codeValue ? "0000 0000 0000 0000" : codeValue}
      </span>
    </div>
  );
};

export default CardNumber;
