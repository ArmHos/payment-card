const CardDate = ({dateValue}) => {
  return (
    <div className="card-date">
      <span className="card-date-span">{dateValue ? dateValue : "yy/mm"}</span>
    </div>
  );
}

export default CardDate