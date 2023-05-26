import { useState, useEffect } from 'react';

function useAuthToken() {
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setToken(token);
    }
  }, []);

  return token;
}

export default useAuthToken;
