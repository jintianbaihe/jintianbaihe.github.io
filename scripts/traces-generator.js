// 为 traces 页面生成分页（每页 10 条）
const pagination = require('hexo-pagination');

const TRACE_CATS = ['books', 'movies', 'games', 'music'];

hexo.extend.generator.register('traces', function (locals) {
  const tracePosts = locals.posts.filter(post => {
    if (!post.categories || !post.categories.data || !post.categories.data.length) return false;
    return post.categories.data.some(cat => TRACE_CATS.includes(cat.name));
  }).sort('-date');

  return pagination('traces', tracePosts, {
    perPage: 10,
    layout: ['traces'],
    format: 'page/%d/',
    data: {
      title: 'Traces',
      description: 'A curated log of books, films, music, and games that spark joy.',
    },
  });
});
