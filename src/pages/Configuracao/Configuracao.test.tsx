import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Configuracao from ".";

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
});

describe('A pagina de configuracao', () => {
    test('Deve ser renderizada corretamente', () => {
       const {container} = render(<RecoilRoot>
            <Configuracao />
        </RecoilRoot>);

        expect(container).toMatchSnapshot();
    });
});