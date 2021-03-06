import { useSelector, useDispatch } from 'react-redux';
import { GiExitDoor } from 'react-icons/gi';
import {
  UserMenuWrapper,
  UserMenuImg,
  UserMenuText,
  UserMenuButton,
} from './UserMenu.styled';
import defaultAvatar from './default-avatar.png';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  const avatar = defaultAvatar;

  return (
    <UserMenuWrapper>
      <UserMenuImg src={avatar} alt="Avatar" width="40" />
      <UserMenuText>Hello, {name}!</UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        <GiExitDoor style={{ width: 40, height: 40 }} />
      </UserMenuButton>
    </UserMenuWrapper>
  );
};
