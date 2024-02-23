import { Request, Response } from 'express';
import { connect } from '../db/database';
import { Post } from '../interfaces/Post.interface';

export async function getPosts(
  req: Request,
  res: Response,
): Promise<Response> {
  const conn = await connect();
  const posts = await conn.query('SELECT * FROM posts');

  return res.json(posts[0]);
}

export async function getPost(
  req: Request,
  res: Response,
): Promise<Response> {
  const id = req.params.postId;
  const conn = await connect();

  const post = await conn.query(
    'SELECT * FROM posts WHERE id = ?',
    [id],
  );

  return res.json(post[0]);
}

export async function createPost(
  req: Request,
  res: Response,
) {
  const newPost: Post = req.body;
  const conn = await connect();

  conn.query('INSERT INTO posts SET ?', [newPost]);

  return res.json({
    message: 'Post created...!',
  });
}

export async function updatePost(
  req: Request,
  res: Response,
) {
  const id = req.params.postId;
  const update: Post = req.body;
  const conn = await connect();

  const updatePost = await conn.query(
    'UPDATE posts SET ? WHERE id = ?',
    [update, id],
  );

  return res.json('Post has updated...!');
}

export async function deletePost(
  req: Request,
  res: Response,
): Promise<Response> {
  const id = req.params.postId;
  const conn = await connect();

  const delPost = await conn.query(
    'DELETE FROM posts WHERE id = ?',
    [id],
  );

  return res.json('Post has deleted...!');
}
