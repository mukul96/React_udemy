export const INFO_FETCHED = 'INFOFETCHED';
export const NEW_INFO = 'NEW_INFO';

export function fetchInfo() {
  return fetch('http://www.json-generator.com/api/json/get/cqJjWyLJua?indent=2', {
    method: 'GET'
  })
  .then(response => response)
  .then(json => {
    console.log(json)
    dispatch(loadInfo(json))
  })
  .catch(error => console.log(error));
}

export function loadInfo(results) {
  return {
    type : INFO_FETCHED,
    payload : action
  }
}
