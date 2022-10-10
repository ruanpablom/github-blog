import styled from 'styled-components'

export const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const PostInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`

export const PostInfosHead = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PostTitle = styled.strong`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
`

export const PostInfosFoot = styled.div`
  display: flex;
  gap: 2rem;
`
