import React, { useState, useRef } from "react";

const CacheDemo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [useCache, setUseCache] = useState(true);

  const cacheRef = useRef({});

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";

    setLoading(true);
    setData(null);

    if (useCache && cacheRef.current[url]) {
      console.time("Serving from cache");
      console.log("Serving from cache");
      setData(cacheRef.current[url]);
      console.timeEnd("Serving from cache"); // Logs the time taken to serve from cache
      setLoading(false);
    } else {
      console.time("Fetching from API");
      console.log("Fetching from API");
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (useCache) {
          cacheRef.current[url] = result;
          // console.log("Data cached:", result);
        }

        setData(result);
        console.timeEnd("Fetching from API"); // Logs the time taken to fetch from API
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setData({ error: error.message });
        console.timeEnd("Fetching from API"); // Ensure the timer ends even on error
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Caching Demo</h1>
      <p>
        This demo shows the difference between cached and non-cached API requests.
      </p>

      <label>
        <input
          type="checkbox"
          checked={useCache}
          onChange={(e) => setUseCache(e.target.checked)}
        />
        Enable Cache
      </label>

      <div style={{ margin: "20px" }}>
        <button onClick={fetchData} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Fetch Data
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {data && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CacheDemo;
