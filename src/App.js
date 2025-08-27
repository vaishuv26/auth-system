 
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${apiUrl}/api/data`);
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
