import Graph from 'src/Graph/Graph';
import Location from 'src/GameLogic/GameBoard/Location';
import Earth from 'src/GameLogic/GameBoard/Locations/Earth';
import SuborbitalSpace from 'src/GameLogic/GameBoard/Locations/SuborbitalSpace';
import EarthOrbit from 'src/GameLogic/GameBoard/Locations/EarthOrbit';
import LunarFlyby from 'src/GameLogic/GameBoard/Locations/LunarFlyby';
import LunarOrbit from 'src/GameLogic/GameBoard/Locations/LunarOrbit';
import Moon from 'src/GameLogic/GameBoard/Locations/Moon';
import InnerPlanetsTransfer from 'src/GameLogic/GameBoard/Locations/InnerPlanetsTransfer';
import VenusFlyby from 'src/GameLogic/GameBoard/Locations/VenusFlyby';
import VenusOrbit from 'src/GameLogic/GameBoard/Locations/VenusOrbit';
import Venus from 'src/GameLogic/GameBoard/Locations/Venus';

const earth = new Location(Earth);
const subOrbit = new Location(SuborbitalSpace);
const earthOrbit = new Location(EarthOrbit);
const lunarFlyby = new Location(LunarFlyby);
const lunarOrbit = new Location(LunarOrbit);
const moon = new Location(Moon);
const innerPlanetsTrans = new Location(InnerPlanetsTransfer);
const venusFlyby = new Location(VenusFlyby);
const venusOrbit = new Location(VenusOrbit);
const venus = new Location(Venus);

const gameBoard = new Graph({
  'earth': earth.getNeighbors(),
  'suborbital-space': subOrbit.getNeighbors(),
  'earth-orbit': earthOrbit.getNeighbors(),
  'lunar-flyby': lunarFlyby.getNeighbors(),
  'lunar-orbit': lunarOrbit.getNeighbors(),
  'moon': moon.getNeighbors(),
  'inner-planets-transfer': innerPlanetsTrans.getNeighbors(),
  'venus-flyby': venusFlyby.getNeighbors(),
  'venus-orbit': venusOrbit.getNeighbors(),
  'venus': venus.getNeighbors(),
});

export default gameBoard;
