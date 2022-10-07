import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`

export const CoverContainer = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
`

export const ContnetContainer = styled.main`
  position: absolute;
  top: 208px;
  width: 864px;
`

export const Logo = styled.img`
  position: absolute;
  top: 64px; ;
`
