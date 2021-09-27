import {
  createElementFollowers,
  createProfile,
} from './footerQuerys';
import { getMe } from './headerQuery';

async function getData(url) {
  let data = await fetch(url);
  let json = await data.json();
  return json;
}

export const queries = () => {
  getData('https://api.github.com/users/gaearon').then(
    (data) => {
      createProfile(data);
    }
  );
  getData(
    'https://api.github.com/users/gaearon/followers'
  ).then((data) => {
    createElementFollowers(data);
  });

  getData(
    'https://api.github.com/users/AlexeyAndryushin'
  ).then((data) => {
    getMe(data);
  });
};
