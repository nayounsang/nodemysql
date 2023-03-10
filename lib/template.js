module.exports = {
  HTML: function (title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href = "/author">author</a>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  }, list: function (filelist) {
    var list = '<ul>';
    var i = 0;
    while (i < filelist.length) {
      list = list + `<li><a href="/?id=${filelist[i].id}">${filelist[i].title}</a></li>`;
      i = i + 1;
    }
    list = list + '</ul>';
    return list;
  }, authorSelect: function (authors, author_id = 1) {
    var tag = '';
    var i = 0;
    while (i < authors.length) {
      var selected = (authors[i].id === author_id) ? ' selected' : ''
      tag += `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
      i++;
    }
    return `
      <select name="author">
        ${tag}
      </select>
    `
  }
}
