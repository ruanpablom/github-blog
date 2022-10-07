import { Outlet } from 'react-router-dom'
import {
  CoverContainer,
  EffectRight,
  DefaultLayoutContainer,
  EffectLeft,
  EllipseLeft,
  EllipseRight,
  MidRectangle,
  ContnetContainer,
  Logo,
} from './styles'

import effectRight from '@/assets/cover/effect-right.svg'
import effectLeft from '@/assets/cover/effect-left.svg'
import ellipseLeft from '@/assets/cover/ellipse-left.svg'
import ellipseRight from '@/assets/cover/ellipse-right.svg'
import midRectangle from '@/assets/cover/mid-rectangle.svg'
import logo from '@/assets/cover/logo.svg'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <CoverContainer>
        <MidRectangle src={midRectangle} />
        <EffectLeft src={effectLeft} />
        <EllipseLeft src={ellipseLeft} />
        <EllipseRight src={ellipseRight} />
        <EffectRight src={effectRight} />
      </CoverContainer>
      <Logo src={logo} />
      <ContnetContainer>
        <Outlet />
      </ContnetContainer>
    </DefaultLayoutContainer>
  )
}
