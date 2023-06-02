import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from ".";
import { RecoilRoot } from "recoil";

describe("Comportamento do Formulario.tsx", () => {
  test("Quando o imput está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
  });

  test("Adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Alessandro Maciel",
      },
    });

    fireEvent.click(botao);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("Nome duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Alessandro Maciel",
      },
    });

    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Alessandro Maciel",
      },
    });

    fireEvent.click(botao);

    const mensagemDeError = screen.getByRole("alert");
    expect(mensagemDeError.textContent).toBe(
      "Noms duplicados não são permitidos"
    );
  });

  test("A mensagem de error deve sumir apos os timers", () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Alessandro Maciel",
      },
    });

    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Alessandro Maciel",
      },
    });

    fireEvent.click(botao);

    let mensagemDeError = screen.queryByRole("alert");
    expect(mensagemDeError).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    mensagemDeError = screen.queryByRole("alert");
    expect(mensagemDeError).toBeNull();
  });
});
