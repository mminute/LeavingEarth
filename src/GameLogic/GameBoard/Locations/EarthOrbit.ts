const neighbors = {
  'mars-orbit': 5, // 3x(Time Icon)(Radiation Icon)- Mars Orbit
  'mars-flyby': 3, // 3x(Time Icon)(Radiation Icon)- Mars Flyby
  'inner-planets-transfer': 3, // (Time Icon) Inner
  // 'outer-planets-transfer': 6, // (Time Icon)(Radiation Icon) Outer
  // Expansion game only for outer planets transfer?
  'lunar-orbit': 3, // (Optional Time Icon)- Lunar Orbit
  'lunar-flyby': 1, // (Optional Time Icon)- Lunar Flyby
};

export default {
  displayName: 'Earth Orbit',
  name: 'earth-orbit',
  neighbors,
};
