import styled from '@emotion/styled';

export const ButtonClose = styled.button`
    position: absolute;
    right: 12px;
    top: 12px;

    background-color: transparent;
    outline: none;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Svg = styled.svg`
    stroke: black;
    /* fill: black; */
`;

export const Image = styled.img`
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    width: 461px;
    height: 248px;

    object-fit: cover;

    margin-bottom: 14px;
`;

export const Make = styled.p`
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;

    margin-bottom: 8px;
`;

export const CarSpecification = styled.p`
    color: #121417;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.43;

    margin-top: 14px;
    margin-bottom: 24px;
`;

export const Accessories = styled.h2`
    color: #121417;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.43;

    margin-bottom: 8px;
`;

export const RentalConditions = styled.h2`
    color: #121417;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.43;

    margin-bottom: 8px;
    margin-top: 24px;
`;

export const WrapperConditions = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
`;

export const RentalConditionsStyled = styled.p`
    border-radius: 35px;
    padding: 7px 14px;
    background: #f9f9f9;

    color: #363535;
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
`;

export const SecondConditionsStyled = styled(RentalConditionsStyled)`
    color: #363535;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
    letter-spacing: -0.24px;
`;

export const SecondConditionsStyledBlue = styled.span`
    color: #3470ff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.24px;
`;

export const Button = styled.button`
    border-radius: 12px;
    padding: 12px 50px;
    background-color: #3470ff;

    width: 168px;
    height: 44px;

    outline: none;
    border: none;

    color: #fff;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.43;

    margin-top: 16px;
`;
