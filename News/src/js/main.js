import { createSpinner } from "./spinner.js";


function renderTopNews() {
  const articleSection = document.getElementById('topNewsList');

  createSpinner(articleSection);
}
function rednerLatestNews() {
  const latestNewsList = document.querySelector('.latest-news-list');

  createSpinner(latestNewsList);
}

// 브라우저가 HTML을 모두 파싱하여 DOM트리 완성 즉시 이벤트 발생
document.addEventListener('DOMContentLoaded', () => {
  renderTopNews();
  rednerLatestNews();
});