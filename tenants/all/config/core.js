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
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/aad-enewsletter-header.png',
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
        { label: 'Registration', href: 'https://www.compusystems.com/servlet/ar?evt_uid=211', target: '_blank' },
        { label: 'Program', href: 'https://www.eventscribe.net//2021/AUA2021/', target: '_blank' },
      ],
    },
  },
  'aad-enewsletter-2': {
    ...brands.aad,
    name: 'AAD eNewsletter 2',
    description: '',
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/AAD_S21Header_DocBagBlast.png',
    channelButtons: {
      bgColor: '#76bc43',
      links: [
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/sm21/registration', target: '_blank' },
        { label: 'Summer Meeting Program', href: 'https://www.aad.org/member/meetings-education/sm21/education', target: '_blank' },
      ],
    },
  },
  'aha-vascular-registered': {
    ...brands.aha,
    name: 'AHA Vascular Registered',
    description: '',
    headerImageSrc: '',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Vascular Discovery Conference', href: '', target: '_blank' },
        { label: 'Schedule at a Glance', href: '', target: '_blank' },
      ],
    },
  },
  'aha-vascular-non-registered': {
    ...brands.aha,
    name: 'AHA Vascular Non-Registered',
    description: '',
    headerImageSrc: '',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Today', href: '', target: '_blank' },
        { label: 'Schedule at a Glance', href: '', target: '_blank' },
      ],
    },
  },
  'aha-ress-domestic': {
    ...brands.aha,
    name: 'AHA ReSS Domestic',
    headerImageSrc: '',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: '', href: '', target: '_blank' },
        { label: '', href: '', target: '_blank' },
      ],
    },
  },
  'aha-ress-international': {
    ...brands.aha,
    name: 'AHA ReSS International',
    headerImageSrc: '',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: '', href: '', target: '_blank' },
        { label: '', href: '', target: '_blank' },
      ],
    },
  },
};

module.exports = config;
