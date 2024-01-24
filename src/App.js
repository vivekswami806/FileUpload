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
import HOC from './component/HOC';
import ApiHOC from './component/ApiHOC';
import Counter2 from './component/Counter2';
import Debounicing from './component/Debounicing';



function App() {
  return (
    <>
    <div className="App" >
      {/* <Fetch/> */}
      {/* <Axios/> */}
    </div>
    {/* <Provider store={store}>
      <DemoRedux/>
      <Counter/>
      <InputFieldConnect/>
      <FetchData/>
    </Provider> */}
   {/* <div style={{display:"flex"}}>
   <HOC comp={<ApiHOC url={"https://dummyjson.com/posts"}/>}/>
    <HOC comp={<ApiHOC url={"https://dummyjson.com/posts?skip=10&limit=10"}/>}/>
    <HOC comp={<Counter2/>}/>
    
   </div> */}
   <Debounicing/>

    </>
    
  );
}

export default App;
