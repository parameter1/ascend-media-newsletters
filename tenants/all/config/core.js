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
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/AAD_S21Header_DocBagBlast.png',
    channelButtons: {
      bgColor: '#76bc43',
      links: [
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/sm21/registration', target: '_blank' },
        { label: 'Summer Meeting Program', href: 'https://www.aad.org/member/meetings-education/sm21/education', target: '_blank' },
      ],
    },
  },
  'aha-vascular-discovery-registered-attendees': {
    ...brands.aha,
    name: 'AHA Vascular Discovery Registered Attendees',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-vascular-discovery-header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-vascular-discovery-logo-white.png',
    brand: '#VascularDiscovery21',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Vascular Discovery Conference', href: 'https://vasculardiscovery.heart.org/', target: '_blank' },
        { label: 'Sessions at a Glance', href: 'https://junovascular-heart.s3.us-east-2.amazonaws.com/Vascular_SAAG%20-%20approved%208202021.pdf', target: '_blank' },
      ],
    },
  },
  'aha-vascular-discovery-non-registered-attendees': {
    ...brands.aha,
    name: 'AHA Vascular Discovery Non-Registered Attendees',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-vascular-discovery-header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-vascular-discovery-logo-white.png',
    brand: '#VascularDiscovery21',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/vascular-discovery-from-genes-to-medicine-scientific-sessions/', target: '_blank' },
        { label: 'Sessions at a Glance', href: 'https://professional.heart.org/-/media/phd-files/meetings/vascular-discovery/2021/vascular_discovery_2021_preliminary_program.pdf?la=en', target: '_blank' },
      ],
    },
  },
  'aha-ress-eblast': {
    ...brands.aha,
    name: 'AHA ReSS eBlast',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-ress-header-image-2021.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-sessions-logo-white.png',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/scientific-sessions/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/?_ga=2.52016033.903420193.1631127443-74158399.1585661384#!/9349', target: '_blank' },
      ],
    },
  },
  'aha-hypertension-registered': {
    ...brands.aha,
    name: 'AHA Hypertension Registered',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-hypertension-header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-hypertension-logo-white.png',
    brand: '#Hypertension21',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Hypertension Conference', href: '', target: '_blank' },
        { label: 'Schedule at a Glance', href: '', target: '_blank' },
      ],
    },
  },
  'aha-hypertension-non-registered': {
    ...brands.aha,
    name: 'AHA Hypertension Non-Registered',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-hypertension-header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-hypertension-logo-white.png',
    brand: '#Hypertension21',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Today', href: '', target: '_blank' },
        { label: 'Schedule at a Glance', href: '', target: '_blank' },
      ],
    },
  },
  'acep ': {
    ...brands.acep,
    name: 'ACEP',
    channelButtons: {
      bgColor: '',
      links: [
        { label: '', href: '', target: '_blank' },
        { label: '', href: '', target: '_blank' },
      ],
    },
  },
  'aha-ss-epreview': {
    ...brands.aha,
    name: 'AHA Scientific Sessions ePreview',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-ss-header-image-2021.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-sessions-logo-white.png',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/scientific-sessions/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/?_ga=2.52016033.903420193.1631127443-74158399.1585661384#!/9349', target: '_blank' },
      ],
    },
  },
  'ashp ': {
    ...brands.ashp,
    name: 'ASHP',
    headerImageSrc: '',
    channelButtons: {
      bgColor: '',
      links: [
        { label: '', href: '', target: '_blank' },
        { label: '', href: '', target: '_blank' },
      ],
    },
  },
  'aao-hnsf': {
    ...brands.aao,
    name: 'AAO-HNSF eNewsletter',
    description: 'Preview',
    channelButtons: {
      bgColor: '#bf311a',
      links: [
        { label: 'Posters', href: 'https://www.researchposters.com/display_posters.aspx?code=AAO2021', target: '_blank' },
        { label: 'Virtual Platform', href: 'https://otomtg21.junolive.co/Welcome', target: '_blank' },
      ],
    },
  },
  'asa ': {
    ...brands.asa,
    name: 'ASA',
    headerImageSrc: '',
    channelButtons: {
      bgColor: '',
      links: [
        { label: '', href: '', target: '_blank' },
        { label: '', href: '', target: '_blank' },
      ],
    },
  },
};

module.exports = config;
