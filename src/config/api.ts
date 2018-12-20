export class API {
  static PROTOCOL = 'http';
  static PORT = 3000;
  static HOST = 'localhost';
  static SERVER = `${API.PROTOCOL}://${API.HOST}:${API.PORT}`;

  static user = {
    get: `${API.SERVER}/user`,
    save: `${API.SERVER}/user/save`,
    search: `${API.SERVER}/user/search`,
    delete: `${API.SERVER}/user/delete`,
    login: `${API.SERVER}/user/login`,
    logput: `${API.SERVER}/user/logout`,
    passwordForgot: `${API.SERVER}/user/password-forgot`,//enviara un correo para resetear el password
    passwordUpdate: `${API.SERVER}/user/password-update` //enviara un correo confirmando el login
  };
  static post = {
    get: `${API.SERVER}/post`,
    save: `${API.SERVER}/post/save`,
    delete: `${API.SERVER}/post/delete`,
    like: {
      save: `${API.SERVER}/post/:id/like`,
      delete: `${API.SERVER}/post/:id/like`//unlike
    },
    comment: {
      save: `${API.SERVER}/post/:id/comment`,
      delete: `${API.SERVER}/post/:id/comment`,
      put: `${API.SERVER}/post/:id/comment`,
      get: `${API.SERVER}/post/:id/comment`
    }
  };
  static file = {
    get: `${API.SERVER}/file`,
    upload: `${API.SERVER}/file/upload`

  };
  static friends = {
    get: `${API.SERVER}/friends`,//se utiliza para busqueda, pero no se utilizara
    request: `${API.SERVER}/friends/request`,//esta url captará nuevos amigos
    delete: `${API.SERVER}/friends/delete`
  };
}
