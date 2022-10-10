import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  padding-bottom: 2rem;
`

export const CoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 296px;
  background-color: ${(props) => props.theme['base-profile']};
`

export const EffectRight = styled.img`
  position: absolute;
  right: 0;
  top: 30px;
`
export const EffectLeft = styled.img`
  position: absolute;
  left: 0;
  top: 70px;
`

export const EllipseLeft = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`

export const EllipseRight = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`

export const MidRectangle = styled.img`
  position: absolute;
  bottom: 0;
`

export const ContnetContainer = styled.div`
  z-index: 1;
  margin-top: -100px;
  width: 864px;
`

export const Logo = styled.img`
  position: absolute;
  top: 64px; ;
`
