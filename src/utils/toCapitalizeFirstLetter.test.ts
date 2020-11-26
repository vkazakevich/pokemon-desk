import toCapitalizeFirstLetter from './toCapitalizeFirstLetter'

describe('ToCapitalizeFirstLetter', () => {
  test('Должна принять строку и вернуть строку с заглавной буквы', () => {
    expect(toCapitalizeFirstLetter('TesT')).toEqual('Test')
    expect(toCapitalizeFirstLetter('test123')).toEqual('Test123')
    expect(toCapitalizeFirstLetter(' ')).toEqual(' ')
  })
})
