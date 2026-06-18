// =============================================
//  traces 分页生成器
//  /traces/ 默认 = 书（books）
//  其他分类各自独立分页，每页 10 条
// =============================================
const pagination = require('hexo-pagination');

const TRACE_CATS = ['books', 'movies', 'games', 'music'];

hexo.extend.generator.register('traces', function (locals) {
  const result = [];

  // 为每个分类生成独立的翻页路由
  TRACE_CATS.forEach(cat => {
    const catPosts = locals.posts.filter(post => {
      if (!post.categories || !post.categories.data || !post.categories.data.length) return false;
      return post.categories.data.some(c => c.name === cat);
    }).sort('-date')   // 按日期倒序
      .toArray();       // 转为普通数组，hexo-pagination 需要

    // books 映射到 /traces/，其他映射到 /traces/<分类>/
    const base = cat === 'books' ? 'traces' : 'traces/' + cat;
    result.push(...pagination(base, catPosts, {
      perPage: 10,
      layout: ['traces'],
      format: 'page/%d/',
      data: { title: 'Traces' },
    }));
  });

  return result;
});
