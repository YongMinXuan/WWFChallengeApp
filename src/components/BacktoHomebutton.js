import styled from 'styled-components';


const BacktoHomeButton = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

background-color: #333333;
color:white;
display: block;
border: none;
padding: 14px 28px;
font-size: 16px;
margin-left: auto;
width: 200px;
margin-right: auto
`;

export default BacktoHomeButton