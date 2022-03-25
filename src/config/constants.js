export const IS_DEVELOPMENT = process.env.REACT_APP_ENV === 'dev';
export const API_URL = process.env.REACT_APP_API_URL;

export const PRIORITIES = [
  {
    value: 2,
    label: 'High',
    icon: '🔴',
  },
  {
    value: 1,
    label: 'Medium',
    icon: '🟡',
  },
  {
    value: 0,
    label: 'Low',
    icon: '🔵',
  },
];

export const INPUT_STYLES = {
  height: '40px',
  padding: '10px',
  margin: '10px',
  width: '200px',
};
