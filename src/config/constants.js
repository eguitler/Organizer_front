export const IS_DEVELOPMENT = process.env.REACT_APP_ENV === 'dev';
export const API_URL = process.env.REACT_APP_API_URL;

export const PRIORITIES = [
  {
    value: 0,
    label: 'Low',
    icon: '💧',
  },
  {
    value: 1,
    label: 'Medium',
    icon: '➖',
  },
  {
    value: 2,
    label: 'High',
    icon: '🔥',
  },
];
