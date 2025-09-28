function Todos({ work, date }) {
  return (
    <>
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">{work}</div>
          <div className="col">{date}</div>
          <div className="col">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
export default Todos;
