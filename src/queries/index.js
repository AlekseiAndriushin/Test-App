import {
  getFollowers,
  createProfile,
} from './footerQuerys';
import { getUser } from './headerQuery';

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
    getFollowers(data);
  });

  getData(
    'https://api.github.com/users/AlexeyAndryushin'
  ).then((data) => {
    getUser(data);
  });
};
