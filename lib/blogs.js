import sql from 'better-sqlite3';

const db = sql('blogs.db');

export const getBlogs = async () => {
  return db.prepare('SELECT * FROM blogs').all();
}

export const getBlogById = (id) => {
  return db.prepare(`SELECT * FROM blogs WHERE id= ?`).get(id);
}

export const addBlog = (blogData) => {
  return db.prepare(`
    INSERT INTO blogs (title, author, content) VALUES(
      @title,
      @author,
      @content
    )
  `).run(blogData);
}