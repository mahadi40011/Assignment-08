import axios from "axios";
import { useEffect, useState } from "react";

const useAllData = () => {
  const [allApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../FakeData.json")
      .then((data) => setAllApps(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { allApps, loading, error, setLoading };
};

export default useAllData;
