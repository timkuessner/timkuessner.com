import { useState } from 'react';
import { testBackend, testDatabase } from './api/api';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState<string>('');
  const [dbStatus, setDbStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleTestBackend = async () => {
    setLoading(true);
    try {
      const data = await testBackend();
      setBackendStatus(`✅ ${data.message}`);
    } catch (error) {
      setBackendStatus('❌ Backend connection failed');
    }
    setLoading(false);
  };

  const handleTestDatabase = async () => {
    setLoading(true);
    try {
      const data = await testDatabase();
      setDbStatus(`✅ ${data.message}`);
    } catch (error) {
      setDbStatus('❌ Database connection failed');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <p>Testing connections</p>
      
      <div style={{ marginTop: '2rem' }}>
        <button onClick={handleTestBackend} disabled={loading}>
          Test Backend
        </button>
        {backendStatus && <p>{backendStatus}</p>}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleTestDatabase} disabled={loading}>
          Test Database
        </button>
        {dbStatus && <p>{dbStatus}</p>}
      </div>
    </div>
  );
}

export default App;