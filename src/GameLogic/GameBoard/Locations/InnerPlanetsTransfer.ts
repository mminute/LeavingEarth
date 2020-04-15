const neighbors = {
  'earth-orbit': 3, // (Time Icon) Earth Orbit
  'mercury-flyby': 5, // (Time Icon)(Radiation Icon) Mercury Flyby
  'venus-flyby': 2, // (Time Icon)(Radiation Icon) Venus Flyby
  'venus-orbit': 3, // (Time Icon)(Radiation Icon) Venus Orbit
  'ceres': 5, // (Time Icon)(Radiation Icon)(Lander Icon)(Ceres Icon) Ceres
  'mars-orbit': 4, // (2x Time Icon)(Radiation Icon) Mars Orbit
};

export default {
  displayName: 'Inner Planets Transfer',
  name: 'inner-planets-transfer',
  neighbors,
};
