import styled from 'styled-components';
import { springUp } from '../../../utils/animations';

export const Container = styled.header`
  flex-shrink: 0;
  height: 30rem;
  border-bottom: 1px solid #ffffff20;
  box-shadow: inset 0 0px 10px 10px #000000aa;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#002642+1,02040f+75 */
  background: #002642; /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #002642 1%,
    #02040f 75%
  ); /* FF3.6-15 */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #002642 1%,
    #02040f 75%
  ); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(
    ellipse at center,
    #002642 1%,
    #02040f 75%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002642', endColorstr='#02040f',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    animation: ${springUp} 1s;
  }

  h1 {
    line-height: 12rem;
    font-size: 12rem;
    font-weight: normal;
    text-shadow: 0 5px 10px #000000aa;
  }

  h2 {
    margin-top: -1.25rem;
    text-transform: uppercase;
    font-family: 'Averia Serif Libre', serif;
    font-weight: normal;
    letter-spacing: 2.55rem;
    opacity: 0.54;
  }

  em {
    font-size: 3rem;
    color: var(--gamboge);
    opacity: 0.66;
  }
`;
