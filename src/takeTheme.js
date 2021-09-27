const themeRadios =
  document.querySelectorAll('.themeRadios');
const wrapThemeRadios =
  document.querySelector('.changeTheme');
export const takeTheme = () => {
  const changeTheme = (event) => {
    if (themeRadios.length) {
      document.documentElement.classList.remove(
        'red',
        'blue'
      );
      document.documentElement.classList.add(
        event.target.value
      );
    }
  };
  wrapThemeRadios.addEventListener('change', (event) => {
    changeTheme(event);
  });
};
