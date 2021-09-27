const ulList = document.createElement('ul');
ulList.classList.add('followersWrapper');
export function getFollowers(repoFollowers) {
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
    image.classList.add('footer_image');

    ulList.appendChild(listItem).appendChild(image);
    document.querySelector('#footer').appendChild(ulList);
  };
  if (repoFollowers) {
    repoFollowers.forEach((repoItem) => {
      renderFollower(repoItem);
    });
  } else {
    return;
  }
}

export function createProfile(profileData) {
  if (
    profileData &&
    profileData.avatar_url &&
    profileData.company &&
    profileData.name
  ) {
    const heading = document.createElement('a');
    const headingTextNode = document.createTextNode(
      `Github profile: ${profileData.name}
			Company: ${profileData.company}`
    );
    heading.appendChild(headingTextNode);
    document.querySelector('#footer').appendChild(heading);

    let image = document.createElement('img');
    image.src = profileData.avatar_url;
    image.alt = profileData.login;
    image.width = 100;
    document.querySelector('#footer').appendChild(image);
  } else {
    return;
  }
}
