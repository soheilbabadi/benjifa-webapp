import React, { useState, useEffect } from 'react';

function CatFact() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://catfact.ninja/fact', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'X-CSRF-TOKEN': 'GMRIZ5sH2nwtOk8zcovBjYtIBForDVF7FuOrhioB'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFact(data.fact);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCatFact();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Random Cat Fact</h2>
      <p>{fact}</p>
    </div>
  );
}

export default CatFact;