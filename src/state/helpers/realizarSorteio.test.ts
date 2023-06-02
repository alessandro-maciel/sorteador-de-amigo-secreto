import realizarSorteio from "./realizarSorteio";

describe('Dado um sorteio de amigo secreto', () => {
    test('Cada participante não sortei o próprio nome', () => {
        const participantes = ['Ana', 'Catarina', 'Alessandro', 'Matheus', 'João'];

        const sorteio = realizarSorteio(participantes);
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toEqual(participante);
        });
    })
})