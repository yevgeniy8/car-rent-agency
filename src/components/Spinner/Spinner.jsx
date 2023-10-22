import { RotatingLines } from 'react-loader-spinner';
import { SpinnerStyled } from './Spinner.styled';

export default function Spinner() {
    return (
        <SpinnerStyled>
            <RotatingLines
                strokeColor="#3E85F3"
                strokeWidth="5"
                animationDuration="0.75"
                width="130"
                visible={true}
            />
        </SpinnerStyled>
    );
}
