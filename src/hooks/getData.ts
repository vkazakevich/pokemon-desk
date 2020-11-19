import { useEffect, useState } from 'react';
import req from '../utils/request';

interface IUseData {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const useData = (endpoint: string, query: object, deps: any[] = []): IUseData => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  }
}

export default useData;
