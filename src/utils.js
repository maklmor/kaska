
export const isNullOrEmpty = value => (
  value === undefined || value === null|| value === '' || value === [] || value === {}
)


const LOCAL_JSON_STORAGE_FILE_PATH = 'registration_DB.json'

export const sendForm = jsonForm => {
  return true
}

const JSON_SECURITY_KEY = 'chatakaska'

export const createBinJSON = json => {
  const request = new XMLHttpRequest();
  request.open("POST", "https://json.extendsclass.com/bin", true);
  request.setRequestHeader("Api-key", "2086dd72-1356-11ee-9a8b-0242ac110002");
  request.setRequestHeader("Security-key", JSON_SECURITY_KEY);
  request.setRequestHeader("Private", "true");
  request.onreadystatechange = () => {
  };
  request.send('{"name": "my JSON"}');
  // https://extendsclass.com/api/json-storage/bin/2086dd72-1356-11ee-9a8b-0242ac110002
}

export const getBinJSON = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://json.extendsclass.com/bin/38f6e9845a39", true);
  request.setRequestHeader("Security-key", JSON_SECURITY_KEY);
  request.onreadystatechange = () => {
    alert(request.responseText);
  };
  request.send();
}

export const updateBinJSON = () => {
  const request = new XMLHttpRequest();
  request.open("PUT", "https://json.extendsclass.com/bin/38f6e9845a39", true);
  request.setRequestHeader("Security-key", JSON_SECURITY_KEY);
  request.onreadystatechange = () => {
  };
  request.send('{"name": "my updated JSON"}');
}