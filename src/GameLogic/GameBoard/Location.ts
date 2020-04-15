import { INeighbor } from 'src/Graph/Graph';

interface ILocation { displayName: string, name: string, neighbors: INeighbor, obverseText?: string[], possibleConditons?: string[] };

class Location {
  private displayName: string;
  private locationName: string;
  private neighbors: INeighbor;
  private obverseText: string[];
  private possibleConditons: string[];

  constructor({ displayName, name, neighbors, obverseText, possibleConditons }: ILocation) {
    this.locationName = name;
    this.displayName = displayName;
    this.neighbors = neighbors;
    this.obverseText = obverseText || [];
    this.possibleConditons = possibleConditons || [];
  }

  public getDisplayName() {
    return this.displayName;
  }

  public getName() {
    return this.locationName;
  }

  public getNeighbors() {
    return this.neighbors;
  }

  public getPossibleConditions() {
    return this.possibleConditons;
  }

  public getText() {
    return this.obverseText;
  }
}

export default Location;
