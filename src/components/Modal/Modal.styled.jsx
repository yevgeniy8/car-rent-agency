import styled from '@emotion/styled';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(18, 20, 23, 0.5);
    z-index: 1200;
`;

export const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 24px;
    background-color: white;
    padding: 40px;

    width: 541px;
    height: 752px;
`;
