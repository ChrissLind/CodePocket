import axios from 'axios';
import { getToken, userInfo } from './db';

const data = '';

// Gets users github info (username)
export const getGithubInfo = async function getGithubInfo () {
  const token = await getToken();
  let userName;
  const config = {
    method: 'get',
    url: 'https://api.github.com/user',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      userName = response.data.login;
      return userName;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Gets a list of valid repos
export const getRepos = async function getRepos () {
  let user;
  await userInfo().then(res => {
    user = res;
  });
  const config = {
    method: 'get',
    url: `https://api.github.com/users/${user.userName}/repos`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${user.authToken}`
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      const repoList = [];
      response.data.forEach(repo => {
        repoList.push(repo.name);
      });
      const validRepo = repoList.filter(repo => { return repo.includes('.pocket'); });
      return validRepo;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Gets a list of all files inside valid repo
export const getFiles = async function getFiles (repo) {
  let user;
  await userInfo().then(res => {
    user = res;
  });
  const config = {
    method: 'get',
    url: `https://api.github.com/repos/${user.userName}/${repo}/contents/`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${user.authToken}`
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      const fileList = [];
      response.data.forEach(file => {
        fileList.push(file.path);
      });
      const validFiles = fileList.filter(file => { return file.includes('.js'); });
      return validFiles;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Gets a single specified file from Github
export const getSingleFile = async function getSingleFile (repo, filename) {
  let user;
  await userInfo().then(res => {
    user = res;
  });
  const config = {
    method: 'get',
    url: `https://api.github.com/repos/${user.userName}/${repo}/contents/${filename}`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${user.authToken}`
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// export const printRepoList = async function printRepoList() {
//   const repoList = await getFiles()
//   console.log(repoList)
// }
