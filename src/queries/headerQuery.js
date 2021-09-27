export function getMe(profileData) {
  if (
    profileData.avatar_url &&
    profileData.name &&
    profileData.followers
  ) {
    const heading = document.createElement('span');
    const headingTextNode = document.createTextNode(
      `Github profile: ${profileData.name}`
    );
    function click() {
      window.open(profileData.html_url);
    }
    heading.appendChild(headingTextNode);
    heading.addEventListener('click', click);
    let image = document.createElement('img');
    image.src = profileData.avatar_url;
    image.width = 100;
    document.querySelector('#header');

    const followers = document.createElement('span');
    const followersTextNode = document.createTextNode(
      `Number of my subscribers: ${profileData.followers}`
    );
    followers.appendChild(followersTextNode);
    document.querySelector('#header').appendChild(heading);

    document.querySelector('#header').appendChild(image);
    document
      .querySelector('#header')
      .appendChild(followers);
  } else {
    return;
  }
}
