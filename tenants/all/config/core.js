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
      bgColor: '#76bc43',
      links: [
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/sm21/registration', target: '_blank' },
        { label: 'Summer Meeting Program', href: 'https://www.aad.org/member/meetings-education/sm21/education', target: '_blank' },
      ],
    },
  },
  'aua-daily': {
    ...brands.aua,
    name: 'AUA Daily',
    description: 'AUA Daily eNews',
    channelButtons: {
      bgColor: '#22919c',
      links: [
        { label: 'Channel 1', href: '', target: '_blank' },
        { label: 'Channel 2', href: '', target: '_blank' },
      ],
    },
  },
};

module.exports = config;
