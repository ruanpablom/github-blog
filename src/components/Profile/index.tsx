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
  TextIcon,
} from './styles'
import { Profile as ProfileModel } from '@/models/profile'

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
          <TextIcon>
            <img src={githubIcon} alt="github" />
            <span>{login}</span>
          </TextIcon>
          {!!company && (
            <TextIcon>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{company}</span>
            </TextIcon>
          )}
          {!!followersQtd && (
            <TextIcon>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{`${followersQtd} ${
                followersQtd > 1 ? 'seguidores' : 'seguidor'
              }`}</span>
            </TextIcon>
          )}
        </Footer>
      </InfoContainer>
    </ProfileContainer>
  )
}
