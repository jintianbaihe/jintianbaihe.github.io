// =============================================
//  notes 分页生成器
//  只包含 sparks / reflections / skills 分类
//  排除 traces（books/movies/games/music）
//  每页 5 条
// =============================================
const pagination = require('hexo-pagination');

const TRACE_CATS = ['books', 'movies', 'games', 'music'];

hexo.extend.generator.register('notes_main', function (locals) {
  // 取所有非 traces 文章
  const notesPosts = locals.posts.filter(post => {
    if (!post.categories || !post.categories.data || !post.categories.data.length) return true;
    return !post.categories.data.some(c => TRACE_CATS.includes(c.name));
  }).sort('-date')
    .toArray();

  return pagination('notes', notesPosts, {
    perPage: 5,
    layout: ['archive'],
    format: 'page/%d/',
    data: {},
  });
});
