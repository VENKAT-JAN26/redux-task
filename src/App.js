import './App.css';
import CustomerAdd from './Components/CustomerAdd';
import CustomerView from './Components/CustomerView';
import { Provider } from 'react-redux';
import store from './Store'; // Error Note: Import store without curly braces
import Counter from './Components/Counter';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
         <Counter/><br/>
         <CustomerAdd />
        <CustomerView /><br/>
         
        {/* <Form/><br/> */}
       

      </div>
    </Provider>
  );
}

export default App;



