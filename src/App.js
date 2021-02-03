// Import React and useState method
import React, { useState } from 'react';

// Import Header component
import Header from './components/Header';

// Import Page Component
import Page from './components/Page';

// Import Nav component
import Nav from './components/Nav';

// Import Footer component
import Footer from './components/Footer';

// App structure - jsx
function App() {

  // declare array of pages 
  const [pages] = useState([
    {
      name: 'about me',
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    }
  ]);

  // declare variable to hold current page
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer>

      </Footer>
    </div>
  );
};
export default App;
