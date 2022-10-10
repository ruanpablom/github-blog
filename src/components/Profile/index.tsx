/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import githubIcon from '@/assets/icons/github.svg'

import {
  Bio,
  Footer,
  Header,
  InfoContainer,
  Name,
  ProfileContainer,
} from './styles'
import { Profile as ProfileModel } from '@/models/profile'
import { IconSpan } from '../IconSpan'

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
      <img src={avatarUrl} alt={name} />
      <InfoContainer>
        <Header>
          <Name>{name}</Name>
          <a href={`https://github.com/${login}`}>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
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
