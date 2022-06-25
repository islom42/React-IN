import './App.css';
import Functional from "./components/Functioanal"
function App() {

  const expenses = [
    {
      title: "Dasturlash kurslari",
      amount: 35,
      date: new Date(2022, 4, 27),
    },
    {
      title: "Komunal harajatlar",
      amount: 5,
      date: new Date(2022, 4, 27),
    },
    {
      title: "Yo'l kira",
      amount: 8,
      date: new Date(2022, 4, 27),
    },
    {
      title: "Ijara",
      amount: 70,
      date: new Date(2022, 4, 27),
    },
    {
      title: "Kiyim kechak",
      amount: 100,
      date: new Date(2022, 4, 27),
    },
  ];
  return (
    <div className="App">
      <Functional data={expenses} />
    </div>
  );
}

export default App;
