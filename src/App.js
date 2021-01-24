import './App.css';
import {CFooter} from './components/CFooter'
import CHeader from './components/CHeader'
import CContents from './components/CContents'
//React-02-komponenty
function App() {
  return (
    <div className="App">
      <CHeader aName="Krystian" aFamily="Dutka"/>
      {/* <CHeader aName="Tomasz" aFamily="Nowak"/> */}
      <CContents/>
      <CFooter weather="słoneczna" temp="25">
      <p>Niebo jest bezchmurne, wiatr słaby</p> 
      </CFooter> 
      {/* <CFooter weather="deszczowa" temp="13"/>
      <CFooter weather="śnieżna" temp="6"/> */}
    </div>
  );
}

export default App;