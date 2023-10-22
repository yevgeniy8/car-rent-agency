import styled from '@emotion/styled';
import { NumericFormat } from 'react-number-format';

export const Form = styled.form`
    display: flex;
    padding-top: 50px;
    margin-bottom: 50px;
    justify-content: center;
    align-items: flex-end;
`;

export const WrapperBrand = styled.div`
    width: 224px;
    margin-right: 18px;
`;

export const Label = styled.label`
    color: #8a8a89;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.29;

    display: block;
    margin-bottom: 8px;
`;

export const WrapperPrice = styled.div`
    width: 125px;
    margin-right: 18px;
`;

export const Input = styled(NumericFormat)`
    width: 160px;
    height: 48px;
    outline: none;
    border: none;

    padding: 14px 0;
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);

    padding-left: 70px;

    background-color: #f7f7fb;

    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.11;
`;

export const Inputs = styled.div`
    display: flex;
`;

export const InputTo = styled(Input)`
    border-radius: 0px 14px 14px 0px;
    margin-right: 18px;

    padding-left: 50px;
`;

export const WrapperInput = styled.div`
    position: relative;
`;

export const LabelHolder = styled.label`
    position: absolute;
    left: 24px;
    top: 14px;

    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.11;
`;

export const ButtonForm = styled.button`
    width: 136px;
    height: 48px;
    padding: 14px 0;
    border-radius: 12px;
    background-color: #3470ff;

    outline: none;
    border: none;

    color: #fff;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.43;

    margin-left: 10px;

    &:disabled {
        background-color: rgb(203, 196, 196);
        cursor: not-allowed;
    }
`;
