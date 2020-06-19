import React from 'react';
import logo from './logo.svg';
import './App.css';
import './coloring.css';



function Introduction ({name})
{

return <div> <center> <p className='myname'> Hello World from <strong>{name}</strong></p>
</center>

</div>;

}



// function Hi(names)
// {
//  return  <div>
   
//    <center>
//    Hello world from   <strong>{names.name} </strong>
   
//    </center>
   
//    </div> ;
   
// }

//OR YOU CAN WRITE THE SAME FUNC AS

/*function Hi({name})
{
 return  <div>
   
   <center>
   Hello world from   <strong>{name} </strong>
   
   </center>
   
   </div> ;
   
}*/





//function App() {
 // return
//}

export default Introduction;

