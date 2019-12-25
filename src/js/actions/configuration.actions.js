import { UPDATE_SELECTED_ARTICLE } from './types';

export function updateSelectedArticle(payload) {
  return { type: UPDATE_SELECTED_ARTICLE, payload };
};
