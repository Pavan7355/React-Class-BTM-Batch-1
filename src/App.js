import React from 'react'
import PropsFunctional from './Props/PropsFunctional';
import PropsClass from './Props/PropsClass';
import DefaultProps from './Props/DefaultProps';


function App() {

return(
  <>
{/* <PropsFunctional name="virat"/>
<PropsFunctional name="sachin"/>
<PropsClass city="Bangalore" imageurl="https://wallpaperset.com/w/full/2/d/b/483054.jpg"/>
<PropsClass city="Mysore" imageurl="https://wallpaperset.com/w/full/2/d/b/483054.jpg"/> */}
 <DefaultProps name="viart" age="36" city="mumbai"/>
 <DefaultProps name="sachin" age="46"/>
 <DefaultProps/>
  </>
)
}


export default App;
