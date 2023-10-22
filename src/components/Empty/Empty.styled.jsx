import styled from '@emotion/styled';

export const EmptyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const Text = styled.p`
    margin-top: 5px;
    margin-bottom: 5px;

    color: rgba(18, 20, 23, 0.5);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 1.5;
`;

export const TextSecondary = styled(Text)`
    margin-top: 0;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
`;
