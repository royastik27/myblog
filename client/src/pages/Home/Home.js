import { useState } from 'react';

import './Home.css';

function RerenderTest() {

  const [ myState, setState ] = useState(0);

  // setState(myState+1);
  // any state change here from any function will cause rerender and reexecute of the codes here

  return (
    <p>I am maybe a re-renderer {myState}</p>
  )
}

function Home() {
  return (
    <div>
        Buy me a coffee! ☕
        <br/>
        <RerenderTest />
    </div>
  );
}

export default Home;