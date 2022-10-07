import { Profile } from '@/components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile
        avatarUrl="https://avatars.githubusercontent.com/u/10927682?v=4"
        name="Ruan Pablo Medeiros"
        bio="Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass."
        login="ruanpablom"
        company="RocketSeat"
        followersQtd={11}
      />
    </HomeContainer>
  )
}
