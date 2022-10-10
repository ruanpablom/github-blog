/* eslint-disable camelcase */
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import githubIcon from '@/assets/icons/github.svg'
import { Profile as ProfileModel } from '@/models/profile'
import { IconSpan, AnchorIcon } from '@/components'

import {
  Avatar,
  Bio,
  Footer,
  Header,
  InfoContainer,
  Name,
  ProfileContainer,
} from './styles'

interface ProfileProps extends Omit<ProfileModel, 'avatar_url' | 'followers'> {
  avatarUrl: string
  followersQtd: number | null
}

export function Profile({
  avatarUrl,
  name,
  bio,
  login,
  company,
  followersQtd,
}: ProfileProps) {
  return (
    <ProfileContainer>
      <Avatar src={avatarUrl} alt={name} />
      <InfoContainer>
        <Header>
          <Name>{name}</Name>
          <AnchorIcon
            href={`https://github.com/${login}`}
            iconProps={{ icon: faArrowUpRightFromSquare }}
            iconPosition="left"
          >
            GITHUB
          </AnchorIcon>
        </Header>
        {!!bio && <Bio>{bio}</Bio>}
        <Footer>
          <IconSpan
            icon={githubIcon}
            spanColor="base-subtitle"
            iconColor="base-label"
            text={login}
          />
          {!!company && (
            <IconSpan
              icon={faBuilding}
              spanColor="base-subtitle"
              iconColor="base-label"
              text={company}
            />
          )}
          {!!followersQtd && (
            <IconSpan
              icon={faUserGroup}
              spanColor="base-subtitle"
              iconColor="base-label"
              text={`${followersQtd} ${
                followersQtd > 1 ? 'seguidores' : 'seguidor'
              }`}
            />
          )}
        </Footer>
      </InfoContainer>
    </ProfileContainer>
  )
}
