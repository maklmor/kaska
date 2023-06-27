
export const isNullOrEmpty = value => (
  value === undefined || value === null|| value === '' || value === [] || value === {}
)

export const sendForm = jsonForm => {
  createRegistrationBin(JSON.stringify(jsonForm))
  return true
}

export const getCounter = () => (
  new Promise(resolve => {
    readCounterBin(resolve)
  })
)

export const updateCounter = value => {
  updateCounterBin(JSON.stringify({ numberOfRegistered: value }))
}

const JSON_CREATE_BIN_KEY = '$2b$10$N7v47ql2yV6V57fjNjOqgeFaERkJtErHakT75gtB9gPbMVpQZ6Ke6'
const JSON_SUBMISSIONS_COLLECTION_ID = '649a1f898e4aa6225eb4ec4a'
const JSON_REGISTRATION_COUNTER_BIN_KEY = '$2b$10$MiQPLzukw6cgiTreEbT8KOyfDLPKVtVnXtGWlxBuoFO/JFtQSTeEW'
const JSON_REGISTRATION_COUNTER_BIN_ID = '649a27249d312622a3762bc0'

export const createRegistrationBin = jsonStr => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      console.log(request.responseText);
    }
  };

  request.open("POST", "https://api.jsonbin.io/v3/b", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("X-Collection-Id", JSON_SUBMISSIONS_COLLECTION_ID);
  request.setRequestHeader("X-Access-Key", JSON_CREATE_BIN_KEY);
  request.send(jsonStr);
}

export const readCounterBin = (fn) => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      console.log(JSON.parse(request.responseText)?.record?.numberOfRegistered);
      fn(JSON.parse(request.responseText)?.record?.numberOfRegistered)
    }
  };

  request.open("GET", `https://api.jsonbin.io/v3/b/${JSON_REGISTRATION_COUNTER_BIN_ID}`, true);
  request.setRequestHeader("X-Access-Key", JSON_REGISTRATION_COUNTER_BIN_KEY);
  request.send();
}

export const updateCounterBin = jsonStr => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      console.log(request.responseText);
    }
  };

  request.open("PUT", `https://api.jsonbin.io/v3/b/${JSON_REGISTRATION_COUNTER_BIN_ID}`, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("X-Access-Key", JSON_REGISTRATION_COUNTER_BIN_KEY);
  request.send(jsonStr);
}
