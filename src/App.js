import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <div className='ques-container'>
      <div>
        <h4>How to React Works</h4>
        <p>At its very core, React basically mainintans a tree for you, This tree is able to do efficient diff computations on the nodes.
          Think of you HTML code as a tree. In fact, that is exactly how DOM how  brower treats you. </p>
      </div>
      <div>
        <h4>Props VS State</h4>
        <p>Props are read-only</p>
        <p>Props cant not be modified</p>
        <p>State change and be asynchronous</p>
        <p>State can be modified using this setState</p>
      </div>
    </div>
    

  </div> 
  );
}

export default App;
