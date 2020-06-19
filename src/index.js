import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Introduction from './App';
//import Medicard from './Medical'
import * as serviceWorker from './serviceWorker';




ReactDOM.render(

      <Introduction
      name="Mudabbir Ali"
   /> 
    ,
  document.getElementById('root')
  );


/*ReactDOM.render(
  //<React.StrictMode>
      <Medicard
    title="Mudabbir Ali"
    body= "image is here"
    imageurl={"https://upload.wikimedia.org/wikipedia/commons/d/dd/Henry_Cavill_by_Gage_Skidmore_2.jpg"}
    />
  //</React.StrictMode>,
  ,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  //<React.StrictMode>
      <Hi
    name="Mudabbir Ali"
    />
  //</React.StrictMode>,
  ,
  document.getElementById('root')
);*/

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
