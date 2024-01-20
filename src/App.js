import logo from './logo.svg';
import './App.css';
import Fetch from './component/prComponent/Fetch';
import Axios from './component/prComponent/Axios';
import DemoRedux from './component/DemoRedux';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './component/Counter';
import InputFieldConnect from './component/InputFieldConnect';
import FetchData from './component/FetchData';



function App() {
  return (
    <>
    <div className="App">
      {/* <Fetch/> */}
      {/* <Axios/> */}
    </div>
    <Provider store={store}>
      <DemoRedux/>
      <Counter/>
      <InputFieldConnect/>
      <FetchData/>
    </Provider>
    
    </>
    
  );
}

export default App;
