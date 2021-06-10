const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://ascend.serve.email-x.parameter1.com');

config
  .setAdUnits('aua-daily', [
    {
      name: 'ad-slot-1',
      id: '60be59399333292cf6b24511',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('aua-daily', [
    {
      name: 'ad-slot-2',
      id: '60be59549006f6424c5c722f',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('aua-daily', [
    {
      name: 'ad-slot-3',
      id: '60be596b9006f67e2c5c7242',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('aua-daily', [
    {
      name: 'ad-slot-4',
      id: '60be59819006f6679d5c7255',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('aua-daily', [
    {
      name: 'ad-slot-5',
      id: '60be59c6933329c6e5b24551',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('aua-daily', [
    {
      name: 'ad-slot-6',
      id: '60be59dd933329630fb2455b',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aua-daily', [
    {
      name: 'ad-slot-7',
      id: '60be59f293332980e9b24577',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
