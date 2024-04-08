import styled from "styled-components";

export const SearchBarWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  max-width: 106rem;
  height: 4.3rem;
  padding-left: 3.8rem;
  padding-right: 1.6rem;
  border-radius: 1rem;
  background-color: var(--Grey-Light);
  font-size: 1.4rem;

  @media (min-width: 768px) {
    height: 5.4rem;
    padding-left: 4.2rem;
    font-size: 1.6rem;
    line-height: 150%;
  }

  &::placeholder {
    color: var(--text-content-gray);
  }
`;

export const SearchBarIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.6rem;
`;
