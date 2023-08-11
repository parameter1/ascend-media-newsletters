const NativeXConfiguration = require('@parameter1/base-cms-marko-newsletters-native-x/config');

const config = new NativeXConfiguration('https://ascend.native-x.parameter1.com/email-placement', { enabled: true });

config
  .setAliasPlacements('aad-enewsletter-1', [
    { name: 'native-slot-1', id: '60c9e3742134870001cf88fc' },
  ])
  .setAliasPlacements('aua-daily-domestic', [
    { name: 'native-slot-1', id: '60fee97488b8050001f43230' },
  ])
  .setAliasPlacements('aad-enewsletter-2', [
    { name: 'native-slot-1', id: '6102f99888b8050001f47e68' },
  ])
  .setAliasPlacements('aha-vascular-discovery-registered-attendees', [
    { name: 'native-slot-1', id: '611127d9add9ee0001287aa9' },
  ])
  .setAliasPlacements('aha-vascular-discovery-non-registered-attendees', [
    { name: 'native-slot-1', id: '611a8078b4c21e0001a3704a' },
  ])
  .setAliasPlacements('aha-ress-eblast', [
    { name: 'native-slot-1', id: '611ea693b4c21e0001a3be48' },
  ])
  .setAliasPlacements('aha-hypertension-registered', [
    { name: 'native-slot-1', id: '611bb1d4ef52af0001540cd4' },
  ])
  .setAliasPlacements('aha-hypertension-non-registered', [
    { name: 'native-slot-1', id: '611bb1efef52af0001540cde' },
  ])
  .setAliasPlacements('aha-ss-epreview', [
    { name: 'native-slot-1', id: '611eafafb4c21e0001a3bf2b' },
  ])
  .setAliasPlacements('acep-enewsletter', [
    { name: 'native-slot-1', id: '611eba8eef52af0001544853' },
  ])
  .setAliasPlacements('ashp-midyear-daily-news', [
    { name: 'native-slot-1', id: '612949a4b5983700013a93e9' },
  ])
  .setAliasPlacements('aao-hnsf', [
    { name: 'native-slot-1', id: '611ebab3b4c21e0001a3c13a' },
  ])
  .setAliasPlacements('asa-today', [
    { name: 'native-slot-1', id: '612e6df8fb61160001598bd5' },
  ])
  .setAliasPlacements('aha-ss-international', [
    { name: 'native-slot-1', id: '616d87f41ff6d3000117db14' },
  ])
  .setAliasPlacements('ashp-midyear-daily-news-international', [
    { name: 'native-slot-1', id: '61892868234d66000162997f' },
  ])
  .setAliasPlacements('isc-enewsletter-1', [
    { name: 'native-slot-1', id: '61af908cebe1150001361614' },
    { name: 'native-slot-2', id: '63b47be147d30f00012becd9' },
  ])
  .setAliasPlacements('isc-enewsletter-2', [
    { name: 'native-slot-1', id: '61af90b12371430001eb3f5d' },
    { name: 'native-slot-2', id: '63b47bf76a12c60001c6a55a' },
  ])
  .setAliasPlacements('aad-enewsletter-3', [
    { name: 'native-slot-1', id: '61bcaa88661f850001199b9e' },
  ])
  .setAliasPlacements('aua-daily-international', [
    { name: 'native-slot-1', id: '62017f4d804a2f00012ae2e0' },
  ])
  .setAliasPlacements('shm-enewsletter', [
    { name: 'native-slot-1', id: '61e9b1728c995a00018c7150' },
  ])
  .setAliasPlacements('asa-today-2022', [
    { name: 'native-slot-1', id: '627bed15531a13000163e6be' },
  ])
  .setAliasPlacements('acep-enewsletter-2', [
    { name: 'native-slot-1', id: '62d18918b070600001afef2a' },
  ])
  .setAliasPlacements('pulmonary-insights', [
    { name: 'native-slot-1', id: '634d94abe058a900017a6535' },
    { name: 'native-slot-2', id: '642b1511ff54a3000185a319' },
    { name: 'native-slot-3', id: '642b1529ff54a3000185a3b8' },
    { name: 'native-slot-4', id: '642b1538daaefe0001bbfed6' },
    { name: 'native-slot-5', id: '642b1546daaefe0001bbff33' },
  ])
  .setAliasPlacements('aao-hns-extra', [
    { name: 'native-slot-1', id: '63a4ced012609b00011f9363' },
  ])
  .setAliasPlacements('aad-enewsletter-4-expanded', [
    { name: 'native-slot-1', id: '63fcc180f3efa700015a212f' },
    { name: 'native-slot-2', id: '63fcc18ec776740001f1d177' },
    { name: 'native-slot-3', id: '63fcc19cf3efa700015a21c3' },
  ])
  .setAliasPlacements('shm-enewsletter-2', [
    { name: 'native-slot-1', id: '64185410f3efa70001ac4f7a' },
    { name: 'native-slot-2', id: '6418559af3efa70001ac5b81' },
    { name: 'native-slot-3', id: '641855a6b8089d0001970629' },
  ])
  .setAliasPlacements('aua-daily-expanded', [
    { name: 'native-slot-1', id: '642c86fcff54a3000189e95f' },
    { name: 'native-slot-2', id: '642c8730daaefe0001c0361b' },
    { name: 'native-slot-3', id: '642c873bff54a3000189ea0a' },
  ]);

module.exports = config;
