import {EmployeeList} from'./component/EmploeeList'

function App() {
  return (
    <>
  <img src={process.env.PUBLIC_URL + '/iconjet.svg'} alt="Icon" />
  <EmployeeList />
  </>
  );
}

export default App;
