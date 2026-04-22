function Todoitem2() {
  let Todoname = "Go to College";
  let Tododate = "4/10/2023";

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{Todoname}</div>
        <div className="col-4">{Tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem2;
