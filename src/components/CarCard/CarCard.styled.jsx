import styled from '@emotion/styled';

export const CardCar = styled.li`
    /* position: relative; */
    width: 274px;
`;

export const Image = styled.img`
    width: 274px;
    height: 268px;
    border-radius: 14px;
    background: linear-gradient(
            180deg,
            rgba(18, 20, 23, 0.5) 2.5%,
            rgba(18, 20, 23, 0) 41.07%
        ),
        #f3f3f2;
    margin-bottom: 14px;
`;

export const ImageGradient = styled.div`
    /* position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            180deg,
            rgba(18, 20, 23, 0.5) 2.5%,
            rgba(18, 20, 23, 0) 41.07%
        ),
        #f3f3f2; */
`;

export const StartDescription = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const Make = styled.span`
    color: #121417;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
`;

export const Model = styled.span`
    color: #3470ff;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
`;

export const RentalPrice = styled.span`
    color: #121417;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;

    /* margin-left: 87px; */
`;

export const Description = styled.p`
    color: rgba(18, 20, 23, 0.5);
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; /* 150% */

    margin-bottom: 4px;
`;

export const Button = styled.button`
    display: flex;
    width: 274px;
    height: 44px;
    padding: 12px 0;
    justify-content: center;
    align-items: center;
    /* flex-shrink: 0; */

    outline: none;
    border: none;

    border-radius: 12px;
    background: #3470ff;

    color: #fff;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.43;

    margin-top: 28px;
`;
