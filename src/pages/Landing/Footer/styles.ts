import styled from 'styled-components';
import { springUp } from '../../../utils/animations';

export const Container = styled.header`
  flex-shrink: 0;
  height: 15rem;
  border-bottom: 1px solid #ffffff20;
  box-shadow: inset 0 0px 10px 10px #000000aa;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#212121+1,090909+75 */
  background: #212121; /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #212121 1%,
    #090909 75%
  ); /* FF3.6-15 */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #212121 1%,
    #090909 75%
  ); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(
    ellipse at center,
    #212121 1%,
    #090909 75%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#212121', endColorstr='#090909',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    animation: ${springUp} 1s;
  }

  p {
    display: flex;
    color: var(--gainsboro-dark);

    span + span {
      margin-left: 0.75rem;
    }

    strong,
    em {
      color: var(--gainsboro);
    }

    strong {
      font-family: 'Cinzel Decorative', serif;
    }

    em {
      font-variant: small-caps;
      font-style: normal;
    }

    @media (max-width: 400px) {
      flex-direction: column;
      align-items: center;

      span + span {
        margin-left: 0;
        margin-top: 0.5rem;
      }
    }
  }

  @media (max-width: 640px) {
    height: 7.5rem;
  }
`;
