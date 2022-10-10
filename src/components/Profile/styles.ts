import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  width: 100%;
  padding: 32px 40px;
  gap: 32px;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 8px;
  gap: 8px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  /* a {
    display: flex;
    gap: 8px;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    text-decoration: none;
    font-size: 0.75rem;
    line-height: 160%;
    height: fit-content;
    border-bottom: 1px solid transparent;
    transition: 1s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  } */
`

export const Name = styled.strong`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
`

export const Bio = styled.span`
  font-style: normal;
`

export const Footer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: auto;
`

export const TextIcon = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  span {
    line-height: 1.6rem;
  }

  img {
    width: 18px;
    height: 18px;
  }

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
