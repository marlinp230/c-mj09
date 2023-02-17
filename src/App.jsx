

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-2 mt-2">
            <div className="card">
              <div className="card-body">
                <input type="text" className="form-control m-2 bg-dark" placeholder="Monto" />
                <input type="text" className="form-control m-2 bg-dark" placeholder=" %" />
                <button className="btn btn-dark">Evaluar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
