import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const PostsHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const PostsTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  strong {
    font-size: 1.125rem;
    line-height: 1.8rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`
