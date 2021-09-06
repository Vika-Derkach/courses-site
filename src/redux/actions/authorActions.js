import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { getAuthors } from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors,
  };
}
export function loadAuthors() {
  return function (dipatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dipatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
