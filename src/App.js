import React from 'react';
import './App.css';
import AnotherFile from './AnotherFile';

// Function component
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>This is a function component</h2>

      {/* 1st way of calling other components */}
      <AnotherFile stringContent = {
        <div>
          <h3>Content 1</h3><br/>
          <h3>Content 2</h3><br/>
          <h3>Content 3</h3><br/>
        </div>
      }>
        <div>
          <h4>Content 3.1</h4>
          <h4>Content 3.2</h4>
          <h4>Content 3.3</h4>
        </div>
      </AnotherFile>

      {/* 2nd way of calling other components */}
      <AnotherFile>
        <div>
          <h3>Content 4</h3><br/>
          <h3>Content 5</h3><br/>
          <h3>Content 6</h3>
        </div>
      </AnotherFile>

    </div>
  );
}


// Class component
// class App extends React.Component {
//   render() {
//     return(
//       <div className="App">
//       <h1>Hello World</h1>
//       <h2>This is a class component</h2>
//       </div>
//     )
//   }
// }

export default App;
