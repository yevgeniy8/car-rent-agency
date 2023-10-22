import styled from '@emotion/styled';

export const CardCar = styled.li`
    position: relative;
    width: 274px;
`;

export const ImageGradient = styled.div`
    border-radius: 14px;

    width: 274px;
    height: 268px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    margin-bottom: 14px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            180deg,
            rgba(18, 20, 23, 0.5) 2.5%,
            rgba(18, 20, 23, 0) 41.07%
        );
    }
`;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
`;

export const Svg = styled.svg`
    position: absolute;
    right: 14px;
    top: 14px;
    stroke: white;
    fill: none;
    transition: transform 250ms ease-in-out;

    &:hover {
        transform: scale(1.5);
    }
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

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
`;

export const Description = styled.p`
    color: rgba(18, 20, 23, 0.5);
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    margin-bottom: 4px;
`;

export const Button = styled.button`
    display: flex;
    width: 274px;
    height: 44px;
    padding: 12px 0;
    justify-content: center;
    align-items: center;

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
