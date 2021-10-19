import React, { SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Menu } from '../../components';
import { logout } from '../../store/slices/auth/authSlice';
import { useTypedSelector } from '../../store/useTypedSelector';
import { removingDuplicateItems } from './removingDuplicateItems';

enum RouteNames {
  LOGIN = '/login',
}

export const MenuContainer = () => {
    const router = useHistory();
    const dispatch = useDispatch();
    const { isAuth } = useTypedSelector((state) => state.auth);
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

  const handleLogout = (event: SyntheticEvent) => {
    event.preventDefault();

    dispatch(logout());

    router.push(RouteNames.LOGIN);
  };



  return (
    <Menu findList={findList} isAuth={isAuth} handleLogout={handleLogout} />
  );
};
