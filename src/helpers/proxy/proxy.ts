import { UserProxy } from './user.proxy';
import { Injectable } from '@angular/core';
import { PostProxy } from './post.proxy';

@Injectable()
export class Proxy {
    constructor(
        public user: UserProxy,
        public post: PostProxy
    ) {
    }
}