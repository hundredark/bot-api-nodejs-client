const { MixinApi } = require('..');
const keystore = require('../keystore.json');
const { v4 } = require('uuid');

const main = async () => {
  console.log(keystore);

  const client = MixinApi({ keystore });

  const resp = await client.message.sendAppCard('', {
    app_id: keystore.app_id,
    icon_url: 'https://mixin.one/',
    cover_url: 'https://mixin.one/zh/assets/images/confidence-4f7bbf9bfa8adf0b1f2f1d8be7d0c94b.webp', // 16:10
    title: 'Example Card',
    description: 'This is an example card.',
    actions: [
      {
        label: 'Mixin Website',
        color: '#ABABAB',
        action: 'https://mixin.one',
      },
    ],
  });
  console.log(resp);
};

main();
