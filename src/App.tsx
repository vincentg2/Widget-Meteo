import React from 'react';
import './App.css';
import { WidgetMeteo } from './components/WidgetMeteo/WidgetMeteo';

function App() {
  return (
    <div className="App">
      <WidgetMeteo />
      <WidgetMeteo defaultCity='Pékin'/>
      <WidgetMeteo defaultCity='Rome'/>
    </div>
  );
}

export default App;
