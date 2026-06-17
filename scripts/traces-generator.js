// traces 分页生成器 — /traces/ = books 默认，其他分类独立分页
const pagination = require('hexo-pagination');

const TRACE_CATS = ['books', 'movies', 'games', 'music'];

hexo.extend.generator.register('traces', function (locals) {
  const result = [];

  TRACE_CATS.forEach(cat => {
    const catPosts = locals.posts.filter(post => {
      if (!post.categories || !post.categories.data || !post.categories.data.length) return false;
      return post.categories.data.some(c => c.name === cat);
    }).sort('-date').toArray();

    // books → /traces/, 其他 → /traces/<cat>/
    const base = cat === 'books' ? 'traces' : ('traces/' + cat);
    result.push(...pagination(base, catPosts, {
      perPage: 10,
      layout: ['traces'],
      format: 'page/%d/',
      data: { title: 'Traces' },
    }));
  });

  return result;
});
