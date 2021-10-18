import React, { SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Menu } from '../../components/Menu';
import { logout } from '../../store/slices/Auth/authSlice';
import { useTypedSelector } from '../../store/useTypedSelector';
import { removingDuplicateItems } from '../../utils/removingDuplicateItems';

export enum RouteNames {
  LOGIN = '/login',
}
export const MenuContainer = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  const router = useHistory();

  const dispatch = useDispatch();

  const handleLogout = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(logout());
    router.push(RouteNames.LOGIN);
  };

  const takenCards = useTypedSelector((state) => state.cards.card);
  const answer: Array<string> = [];
  const findList = () => {
    takenCards?.map((card) => (card.taken ? answer.push(card.company) : null));
    if (answer.length) {
      console.clear();
      console.log(removingDuplicateItems(answer));
    } else {
      console.log('тут пусто');
    }
  };
  return (
    <Menu findList={findList} isAuth={isAuth} handleLogout={handleLogout} />
  );
};
