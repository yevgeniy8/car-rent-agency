import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    width: 200px;
    position: fixed;
    height: 100vh;
    background-color: rgb(203, 196, 196);
`;

export const Title = styled.h1`
    width: 100px;
    font-size: 35px;
    padding-top: 30px;
    padding-left: 30px;
`;

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    padding-left: 30px;
`;

export const NavigLink = styled(NavLink)`
    color: black;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.43;
    padding: 16px 0;

    &.active {
        color: #3470ff;
    }
`;
