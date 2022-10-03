import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import GridCard from './components/GridCard/GridCard';
import ToastTest from './components/ToastTest/ToastTest';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ToastTest></ToastTest>
      <button>Plain Button</button>
      <Button variant='danger'>My Button</Button>
      <Spinner animation='grow' variant='danger' />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
