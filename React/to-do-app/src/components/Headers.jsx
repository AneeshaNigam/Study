function Headers() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <input className="text" placeholder="Enter your task" />
        </div>
        <div className="col">
          <input type="date" />
        </div>
        <div className="col">
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  );
}
export default Headers;
