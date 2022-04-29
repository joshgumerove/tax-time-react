import "./App.css";
import Table from "./components/containers/Table";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <h1 className="header">TaxTime</h1>
      <Form />
      <br></br>
      <Table />
    </div>
  );
}

export default App;
