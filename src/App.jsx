import { useState } from "react";


function App() {
  const [monto, setmonto] = useState(0)
  const [porcentaje, setporcentaje] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-2 mt-2">
            <div className="card">
              <div className="card-body">
                <input type="number" className="form-control m-2 bg-dark text-white" placeholder="Monto" onChange={(e) => setmonto(e.target.value)} />
                <input type="number" className="form-control m-2 bg-dark text-white" placeholder=" %" onChange={(e) => setporcentaje(e.target.value)} />
              
              </div>
            </div>
          </div>
          <div className="col-md-6 offset-2 mt-2">
            <div className="card">
              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Monto</th>
                      <th scope="col">Porcentaje</th>
                      <th scope="col">tatal</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{monto}</th>
                      <td>{porcentaje}</td>
                      <td>{monto*porcentaje}</td>
            
                    </tr>
                 
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
