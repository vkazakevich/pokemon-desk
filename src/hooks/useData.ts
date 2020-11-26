import { useEffect, useState } from 'react';
import req from '../utils/request';

interface IUseData {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const useData = <T>(endpoint: string, query: object, deps: any[] = []): IUseData => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await req<T>(endpoint, query);
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
  };
};

export default useData;
