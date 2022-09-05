

import styled from 'styled-components';

import banner from '../../images/background.png'

import logo from '../../images/logo.png'




export const Wrapper = styled.div`
display: flex;
justify-content: center;
  background-image: url(${banner});
  width: 1385px;
  height: 963px;
`

export const Container = styled.div`
display:flex;
justify-content: center;
box-sizing: border-box;
position: absolute;
width: 487px;
height: 620px;
left: 450px;
top: 160px;
background: #FFFFFF;
border: 1px solid #C5C5C5;
`
export const Logo = styled.div`
background-image: url(${logo});

width: 171px;
height: 185px;
left: 80rem;
top: 257px;
`