const header = document.querySelector('#header');
export function getUser(profileData) {
  if (
    profileData &&
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
    image.alt = profileData.name;
    image.classList.add('header_image');

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
}
