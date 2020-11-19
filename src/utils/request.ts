import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  try {
    return await fetch(uri).then((res) => res.json());
  } catch {
    return null
  }
}

export default req;
