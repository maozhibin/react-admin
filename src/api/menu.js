import * as tools from '../axios/tools';

  export const menuList = code =>
  tools.post({
        url: `/list`,
        data: {
            admin: '792cdcd244e98dcd2dee',
            pwd: '81c4ff9df390d482b7c8b214a55cf24bf1f53059',
        },
    });


    export const test = code =>
    tools.post({
          url: `/test`,
          data: {
              admin: '792cdcd244e98dcd2dee',
              pwd: '81c4ff9df390d482b7c8b214a55cf24bf1f53059',
          },
      });
  