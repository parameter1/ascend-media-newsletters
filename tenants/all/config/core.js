const brands = require('./brands');
const emailX = require('./email-x');
const nativeX = require('./native-x');

const config = {
  brands,
  emailX,
  nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'aad-enewsletter-1': {
    ...brands.aad,
    name: 'AAD eNewsletter 1',
    description: 'AAD SUMMER MEETING | ePREVIEW',
    channelButtons: {
      bgColor: '#76bd42',
      links: [
        { label: 'Channel 1', href: '#', target: '_blank' },
        { label: 'Channel 2', href: '#', target: '_blank' },
      ],
    },
  },
};

module.exports = config;
