import * as tools from '../axios/tools';

  export const login = code =>
  tools.post({
        url: `/login`,
        data: {
            admin: '792cdcd244e98dcd2dee',
            pwd: '81c4ff9df390d482b7c8b214a55cf24bf1f53059',
        },
    });