import { useEffect, useState } from 'react';

export default function ProtectedPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProtectedData() {
      try {
        const response = await fetch('/api/protected', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        if (response.ok) {
          const result = await response.json();
          setData(result.message);
        } else {
          const errorResult = await response.json();
          setError(errorResult.message);
        }
      } catch (error) {
        setError('An unexpected error occurred');
      }
    }

    fetchProtectedData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return <div>{data}</div>;
}
