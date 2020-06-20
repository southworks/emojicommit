export const colors = [
  'indigo',
  'blue',
  'red',
  'orange',
  'teal',
  'yellow',
  'green',
  'purple',
  'pink',
];

export const random = (): number => {
  const x = Math.sin(new Date().getMilliseconds()) * 10000;
  return x - Math.floor(x);
};

export const colorComplement = (color: string): string => {
  const rand = random() > 0.5;
  switch (color) {
    case 'red':
      return rand ? 'teal' : 'yellow';
    case 'orange':
      return rand ? 'purple' : 'green';
    case 'blue':
      return rand ? 'blue' : 'orange';
    case 'indigo':
      return rand ? 'pink' : 'orange';
    case 'teal':
      return rand ? 'green' : 'red';
    case 'green':
      return rand ? 'teal' : 'pink';
    case 'purple':
      return rand ? 'orange' : 'red';
    case 'pink':
      return rand ? 'yellow' : 'green';
    case 'yellow':
      return rand ? 'purple' : 'blue';
    default:
      return 'teal';
  }
};
