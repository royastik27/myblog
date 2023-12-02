import './Container.css';

import MainNav from './../MainNav/MainNav.js';
import MainContent from './../MainContent/MainContent.js';

function Container() {
  return (
    <div className="container-fluid">
      <div className="row">
          <MainNav />
          
          <MainContent />
      </div>
    </div>
  );
}

export default Container;
