import Constants from './Constants';

var BASE_URL = "https://api.dribbble.com";
var ACCESS_TOKEN = "34d7a0e44d9e6231eed4291f81e6390a9dd0baf24e9c9b0fea992fe9c24baa4e";

var requestOptions = {
  method: 'GET',
  headers: {"Authorization": "Bearer " + ACCESS_TOKEN}
};
module.exports = {
  listShots: (page) => {
    const url = BASE_URL + "/v1/shots?per_page=" + Constants.shotsPageSize + "&page=" + page;
    return fetch(url, requestOptions).then((res) => res.json());
  }
};


