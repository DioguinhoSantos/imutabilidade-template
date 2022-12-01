import { CarroContainer } from './styles'

export function Carro({ automovel, adicionadoPor }) {
  return (
    <CarroContainer>
      <h2>{automovel.modelo}</h2>
      <ul>
        <li>Cor: {automovel.cor}</li>
        <li>Ano: {automovel.ano}</li>
        <li>Flex: {automovel.flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
    </CarroContainer>
  )
}
