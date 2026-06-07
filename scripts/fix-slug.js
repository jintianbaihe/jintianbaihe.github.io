// 修复 source/_posts/ 子目录下的文章 permalink：
// books/活着.md → slug = "活着"（去掉目录前缀）
hexo.extend.filter.register('before_post_render', function (data) {
  if (data.slug && data.slug.includes('/')) {
    data.slug = data.slug.split('/').pop();
  }
  return data;
});
