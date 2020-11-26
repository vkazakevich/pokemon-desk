import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlParamsConfig', () => {
  test('Должна принимать два аргумента "getPokemons" и пустой объект, на выходе должна получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Должна принимать два аргумента "getPokemons" и { name: "Pikachu" }, на выходе должна получить объект с полями pathname, protocol, host и query с полем name равное Pikachu', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {
        name: 'Pikachu',
      },
    });
  });

  test('Должна принимать два аргумента "getPokemon" и { id: 25 }, на выходе должна получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
})
