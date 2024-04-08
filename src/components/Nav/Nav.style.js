import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--Linkbrary-bg);
`;

export const NavigationItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3.2rem 20rem;
  height: 9.3rem;
  margin: 0 auto;

  @media (max-width: 1199px) {
    padding-right: 3.2rem;
    padding-left: 3.2rem;
    max-width: 86.3rem;
  }
`;
