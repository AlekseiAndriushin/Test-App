import NetworkService from './services/NetworkService';
const ulList = document.createElement('ul');
ulList.classList.add('followersWrapper');
const renderFollower = (repoItem) => {
  const listItem = document.createElement('li');

  listItem.classList.add('followersItem');

  const listItemTextNode = document.createTextNode(
    repoItem.login
  );

  listItem.appendChild(listItemTextNode);

  let image = document.createElement('img');

  image.src = repoItem.avatar_url;
  image.alt = repoItem.login;
  image.classList.add('footer__image');

  ulList.appendChild(listItem).appendChild(image);
  document.querySelector('#footer').appendChild(ulList);
};
export const getInfo = () => {
  NetworkService.getGaearon().then((profileData) => {
    if (
      profileData &&
      profileData.avatar_url &&
      profileData.company &&
      profileData.name
    ) {
      const heading = document.createElement('span');
      const headingTextNode = document.createTextNode(
        `Github profile: ${profileData.name}
			Company: ${profileData.company}`
      );
      heading.appendChild(headingTextNode);
      document
        .querySelector('#footer')
        .appendChild(heading);

      let image = document.createElement('img');
      image.src = profileData.avatar_url;
      image.alt = profileData.login;
      image.width = 100;
      document.querySelector('#footer').appendChild(image);
    } else {
      return;
    }
  });
};

export const getFollowers = () => {
  NetworkService.getGaearonApi().then((profileData) => {
    console.log(renderFollower);
    if (profileData) {
      profileData.forEach((repoItem) => {
        renderFollower(repoItem);
      });
    } else {
      return;
    }
  });
};

export const getUser = () => {
  NetworkService.getUser().then((profileData) => {
    if (
      profileData &&
      profileData.avatar_url &&
      profileData.name &&
      profileData.followers
    ) {
      const heading = document.createElement('a');
      const headingTextNode = document.createTextNode(
        `Github profile: ${profileData.name}`
      );
      heading.appendChild(headingTextNode);
      heading.href = `${profileData.html_url}`;
      heading.target = '_blank';
      heading.classList.add('header__link');
      let image = document.createElement('img');
      image.src = profileData.avatar_url;
      image.alt = profileData.name;
      image.classList.add('header__image');

      const followers = document.createElement('span');
      const followersTextNode = document.createTextNode(
        `Number of my subscribers: ${profileData.followers}`
      );
      followers.appendChild(followersTextNode);
      header.appendChild(heading);

      header.appendChild(image);
      header.appendChild(followers);
    } else {
      return;
    }
  });
};
