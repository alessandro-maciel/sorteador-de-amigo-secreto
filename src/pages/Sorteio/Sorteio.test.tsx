import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Sorteio from ".";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    } 
})

jest.mock('../../state/hooks/useResultadoDoSorteio', () => {
    return {
        useResultadoDoSorteio: jest.fn()
    } 
})

describe('A pagina de sorteio',() => {
    const participantes = ['Alessandro', 'Joao', 'Marcos'];

    const resultado = new Map([
        ['Alessandro', 'Joao'],
        ['Joao', 'Marcos'],
        ['Marcos', 'Alessandro'],
    ])

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
    })

    test('Todos os participantes podem exibir o seu amigo secreto', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>);

        const opcoes = screen.queryAllByRole('option');

        expect(opcoes).toHaveLength(participantes.length + 1);
    });

    test('O amigo secreto é exibido quando solicitado' , () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>);

        const select = screen.getByPlaceholderText('selecione o seu nome');

        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        }); 

        const botao = screen.getByRole('button');
        fireEvent.click(botao);

        const amigoSecreto = screen.getByRole('alert');
        expect(amigoSecreto).toBeInTheDocument();
    });
});