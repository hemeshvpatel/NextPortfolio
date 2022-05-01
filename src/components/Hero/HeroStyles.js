import styled from "styled-components";

export const Sections = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const LeftSection = styled.div`
  width: 75%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 25%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
