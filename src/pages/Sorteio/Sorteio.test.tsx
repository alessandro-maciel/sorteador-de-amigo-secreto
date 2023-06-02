import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Sorteio from ".";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    } 
})

describe('A pagina de sorteio',() => {
    const participantes = ['Alessandro', 'Joao', 'Marcos'];

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    })

    test('Todos os participantes podem exibir o seu amigo secreto', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>);

        const opcoes = screen.queryAllByRole('option');

        expect(opcoes).toHaveLength(participantes.length);
    });
});