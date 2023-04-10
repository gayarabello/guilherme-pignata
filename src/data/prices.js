const SERVICES_TYPES = {
  PT: {
    id: 'personal-training',
    value: "PERSONAL TRAINING"
  },
  HC: {
    id: 'health-coach',
    value: "HEALTH COACH"
  },
};
export const PRICES = [
  {    
    id: SERVICES_TYPES.PT.id,
    type: SERVICES_TYPES.PT.value,
    online: true,
    prices: {
      basic: {
        trimestral: 360,
        monthly: 400,
      },
      full: {
        trimestral: 620,
        monthly: 730,
      },
    },
  },
  {    
    id: SERVICES_TYPES.PT.id,
    type: SERVICES_TYPES.PT.value,
    online: false,
    prices: {
      basic: {
        trimestral: 430,
        monthly: 500,
      },
      full: {
        trimestral: 780,
        monthly: 880,
      },
    },
  },
  {
    id: SERVICES_TYPES.HC.id,
    type: SERVICES_TYPES.HC.value,
    online: true,
    prices: {
      basic: {
        trimestral: 430,
        monthly: 500,
      },
      full: {
        trimestral: 780,
        monthly: 880,
      },
    },
  },
];

export const SERVICES = [
  {
    id: 1,
    type: SERVICES_TYPES.PT,
    value:
      "Four 10-12 min calls a month (one a week, can not be rolled over) for Q&A",
  },
  {
    id: 2,
    type: SERVICES_TYPES.PT,
    value: "On-going body composition assessment / Progress tracking",
  },
  {
    id: 3,
    type: SERVICES_TYPES.PT,
    value:
      "Exercise plan periodised monthly with program delivered weekly straight to your phone with video demos and descriptions, and progress tracking: you train wherever and whenever you want, and stay on track",
  },
  {
    id: 4,
    type: SERVICES_TYPES.PT,
    value:
      "45-60 min online session for exercises demonstration, adjustments, updates and followup",
    basic: 1,
    full: 4,
  },
  {
    id: 5,
    type: SERVICES_TYPES.HC,
    value:
      "Monthly 45-60 minute online consultation for general habits (eating, moving, sleeping) advice and suggestions, evaluate progress, and identify new areas for development.",
  },
  {
    id: 6,
    type: SERVICES_TYPES.HC,
    value:
      "Exercise plan periodised monthly with program delivered weekly straight to your phone with video demos, descriptions, and progress tracking",
  },
  {
    id: 7,
    type: SERVICES_TYPES.HC,
    value: "Weekly 10-12 min call for habit tracking and Q&A",
  },
  {
    id: 8,
    type: SERVICES_TYPES.HC,
    value: "Ongoing food diary evaluation",
  },
  {
    id: 9,
    type: SERVICES_TYPES.HC,
    value: "On-going body composition assessment / Progress tracking",
  },
  {
    id: 10,
    type: SERVICES_TYPES.HC,
    value:
      "3-months Assessment call (45-60min) for analysing progresses and defining next steps*",
  },
  {
    id: 11,
    type: SERVICES_TYPES.HC,
    value:
      "45-60 min personal training session for exercise demonstration, adjustments and updates",
    basic: 1,
    full: 4,
  },
];
