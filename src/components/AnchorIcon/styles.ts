import styled from 'styled-components'

export const AnchorIconContainer = styled.a`
  display: flex;
  gap: 8px;
  color: ${(props) => props.theme.blue};
  font-weight: 700;
  text-decoration: none;
  font-size: 0.75rem;
  line-height: 160%;
  height: fit-content;
  border-bottom: 1px solid transparent;
  transition: 0.5s;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
