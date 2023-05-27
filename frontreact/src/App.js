import {EmployeeList} from'./component/EmploeeList'

function App() {
  return (
    <>
  <img src={process.env.PUBLIC_URL + '/iconjet.svg'} alt="Icon" style={{margin:"20px 20px"}}/>
  <EmployeeList />
  </>
  );
}

export default App;
