import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;

	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	padding: 0 0px;

	${Container}
`;

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #000;
`;



export default GlobalStyle;