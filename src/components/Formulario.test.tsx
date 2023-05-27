import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

test('Quando o imput está vazio, novos participantes não podem ser adicionados', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  )
  
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  const botao = screen.getByRole('button');

  expect(input).toBeInTheDocument();
  expect(botao).toBeDisabled();

});

test('Adicionar um participante caso exista um nome preenchido', () => {
  
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  )

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  const botao = screen.getByRole('button');

  fireEvent.change(input, {
    target: {
      value: 'Alessandro Maciel'
    }
  });

  fireEvent.click(botao);

  expect(input).toHaveFocus();
  expect(input).toHaveValue('');

});

test('Nome duplicados não podem ser adicionados na lista', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  )

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  const botao = screen.getByRole('button');

  fireEvent.change(input, {
    target: {
      value: 'Alessandro Maciel'
    }
  });

  fireEvent.click(botao);

  fireEvent.change(input, {
    target: {
      value: 'Alessandro Maciel'
    }
  });

  fireEvent.click(botao);

  const mensagemDeError = screen.getByRole('alert');
  expect(mensagemDeError.textContent).toBe('Noms duplicados não são permitidos');
});