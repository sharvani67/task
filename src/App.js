import logo from './logo.svg';
import './App.css';
import Employee from './components/pages/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Manager from './components/pages/Manager';


function App() {
  return (
    <div className="App">
     <Employee/>
     <Manager/>
    </div>
  );
}

export default App;
