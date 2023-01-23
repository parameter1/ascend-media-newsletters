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
        { label: 'Meeting Program', href: 'https://am2023.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am23/registration', target: '_blank' },
      ],
    },
  },
  'aua-daily-domestic': {
    ...brands.aua,
    name: 'AUA Daily Domestic',
    description: 'AUA Daily eNews',
    customWebsiteLinkText: 'AUA Daily News Online',
    channelButtons: {
      bgColor: '#63B1B1',
      links: [
        { label: 'Registration', href: 'https://www.auanet.org/annualmeeting/register', target: '_blank' },
        { label: 'Program', href: 'https://www.eventscribe.net/2022/AUA2022/', target: '_blank' },
      ],
    },
  },
  'aad-enewsletter-2': {
    ...brands.aad,
    name: 'AAD eNewsletter 2',
    description: 'ePREVIEW',
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/AAD_dermWorld.png',
    channelButtons: {
      bgColor: '#76bc43',
      links: [
        { label: 'Meeting Program', href: 'https://am2023.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am23/registration', target: '_blank' },
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
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/AHAReSS22_eNews_Header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/AHAReSS22_eNews_LogoFooter.png',
    brand: '#ReSS22',
    customWebsiteLinkText: 'ReSS22',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/resuscitation-science-symposium', target: '_blank' },
        { label: 'View Program Planner', href: 'https://www.abstractsonline.com/pp8/?_ga=2.138131376.1293946439.1666113340-74158399.1585661384#!/10691', target: '_blank' },
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
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/AHASS22_eNews_header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-sessions-logo-white.png',
    brand: '#AHA22',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/scientific-sessions/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/?_ga=2.20399802.36245607.1660839477-74158399.1585661384#!/10611', target: '_blank' },
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
    description: 'eDaily',
    channelButtons: {
      bgColor: '#bf311a',
      links: [
        { label: 'Conference Agenda', href: 'https://www.entnet.org/events/annual-meeting/program/schedule/', target: '_blank' },
        { label: 'Posters', href: 'https://www.eventscribe.net/2022/aaohnsf22amposters/index.asp?launcher=1', target: '_blank' },
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
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/AHASS22_eNews_header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-sessions-logo-white.png',
    brand: '#AHA22',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/scientific-sessions/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/?_ga=2.20399802.36245607.1660839477-74158399.1585661384#!/10611', target: '_blank' },
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
    name: 'ISC 2023 eNewsletter 1',
    description: 'ePreview',
    disclaimer: 'The American Stroke Association (ASA) does not endorse any commercial products or programs. The links provided within this site are for convenience only, and are not an endorsement of either the linked-to entity, product or service. ASA makes no warranties of any kind, express or implied, with regard to its third-party vendor websites.',
    headerImageSrc: '/files/base/ascend/hh/image/static/isc/ISC23_eNewsHeader.jpeg',
    logoSrc: '/files/base/ascend/hh/image/static/isc/ISC22_AHA_ASA_HeartTorchLogo_Footer.png',
    brand: '#ISC23',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/international-stroke-conference/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://eventpilotadmin.com/web/planner.php?id=ISC22', target: '_blank' },
      ],
    },
  },
  'isc-enewsletter-2': {
    ...brands.aha,
    name: 'ISC 2023 eNewsletter 2',
    description: 'ePreview',
    disclaimer: 'The American Stroke Association (ASA) does not endorse any commercial products or programs. The links provided within this site are for convenience only, and are not an endorsement of either the linked-to entity, product or service. ASA makes no warranties of any kind, express or implied, with regard to its third-party vendor websites.',
    headerImageSrc: '/files/base/ascend/hh/image/static/isc/ISC23_eNewsHeader.jpeg',
    logoSrc: '/files/base/ascend/hh/image/static/isc/ISC22_AHA_ASA_HeartTorchLogo_Footer.png',
    brand: '#ISC23',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/international-stroke-conference/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://eventpilotadmin.com/web/planner.php?id=ISC22', target: '_blank' },
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
        { label: 'Meeting Program', href: 'https://am2023.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am23/registration', target: '_blank' },
      ],
    },
  },
  'aua-daily-international': {
    ...brands.aua,
    name: 'AUA Daily International',
    description: 'AUA Daily eNews',
    customWebsiteLinkText: 'AUA Daily News Online',
    channelButtons: {
      bgColor: '#63B1B1',
      links: [
        { label: 'Registration', href: 'https://www.auanet.org/annualmeeting/register', target: '_blank' },
        { label: 'Program', href: 'https://www.eventscribe.net/2022/AUA2022/', target: '_blank' },
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
        { label: 'Register Now', href: 'https://web.cvent.com/event/fe3d1bd7-7df8-4503-b878-b0f345f01248/regProcessStep1', target: '_blank' },
        { label: 'Converge News', href: 'https://www.shmmeetingnewscentral.com/', target: '_blank' },
      ],
    },
  },
  'asa-today-2022': {
    logoSrc: '/files/base/ascend/hh/image/static/asa/asa-footer-logo.png',
    headerImageSrc: '/files/base/ascend/hh/image/static/asa/amdn-22.jpeg',
    name: 'Annual Meeting Daily News',
    customWebsiteLinkText: 'Annual Meeting Daily News',
    description: 'eDaily',
    ctaLinkStyle: {
      color: '#8a84d6',
    },
    channelButtons: {
      bgColor: '#8a84d6',
      links: [
        { label: 'My Meeting App', href: 'https://plan.core-apps.com/anes22/customScreen/aboutShow', target: '_blank' },
        { label: 'Program', href: 'https://www.abstractsonline.com/pp8/#!/10552', target: '_blank' },
        { label: 'Exhibit Hall', href: 'https://www.asahq.org/annualmeeting/network/exhibit-hall', target: '_blank' },
        { label: 'Governance Resources', href: 'https://www.asahq.org/annualmeeting/governance', target: '_blank' },
      ],
    },
    footer: {
      bgColor: '#1226aa',
      address: '1061 American Lane | Schaumburg, IL 60173',
      copyright: 'American Society of Anesthesiologists (ASA)',
      unsubscribe: 'You received this email because you are a member or customer of ASA or you are on a third-party prospect list. If you no longer wish to receive industry promotional emails for the ANESTHESIOLOGY 2022 Annual Meeting, ',
      vendorTagline: 'Ascend Media is an official advertising vendor for the ASA.',
    },
  },
  'acep-enewsletter-2': {
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
  'aao-hns-extra': {
    name: 'AAO-HNS Extra eNewsletter',
    logoSrc: '/files/base/ascend/hh/image/static/aao-hns/AAO-HNS_White_Footer.png',
    headerImageSrc: '/files/base/ascend/hh/image/static/aao-hns/Bulletin_Extra_650x240.jpeg',
    channelButtons: {
      bgColor: '#694d6b',
      links: [
        { label: 'Bulletin', href: 'https://bulletin.entnet.org/', target: '_blank' },
        { label: 'AAO-HNS', href: 'https://www.entnet.org/', target: '_blank' },
      ],
    },
    footer: {
      bgColor: '#694d6b',
      address: '1650 Diagonal Rd<br/>Alexandria, VA 22314',
      copyright: 'American Academy of Otolaryngology - Head and Neck Surgery',
      unsubscribe: 'If you no longer wish to receive these emails, ',
    },
  },
};

module.exports = config;
