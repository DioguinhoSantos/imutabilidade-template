import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'
import { useState } from 'react'

export function Garagem({ nome, setNome }) {

  const [automovel, setAutomovel] = useState({modelo: "Corsa", cor: "branco", ano: 2020, flex: true})

  const mudaNome = () => {
  setNome("Coliro")  
  }

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudaNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          automovel={automovel}
          adicionadoPor={nome}
        />
        
      </Estacionamento>
    </GaragemContainer>
  )
}
