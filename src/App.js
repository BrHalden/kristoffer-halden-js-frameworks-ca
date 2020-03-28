import React from 'react';
import './css/App.css';
import './css/Components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout.js'
import {apiTest2} from './constants/api'

apiTest2()
function App() {
  return (
    <div className="App">
      <Layout>

      </Layout>
    </div>
  );
}

export default App;
