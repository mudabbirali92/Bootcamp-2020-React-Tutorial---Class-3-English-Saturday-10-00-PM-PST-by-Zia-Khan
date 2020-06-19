import React from 'react';

import './App.css';

function Medicard({title,body,imageurl})
{

    return <div>

   <h1> {title}</h1> <br/>
<p>{body}
<img src={imageurl}/>
</p><br/>



    </div>

}
export default Medicard;