import './App.css';


import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"stef"} lastName = {"chateau"} age = {27} hairColor = {"Black"}/>
      <PersonCard firstName = {"chirs"} lastName = {"paul"} age = {30} hairColor = {"Brown"}/>
      <PersonCard firstName = {"cody"} lastName = {"adams"} age = {28} hairColor = {"blond"}/>
      <PersonCard firstName = {"winter"} lastName = {"perroni"} age = {29} hairColor = {"Brown"}/>
    </div>
  );
}

export default App;