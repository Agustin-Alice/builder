import React from 'react';
import { BuilderComponent } from '@builder.io/react';
import './App.css'
import './builder/builder-components';
import './builder/builder-setup'; 


function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Builder.io + Ant Design</h1>
      </header>

      <main>
        <BuilderComponent model="page" />
      </main>
    </div>
  );
}

export default App;

