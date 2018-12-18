import { User } from './user.model';
import { File } from './file.model';

export class Post {
    public id?: number;
    public content: string;
    public Photo?: File;
    public createdAt: string;
    public updatedAt: string;
    public User?: User;

    static build(object: any) {
        let post = new Post();
        
        post.id = object.id;
        post.content = object.content;
        post.createdAt = object.created_at;
        post.updatedAt = object.updated_at;

        if (object.User)
            post.User = User.build(object.User);

        if (object.Photo)
            post.Photo = File.build(object.Photo);

        return post;
    }
}