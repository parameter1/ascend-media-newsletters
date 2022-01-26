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
    description: 'ePREVIEW',
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/AAD_dermWorld.png',
    channelButtons: {
      bgColor: '#76bc43',
      links: [
        { label: 'Meeting Program', href: 'https://am2022.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am22/registration', target: '_blank' },
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
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/AAD_dermWorld.png',
    channelButtons: {
      bgColor: '#76bc43',
      links: [
        { label: 'Meeting Program', href: 'https://am2022.aad.org/sessions', target: '_blank' },
        { label: 'Industry Highlights', href: 'https://www.aadmeetingnews.org/industry-highlights', target: '_blank' },
      ],
    },
  },
  'aha-vascular-discovery-registered-attendees': {
    ...brands.aha,
    name: 'AHA Vascular Discovery Registered Attendees',
    description: 'ePreview',
    showHeaderWebsiteLink: false,
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
    description: 'ePreview',
    showHeaderWebsiteLink: false,
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
    description: 'ePreview',
    website: 'https://sessions.hub.heart.org/',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-ress-header-2021.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-sessions-logo-white.png',
    brand: '#ReSS',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/resuscitation-science-symposium', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/?_ga=2.52016033.903420193.1631127443-74158399.1585661384#!/9349', target: '_blank' },
      ],
    },
  },
  'aha-hypertension-registered': {
    ...brands.aha,
    name: 'AHA Hypertension Registered',
    description: 'ePreview',
    showHeaderWebsiteLink: false,
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-hypertension-header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-hypertension-logo-white.png',
    brand: '#Hypertension21',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Hypertension Conference', href: 'https://hypertension.heart.org', target: '_blank' },
        { label: 'Sessions at a Glance', href: 'https://junohypertension-heart.s3.us-east-2.amazonaws.com/Hypertension_SAAG_APPROVED0826.pdf', target: '_blank' },
      ],
    },
  },
  'aha-hypertension-non-registered': {
    ...brands.aha,
    showHeaderWebsiteLink: false,
    name: 'AHA Hypertension Non-Registered',
    description: 'ePreview',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-hypertension-header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-hypertension-logo-white.png',
    brand: '#Hypertension21',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Today', href: 'https://professional.heart.org/en/meetings/hypertension/registration-and-housing', target: '_blank' },
        { label: 'Sessions at a Glance', href: 'https://professional.heart.org/-/media/phd-files/meetings/hypertension/2021/hypertension-2021-saag.pdf?la=en', target: '_blank' },
      ],
    },
  },
  'acep-enewsletter': {
    ...brands.acep,
    name: 'ACEP eNewsletter',
    description: 'Preview',
    channelButtons: {
      bgColor: '#ED8800',
      links: [
        { label: 'Program', href: 'https://www.acep.org/sa/education/courses/', target: '_blank' },
        { label: 'Meeting Coverage', href: 'https://acepmeetingnewscentral.com/meeting-coverage', target: '_blank' },
      ],
    },
  },
  'aha-ss-epreview': {
    ...brands.aha,
    name: 'AHA Scientific Sessions ePreview',
    description: 'ePreview',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-ss-header-2021.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-sessions-logo-white.png',
    brand: '#AHA21',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/scientific-sessions/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/?_ga=2.52016033.903420193.1631127443-74158399.1585661384#!/9349', target: '_blank' },
      ],
    },
  },
  'ashp-midyear-daily-news': {
    ...brands.ashp,
    name: 'ASHP Midyear Daily News',
    description: 'Day 1',
    headerImageSrc: '/files/base/ascend/hh/image/static/ashp/ashp-header-logo.png',
    channelButtons: {
      bgColor: '#F47932',
      links: [
        { label: 'Meeting Tools', href: 'https://midyear.ashp.org/virtual-meeting-tools-and-tips?loginreturnUrl=SSOCheckOnly', target: '_blank' },
        { label: 'Program', href: 'https://midyear.ashp.org/session-schedule-and-itinerary-planner', target: '_blank' },
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
  'asa-today': {
    ...brands.asa,
    name: 'Anesthesiology Today, Annual Meeting Edition',
    description: 'eDaily',
    channelButtons: {
      bgColor: '#8a84d6',
      links: [
        { label: 'Registration', href: 'https://www.asahq.org/annualmeeting/attend/registration', target: '_blank' },
        { label: 'Program', href: 'https://www.abstractsonline.com/pp8/#!/9323', target: '_blank' },
      ],
    },
  },
  'aha-ss-international': {
    ...brands.aha,
    name: 'AHA Scientific Sessions ePreview',
    description: 'ePreview',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/aha-ss-header-2021.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-sessions-logo-white.png',
    brand: '#AHA21',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/scientific-sessions/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/?_ga=2.52016033.903420193.1631127443-74158399.1585661384#!/9349', target: '_blank' },
      ],
    },
  },
  'ashp-midyear-daily-news-international': {
    ...brands.ashp,
    name: 'ASHP Midyear Daily News-International',
    description: 'Day 1',
    headerImageSrc: '/files/base/ascend/hh/image/static/ashp/ashp-header-logo.png',
    channelButtons: {
      bgColor: '#F47932',
      links: [
        { label: 'Meeting Tools', href: 'https://midyear.ashp.org/virtual-meeting-tools-and-tips?loginreturnUrl=SSOCheckOnly', target: '_blank' },
        { label: 'Program', href: 'https://midyear.ashp.org/session-schedule-and-itinerary-planner', target: '_blank' },
      ],
    },
  },
  'isc-enewsletter-1': {
    ...brands.aha,
    name: 'ISC 2022 eNewsletter 1',
    description: 'ePreview',
    disclaimer: 'The American Stroke Association (ASA) does not endorse any commercial products or programs. The links provided within this site are for convenience only, and are not an endorsement of either the linked-to entity, product or service. ASA makes no warranties of any kind, express or implied, with regard to its third-party vendor websites.',
    headerImageSrc: '/files/base/ascend/hh/image/static/isc/ISC22_eNewsletterHeader.png',
    logoSrc: '/files/base/ascend/hh/image/static/isc/ISC22_AHA_ASA_HeartTorchLogo_Footer.png',
    brand: '#ISC22',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/international-stroke-conference/registration', target: '_blank' },
        { label: 'Online Program Planner', href: '', target: '_blank' },
      ],
    },
  },
  'isc-enewsletter-2': {
    ...brands.aha,
    name: 'ISC 2022 eNewsletter 2',
    description: 'ePreview',
    disclaimer: 'The American Stroke Association (ASA) does not endorse any commercial products or programs. The links provided within this site are for convenience only, and are not an endorsement of either the linked-to entity, product or service. ASA makes no warranties of any kind, express or implied, with regard to its third-party vendor websites.',
    headerImageSrc: '/files/base/ascend/hh/image/static/isc/ISC22_eNewsletterHeader.png',
    logoSrc: '/files/base/ascend/hh/image/static/isc/ISC22_AHA_ASA_HeartTorchLogo_Footer.png',
    brand: '#ISC22',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/international-stroke-conference/registration', target: '_blank' },
        { label: 'Online Program Planner', href: '', target: '_blank' },
      ],
    },
  },
  'aad-enewsletter-3': {
    ...brands.aad,
    name: 'AAD eNewsletter 3',
    description: 'ePREVIEW',
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/AAD_dermWorld.png',
    channelButtons: {
      bgColor: '#76bc43',
      links: [
        { label: 'Meeting Program', href: 'https://am2022.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am22/registration', target: '_blank' },
      ],
    },
  },
  'shm-enewsletter': {
    ...brands.shm,
    name: 'SHM eNewsletter',
    description: 'ePREVIEW',
    channelButtons: {
      bgColor: '#202945',
      links: [
        { label: 'Register Now', href: 'https://www.hospitalmedicine.org/event/annual-conference/shmc-2022/', target: '_blank' },
        { label: 'Converge News', href: '', target: '_blank' },
      ],
    },
  },
};

module.exports = config;
