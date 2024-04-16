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
        { label: 'Meeting Program', href: 'https://am2024.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am24/registration', target: '_blank' },
      ],
    },
  },
  'aua-daily-domestic': {
    ...brands.aua,
    name: 'AUA Daily Domestic',
    description: 'AUA Daily eNews',
    customWebsiteLinkText: 'AUA Daily News Online',
    channelButtons: {
      bgColor: '#6DC7B9',
      links: [
        { label: 'Registration', href: 'https://www.auanet.org/AUA2024/register', target: '_blank' },
        { label: 'Program', href: 'https://www.auanet.org/AUA2024/program', target: '_blank' },
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
        { label: 'Meeting Program', href: 'https://am2024.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am24/registration', target: '_blank' },
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
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/AHASS23_Blast_Header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-sessions-logo-white.png',
    brand: '#AHA23',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/scientific-sessions/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/?_ga=2.117725897.197470905.1692625537-1814998058.1681330243#!/10871', target: '_blank' },
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
        { label: 'Annual Meeting Program', href: 'https://www.entnet.org/events/annual-meeting/program/schedule/', target: '_blank' },
        { label: 'Posters', href: 'https://otomtg23.eventscribe.net/PosterTitles.asp?pfp=Browse%20by%20Title', target: '_blank' },
      ],
    },
  },
  'aha-ss-international': {
    ...brands.aha,
    name: 'AHA Scientific Sessions ePreview',
    description: 'ePreview',
    headerImageSrc: '/files/base/ascend/hh/image/static/aha/AHASS23_Blast_Header.png',
    logoSrc: '/files/base/ascend/hh/image/static/aha/aha-sessions-logo-white.png',
    brand: '#AHA23',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/scientific-sessions/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/?_ga=2.117725897.197470905.1692625537-1814998058.1681330243#!/10871', target: '_blank' },
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
    socialMedia: {
      imagePath: '/files/base/ascend/hh/image/static',
      links: [
        { provider: 'twitter', href: 'https://twitter.com/AHAScience', target: '_blank' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-heart-association/', target: '_blank' },
        { provider: 'youtube', href: 'https://www.youtube.com/ahasciencenews', target: '_blank' },
      ],
    },
    disclaimer: 'The American Heart Association/American Stroke Association (AHA/ASA) does not endorse any commercial products or programs. The links provided within this site are for convenience only, and are not an endorsement of either the linked-to entity, product or service. AHA/ASA makes no warranties of any kind, express, or implied, with regard to its third-party vendor websites. Paid advertisements are not reviewed by the AHA/ASA for scientific accuracy.',
    headerImageSrc: '/files/base/ascend/hh/image/static/isc/ISC24_eNewsHeader.jpeg',
    logoSrc: '/files/base/ascend/hh/image/static/isc/ISC22_AHA_ASA_HeartTorchLogo_Footer.png',
    brand: '#ISC24',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/international-stroke-conference/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/#!/10942', target: '_blank' },
      ],
    },
  },
  'isc-enewsletter-2': {
    ...brands.aha,
    name: 'ISC 2023 eNewsletter 2',
    description: 'ePreview',
    socialMedia: {
      imagePath: '/files/base/ascend/hh/image/static',
      links: [
        { provider: 'twitter', href: 'https://twitter.com/AHAScience', target: '_blank' },
        { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-heart-association/', target: '_blank' },
        { provider: 'youtube', href: 'https://www.youtube.com/ahasciencenews', target: '_blank' },
      ],
    },
    disclaimer: 'The American Heart Association/American Stroke Association (AHA/ASA) does not endorse any commercial products or programs. The links provided within this site are for convenience only, and are not an endorsement of either the linked-to entity, product or service. AHA/ASA makes no warranties of any kind, express, or implied, with regard to its third-party vendor websites. Paid advertisements are not reviewed by the AHA/ASA for scientific accuracy.',
    headerImageSrc: '/files/base/ascend/hh/image/static/isc/ISC24_eNewsHeader.jpeg',
    logoSrc: '/files/base/ascend/hh/image/static/isc/ISC22_AHA_ASA_HeartTorchLogo_Footer.png',
    brand: '#ISC24',
    channelButtons: {
      bgColor: '#C12126',
      links: [
        { label: 'Register Now', href: 'https://professional.heart.org/en/meetings/international-stroke-conference/registration', target: '_blank' },
        { label: 'Online Program Planner', href: 'https://www.abstractsonline.com/pp8/#!/10942', target: '_blank' },
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
        { label: 'Meeting Program', href: 'https://am2024.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am24/registration', target: '_blank' },
      ],
    },
  },
  'aua-daily-international': {
    ...brands.aua,
    name: 'AUA Daily International',
    description: 'AUA Daily eNews',
    customWebsiteLinkText: 'AUA Daily News Online',
    channelButtons: {
      bgColor: '#6DC7B9',
      links: [
        { label: 'Registration', href: 'https://www.auanet.org/AUA2024/register', target: '_blank' },
        { label: 'Program', href: 'https://www.auanet.org/AUA2024/program', target: '_blank' },
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
        { label: 'Register Now', href: 'https://shmconverge.hospitalmedicine.org/register/', target: '_blank' },
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
        { label: 'ASA My Meeting App', href: 'https://plan.core-apps.com/anes22/customScreen/aboutShow', target: '_blank' },
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
  'pulmonary-insights': {
    ...brands.am,
    name: 'Pulmonary Insights',
    description: '',
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
      copyright: 'American Academy of Otolaryngology-Head and Neck Surgery',
      unsubscribe: 'If you no longer wish to receive these emails, ',
    },
  },
  'aad-enewsletter-4-expanded': {
    ...brands.aad,
    name: 'AAD eNewsletter 4',
    description: 'ePREVIEW',
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/AAD_dermWorld.png',
    channelButtons: {
      bgColor: '#76bc43',
      links: [
        { label: 'Meeting Program', href: 'https://am2024.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am24/registration', target: '_blank' },
      ],
    },
  },
  'shm-enewsletter-2': {
    ...brands.shm,
    name: 'SHM eNewsletter',
    description: 'ePREVIEW',
    channelButtons: {
      bgColor: '#202945',
      links: [
        { label: 'Register Now', href: 'https://shmconverge.hospitalmedicine.org/register/', target: '_blank' },
        { label: 'Converge News', href: 'https://www.shmmeetingnewscentral.com/', target: '_blank' },
      ],
    },
  },
  'aua-daily-expanded': {
    ...brands.aua,
    name: 'AUA Daily Expanded',
    description: 'AUA Daily eNews',
    customWebsiteLinkText: 'AUA Daily News Online',
    channelButtons: {
      bgColor: '#6DC7B9',
      links: [
        { label: 'Registration', href: 'https://www.auanet.org/AUA2024/register', target: '_blank' },
        { label: 'Program', href: 'https://www.auanet.org/AUA2024/program', target: '_blank' },
      ],
    },
  },
  'aad-sales': {
    ...brands.aad,
    name: 'AAD Sales',
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/AAD_2024_SalesHeader.png',
    channelButtons: {
      bgColor: '#0075c9',
      links: [
        { label: 'Rate Card', href: 'https://ratecards.ascendeventmedia.com/aad24/', target: '_blank' },
        { label: 'About the Meeting', href: 'https://www.aad.org/member/meetings-education/am24', target: '_blank' },
      ],
    },
  },
  'aad-exhibitor-spotlight': {
    ...brands.aad,
    name: 'Exhibitor Spotlight',
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/AAD_ExhSpotlight_header.png',
    channelButtons: {
      bgColor: '#76bc43',
      links: [
        { label: 'Meeting Program', href: 'https://am2024.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am24/registration', target: '_blank' },
      ],
    },
  },
  'aad-aesthetics': {
    ...brands.aad,
    name: 'AAD Aesthetics',
    description: 'ePREVIEW',
    headerImageSrc: '/files/base/ascend/hh/image/static/aad/AestheticsNews_DW_header.jpeg',
    channelButtons: {
      bgColor: '#76bc43',
      links: [
        { label: 'Meeting Program', href: 'https://am2024.aad.org/sessions', target: '_blank' },
        { label: 'Registration', href: 'https://www.aad.org/member/meetings-education/am24/registration', target: '_blank' },
      ],
    },
    footer: {
      bgColor: '#1c7cd5',
      address: 'AAD Corporate Offices<br/>9500 W. Bryn Mawr<br/>Rosemont, IL 60018',
      copyright: 'American Academy of Dermatology | Association',
      unsubscribe: 'If you no longer wish to receive this Aesthetics newsletter, ',
      vendorTagline: 'Ascend Media is the official publishing partner of the American Academy of Dermatology.',
    },
  },
};

module.exports = config;
