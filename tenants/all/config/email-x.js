const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://ascend.serve.email-x.parameter1.com');

config
  .setAdUnits('aad-enewsletter-1', [
    {
      name: 'ad-slot-1',
      id: '60be56789006f6300c5c70c6',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '60c7b2979006f6c5ef5c7554',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '60c7b2a89006f689715c7570',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '60c7b2cc9006f627585c75b9',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '60c7b3249333294f17b248f6',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '60c7b3379006f646095c760b',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '60c7b34a9006f644265c761e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-8',
      id: '621e7eb5b701da6fc727b028',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-9',
      id: '621e7f21b0c539b9b7071d3d',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-10',
      id: '621e7f3db0c5393d62071d47',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aua-daily-domestic', [
    {
      name: 'ad-slot-1',
      id: '60be59399333292cf6b24511',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '60be59549006f6424c5c722f',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '60be596b9006f67e2c5c7242',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '60be59819006f6679d5c7255',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '60be59c6933329c6e5b24551',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '60be59dd933329630fb2455b',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '60be59f293332980e9b24577',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-8',
      id: '6138cbc69006f6f5f35ccb93',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-9',
      id: '6138cbdd6a853c0103e704a5',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-10',
      id: '6138cbf09006f6478b5ccba6',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aad-enewsletter-2', [
    {
      name: 'ad-slot-1',
      id: '6102f2186a853c44e5e6ba51',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '6102f2319006f651155c812e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '6102f2446a853c8d22e6ba76',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '6102f2559006f68b305c814a',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '6102f2679006f623ce5c815d',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '6102f2786a853c2db1e6baa4',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '6102f28b6a853c6f95e6bac0',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-8',
      id: '621e7f60b701da84ba27b071',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-9',
      id: '621e7f76b701da052427b084',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-10',
      id: '621e7f8bb701da12f527b0a0',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aha-vascular-discovery-registered-attendees', [
    {
      name: 'ad-slot-1',
      id: '610d37bd9006f629825c8a4c',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '610d37e16a853cfcc0e6c319',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '610d38026a853c5da2e6c32c',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '610d38176a853c6526e6c33f',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '610d38356a853c1397e6c352',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '610d38516a853c547ae6c35c',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '610d386f6a853c090ee6c366',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aha-vascular-discovery-non-registered-attendees', [
    {
      name: 'ad-slot-1',
      id: '611a813e6a853c94cfe6c970',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '611a81506a853c5935e6c983',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '611a81656a853cb398e6c996',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '611a81799006f6dbef5c9114',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '611a818e9006f6e8a45c9130',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '611a81a16a853c191be6c9bb',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '611a81b86a853c644ce6c9d7',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aha-ress-eblast', [
    {
      name: 'ad-slot-1',
      id: '611ea4ec9006f644fc5ca05f',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '611ea4ff9006f608765ca072',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '611ea5146a853c8d6ee6da9c',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '611ea5289006f679cd5ca08e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '611ea53e6a853cb9b6e6dab8',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '611ea5556a853c971ae6dac2',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '611ea56c9006f63f145ca0c5',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aha-hypertension-registered', [
    {
      name: 'ad-slot-1',
      id: '611bb0556a853c4e2de6cde1',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '611bb06b9006f662815c944e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '611bb07c9006f6583f5c9461',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '611bb0939006f65d6a5c946b',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '611bb0ac6a853c2d5fe6ce18',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '611bb0c66a853ce432e6ce34',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '611bb0da9006f679135c9487',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aha-hypertension-non-registered', [
    {
      name: 'ad-slot-1',
      id: '611bb0ed6a853c8758e6ce47',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '611bb0ff9006f636df5c94ac',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '611bb1119006f6d9a95c94bf',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '611bb1246a853c559de6ce75',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '611bb1389006f6ca4a5c94d2',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '611bb14b6a853c43e6e6ce9a',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '611bb15d6a853c3ad6e6cea4',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aha-ss-epreview', [
    {
      name: 'ad-slot-1',
      id: '611eadeb6a853c66d9e6db7b',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '611eadff6a853c814de6db8e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '611eae186a853c7398e6dbaa',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '611eae299006f647355ca1a3',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '611eae416a853c83a4e6dbbd',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '611eae526a853c59f9e6dbc7',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '611eae656a853c85a9e6dbe3',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('acep-enewsletter', [
    {
      name: 'ad-slot-1',
      id: '611eb3fa6a853ca88de6dcc2',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '611eb40b9006f6e6935ca2b6',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '611eb41d6a853c9f4ce6dcd5',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '611eb42d9006f6f71a5ca2c9',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '611eb4416a853ce10de6dcfa',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '611eb4536a853c82b8e6dd0d',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '611eb4639006f60cc75ca2ee',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('ashp-midyear-daily-news', [
    {
      name: 'ad-slot-1',
      id: '61294af69006f6f0715cb16c',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-2',
      id: '61294ae06a853c3b03e6eb63',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-3',
      id: '61294aca6a853c6ed5e6eb50',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-4',
      id: '61294ab59006f659f85cb150',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-5',
      id: '61294a9d9006f684c45cb134',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-6',
      id: '61294a2f9006f6c8505cb121',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-7',
      id: '61294a179006f687f95cb10e',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('aao-hnsf', [
    {
      name: 'ad-slot-1',
      id: '611eb8f69006f615a85ca32e',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-2',
      id: '611eb9099006f621765ca341',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-3',
      id: '611eb91c6a853c196ce6dd6a',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-4',
      id: '611eb9309006f68ecc5ca35d',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-5',
      id: '611eb9466a853c2a82e6dd86',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-6',
      id: '611eb95f9006f612225ca379',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-7',
      id: '611eb97a6a853ce953e6dda2',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('asa-today', [
    {
      name: 'ad-slot-1',
      id: '612e6e496a853cc33de6eeba',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '612e6e5a6a853c2e03e6eecd',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-3',
      id: '612e6e6d9006f62ec55cb3ec',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-4',
      id: '612e6e806a853ce0f2e6eee0',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-5',
      id: '612e6e906a853c3398e6eef3',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-6',
      id: '612e6ea26a853c4c2ee6ef06',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-7',
      id: '612e6eb19006f665a95cb423',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aha-ss-international', [
    {
      name: 'ad-slot-1',
      id: '616d869148546908ebe01f1a',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '616d86ad4854694167e01f2d',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '616d86c4b5324aed0d7759f2',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '616d86d94854693cd9e01f49',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '616d86ee4854698d22e01f53',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '616d8702485469b981e01f66',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '616d87144854694cfde01f79',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('ashp-midyear-daily-news-international', [
    {
      name: 'ad-slot-1',
      id: '6189276ab0c539469106d923',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-2',
      id: '61892789b0c539f43006d93f',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-3',
      id: '61892799b701da620a276733',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-4',
      id: '618927adb701da38b1276746',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-5',
      id: '618927c3b701da1be9276759',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-6',
      id: '618927d8b0c539d67106d96d',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-7',
      id: '618927ebb701da2061276775',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('isc-enewsletter-1', [
    {
      name: 'ad-slot-1',
      id: '61af8eb0b701da6d0f277d9a',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '61af8edfb701da3cad277db6',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '61af8f08b0c539a9d206ed0d',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '61af8f3fb0c539265106ed32',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '61af8f53b701da933c277df6',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '61af8f66b0c539760606ed4e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '61af8f78b0c5393c8c06ed61',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('isc-enewsletter-2', [
    {
      name: 'ad-slot-1',
      id: '61af8fa2b0c53948e506ed74',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '61af8fb4b701dac52d277e2d',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '61af8fcbb701dabc24277e49',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '61af8fdfb0c5393c9a06ed87',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '61af8ff7b701da4f27277e65',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '61af9007b0c539121206edb5',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '61af9017b0c539fe6906edc8',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aad-enewsletter-3', [
    {
      name: 'ad-slot-1',
      id: '61bca904b0c539355006f0c3',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '61bca923b0c539345506f0f1',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '61bca93db701da0fe62781ae',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '61bca9dfb701da215f2781b8',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '61bca9f7b0c5394e4c06f116',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '61bcaa0db0c539e34406f129',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '61bcaa22b0c539db8c06f13c',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-8',
      id: '621e373db701da4a1a27ae58',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-9',
      id: '621e374fb0c5390325071af1',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-10',
      id: '621e3760b701dae37d27ae6b',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aua-daily-international', [
    {
      name: 'ad-slot-1',
      id: '62017e42b701dabcb42798d5',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '62017e5db0c5391f98070524',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '62017e72b0c539af49070537',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '62017e88b0c539e19607054a',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '62017e9cb0c5392074070554',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '62017eb2b701dacc9b27991e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '62017ec8b0c5395867070567',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-8',
      id: '62017edbb701daf8a1279931',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-9',
      id: '62017ef0b0c539613507058c',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-10',
      id: '62017f02b701da8cd7279944',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('shm-enewsletter', [
    {
      name: 'ad-slot-1',
      id: '61e9b093b0c5391c8506f699',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '61e9b0a6b701da4aa627874a',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '61e9b0b9b701dac26b27875d',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '61e9b0cab701dadc00278770',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '61e9b0e0b701da22fa278783',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '61e9b0f4b0c5395a0906f6eb',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '61e9b106b0c5391f8906f6fe',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('asa-today-2022', [
    {
      name: 'ad-slot-1',
      id: '627bed8db701da2aa527fb1d',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '627bed9db0c5391c2c076656',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '627bedb0b701da3d0427fb30',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '627bedc7b0c539b6b7076672',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '627beddab0c5391a76076685',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '627bededb701da459a27fb5e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '627bee03b701da6c9227fb71',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-8',
      id: '631b655083dec362983f185d',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-9',
      id: '631b65902b5f671c773604e5',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-10',
      id: '631b65b82b5f67e8283604f8',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('acep-enewsletter-2', [
    {
      name: 'ad-slot-1',
      id: '62d1882a7ce34bfd296458b8',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '62d188434ce45791a68a28b9',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '62d1885d4ce45790818a28cc',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '62d188797ce34b5e0a6458ef',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '62d188954ce45715148a28df',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '62d188ac7ce34b047664590b',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '62d188c14ce45703568a2904',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
