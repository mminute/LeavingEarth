const obverseText = [
  // ? Unexplored,
  'No Docking/Separating',
  'No Repairs',
];

const possibleConditons = [
  'Spaceflight Has No Ill Effects On Humans',
  'Spaceflight Has No Ill Effects On Humans',
  'Roll Die Per Astronaut.  Roll 1-3: Incapacitated',
  'Roll Die Per Astronaut.  Roll 1: Incapacitated',
];

const neighbors = {
  'earth-orbit': 5,
  'earth': null,  // Difficulty !- Earth (Lander Icon)
};

export default {
  displayName: 'Suborbital Space',
  name: 'suborbital-space',
  obverseText,
  possibleConditons,
  neighbors,
};
