const obverseText = [
  'No Docking/Separating',
  'Free Repair At End Of Round',
  'Do Not Consume Supplies',
];

const neighbors = {
  'suborbital-space': 3,
  'earth-orbit': 8,
};

export default {
  displayName: 'Earth',
  name: 'earth',
  obverseText,
  neighbors,
};
