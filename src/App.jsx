import { useState } from "react";


function App() {
  const [monto, setmonto] = useState(0)
  const [porcentaje, setporcentaje] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12  mt-2">
            <div className="card">
              <div className="card-body">
                <input type="number" className="form-control m-2 bg-dark text-white" placeholder="Monto"value={monto} onChange={(e) => setmonto(e.target.value)} />
                <input type="number" className="form-control m-2 bg-dark text-white" placeholder=" %" value={porcentaje} onChange={(e) => setporcentaje(e.target.value)} />

                <select name="" id="" className="form-control m-2 bg-dark text-white"  onChange={(e) => setporcentaje(e.target.value)}>
                <option value="0.0" selected>0%</option>
                  <option value="0.1">1%</option>
                  <option value="0.02">2%</option>
                  <option value="0.03">3%</option>
                  <option value="0.04">4%</option>
                  <option value="0.05">5%</option>
                  <option value="0.06">6%</option>
                  <option value="0.07">7%</option>
                  <option value="0.08">8%</option>
                  <option value="0.09">9%</option>
                  <option value="0.10">10%</option>




                </select>
              
              </div>
            </div>
          </div>
          <div className="col-md-12  mt-2">
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
                      <th scope="row">${monto}</th>
                      <td>%{porcentaje}</td>
                      <td>${monto*porcentaje}</td>
                  

            
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
