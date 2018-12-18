export class File {
    public id?: number;
    public path: string;
    public filename: string;
    public originalName: string;
    public mime: string;
    public size?: number;
    public createdAt?: string;
    public updatedAt?: string;

    static build(object: any) {
        let file = new File();

        file.id = object.id;
        file.path = object.path;
        file.filename = object.filename;
        file.originalName = object.originalName;
        file.mime = object.mime;
        file.size = object.size;
        file.createdAt = object.created_at;
        file.updatedAt = object.updated_at;

        return file;
    }
}