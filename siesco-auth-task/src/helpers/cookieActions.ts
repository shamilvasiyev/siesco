export const setCookieHandler = (key: string, value: string | null) => {
  document.cookie = `${key}=${value}; max-age=3600; path=/`;
};

export const getCookie = (name: string) => {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });

  return result;
};

export const deleteCookie = (...names: string[]) => {
  names.forEach((name) => {
    setCookieHandler(name, null);
  });
};
