import {
  
  checked,
  commissions,
  rocket,
  exchange,
  phone,
  GooglePlay,
  Appstore
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Get Started",
  },
  {
    id: "contact",
    title: "Contact",
  },
];








export const newFeatures = [
  {
    id:"1",
    subtext: 'Quick Onboarding',
    imgUrl: checked
  },
  {
    id:"2",
    subtext: 'Manage Receivers',
    imgUrl: checked
  },
  {
    id:"3",
    subtext: 'Track Your Transfers',
    imgUrl: checked
  },
  
];

export const reasons = [
  {
    id:"1",
    subtext: 'Flexible & Easy',
    imgUrl: checked
  },
  {
    id:"2",
    subtext: 'Safe Transfers',
    imgUrl: checked
  },
  
  {
    id:"3",
    subtext: 'Tested Reliability',
    imgUrl: checked
  },
]

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/banner2.png',
    title: 'Sydney, Australia',
  },
  {
    id: 'world-2',
    imgUrl: '/banner1.jpeg',
    title: 'United Kingdom',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Nigeria',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Shangai, China',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'New York, USA',
  },
];

const services = [
  {
    title: "No charges | No commision",
    icon: commissions,
  },
  {
    title: "Fast Transfers",
    icon: rocket,
  },
  {
    title: "Competitive Exchange Rates",
    icon: exchange,
  },
  {
    title: "Transfer on your Mobile Device",
    icon: phone,
  },
];



const startingFeatures = [


{
  id:"1",
  text: 'Create Account',
  subtext: "Download our app and signup within minutes. It's easy and free",
  imgUrl: rocket
},
{
  id:"2",
  text: 'Set up a transfer',
  subtext: "Add beneficiary and enter an amount to send or amount to receive in foreign currency.",
  imgUrl: rocket
},
{
  id:"3",
  text: 'Pay securely',
  subtext: "Pay using Bank Transfer. This is the most secure and quickest way to receive your payment.",
  imgUrl: rocket
},
{
  id:"4",
  text: 'Track your transfers',
  subtext: "Track your transfer from the app. We payout to beneficiary as promised in delivery method.",
  imgUrl: rocket
},

  // {
  //   id:"1",
  //   text: 'Quick Onboarding',
  //   // imgUrl: GooglePlay
  // },
  // {
  //   id:"2",
  //   text: 'Manage Receivers',
  //   // imgUrl: Appstore
  // },
  // {
  //   id:"3",
  //   text: 'Track Your Transfers',
  //   // imgUrl: rocket
  // },
  // {
  //   id:"4",
  //   text: 'Tested Reliability',
  //   // imgUrl: rocket
  // },
  // {
  //   id:"5",
  //   text: 'Flexible & Easy',
  //   // imgUrl: rocket
  // },
];






export { services, startingFeatures };
