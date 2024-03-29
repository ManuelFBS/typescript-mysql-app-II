import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

// ROUTES...
import indexRoutes from '../routes/index.routes';
import postRoutes from '../routes/post.routes';

dotenv.config();

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set(
      'port',
      this.port || process.env.DB_PORT || 3000,
    );
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use('/posts', postRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));

    console.log(
      'Server is runing on port:',
      this.app.get('port'),
    );
  }
}
