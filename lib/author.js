var db = require('./db');
var template = require('./template.js');
var qs = require('querystring');
var url = require('url');

exports.home = function (request, response) {
    db.query(`SELECT * FROM topic`, function (error, topics) {
        db.query(`SELECT * FROM author`, function (error2, authors) {
            var title = 'Author list';
            var list = template.list(topics);
            var author_table = ''
            var i = 0;
            while (i < authors.length) {
                author_table += `
                <tr>
                    <td>${authors[i].name}</td>
                    <td>${authors[i].profile}</td>
                    <td><a href="/author/update_process?id=${authors[i].id}">update</a></td>
                    <td><a href="/author/delete?id=${authors[i].id}">delete</a></td>
                </tr>`;
                i++;
            }
            var html = template.HTML(title, list,
                `<h2>${title}</h2>
                <table border = "1">
                    <th>Name</th>
                    <th>Profile</th>
                    <th>Update</th>
                    <th>Delete</th>
                    ${author_table}
                </table>
                `,
                `
                <form action="/author/create_process" method="post">
                    <p><input type="text" name="name" placeholder="name"></p>
                    <p>
                        <textarea name="profile" placeholder="profile"></textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
                `
            );
            response.writeHead(200);
            response.end(html);
        })
    })
}