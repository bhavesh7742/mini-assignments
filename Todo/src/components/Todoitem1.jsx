function Todoitem1() {
  let Todoname = "Buy Milk";
  let Tododate = "4/10/2023";

  return (
    <div className="container">
      <div className="row kgrow">
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

export default Todoitem1;
