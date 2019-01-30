export const perfilSession = (perfil) => {
  const { sessionStorage } = window;

  if (perfil) {
    sessionStorage.setItem('perfil', JSON.stringify(perfil));
    return perfil;
  }

  if (sessionStorage.getItem('perfil')) {
    return JSON.parse(sessionStorage.getItem('perfil'));
  }

  return {};
}

export default perfilSession;
