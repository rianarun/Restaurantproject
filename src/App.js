import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Form from './components/form/CustomerForm';
import MainCourse from './components/mainCourse/MainCourse';
import DrinksContainer from './components/drinkComponent/DrinksContainer';

function App() {
  return (
    <div className="App">
    <Header />
    <Form />
    <MainCourse />
    <DrinksContainer />
      
    </div>
  );
}

export default App;
