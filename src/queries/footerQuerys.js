const ulList = document.createElement('ul');
ulList.classList.add('followersWrapper');
export function getFollowers(repoFollowers) {
  if ([...repoFollowers]) {
    repoFollowers.forEach((repoItem) => {
      const listItem = document.createElement('li');

      listItem.classList.add('followersItem');

      const listItemTextNode = document.createTextNode(
        repoItem.login
      );

      listItem.appendChild(listItemTextNode);

      let image = document.createElement('img');

      image.src = repoItem.avatar_url;

      image.width = 50;

      ulList.appendChild(listItem).appendChild(image);

      document.querySelector('#footer').appendChild(ulList);
    });
  } else {
    return;
  }
}

export function createProfile(profileData) {
  if (
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
    image.width = 100;
    document.querySelector('#footer').appendChild(image);
  } else {
    return;
  }
}
