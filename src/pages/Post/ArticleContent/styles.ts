import styled from 'styled-components'

export const ArticleContentContainer = styled.div`
  overflow: hidden;
  padding: 2.5rem 2rem;

  p {
  }

  strong {
    font-weight: 700;
  }
  a {
    color: ${({ theme }) => theme.blue};
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    max-width: 100%;
    object-fit: cover;
  }
  ul {
    margin-left: 1.25rem;
  }
  .line-break {
    white-space: pre-wrap;
  }
`
