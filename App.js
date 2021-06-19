import React from 'react';
import Home from 'src/Home';
import { Fancy } from 'src/Fancy';
import { Reddit } from 'src/Reddit';

const App: () => Node = () => {
  return (
    <Home /> //This is the ToDo App
    //<Fancy /> //Learning styling
    //<Reddit /> //HTTP Requests
  );
};

export default App;
