// Based on https://github.com/codenameyau/graph.js
interface INeighbor { [k: string]: number };
interface INeighbors { [k: string]: INeighbor };

class Graph {
  // The Graph looks like:
  // { nodeName: { neighbor1: weight, neighbor2: weight } }
  private graph: INeighbors;

  constructor(neighbors: INeighbors) {
    this.graph = {};
    this.populateGraph(neighbors);
  }

  public populateGraph(neighbors: INeighbors) {
    for (const k in neighbors) {
      if (neighbors.hasOwnProperty(k)) {
        this.addVertex(k);
        this.addNeighbors(k, neighbors[k]);  
      }
    }
  }

  public hasVertex(k: string) {
    return this.graph.hasOwnProperty(k);
  }

  public getGraph() {
    return this.graph;
  }

  private addVertex(k: string) {
    if (!this.hasVertex(k)) {
      this.graph[k] = {};
    }
  }

  private addNeighbors(vertex: string, neighbors: INeighbor) {
    Object.keys(neighbors).forEach((neighbor) => {
      const weight = neighbors[neighbor];
      this.addVertex(neighbor);
      this.addEdge(vertex, neighbor, weight);
    });
  }

  private addEdge(vertex: string, neighbor: string, weight: number) {
    this.graph[vertex][neighbor] = weight;
  }
};

export default Graph;

// TODO: Maybe implement these methods if needed-
// ===================================
// Graph public methods:
// ===================================
// Graph.prototype.getSize = function() {
//   return this.getObjectSize(this.graph);
// };
// Graph.prototype.getSizeNeighbors = function(vertex) {
//   return this.getObjectSize(this.graph[vertex]);
// };
// Graph.prototype.pathExists = function(start, target) {
//   // Perform BFS
//   var queue = [start];
//   var visited = {start: 1};
//   while (queue.length > 0) {
//     var current = queue.shift();
//     if (current === target) { return true; }
//     for (var node in this.graph[current]) {
//       if (!visited.hasOwnProperty(node)) {
//         visited[node] = 1;
//         queue.push(node);
//       }
//     }
//   }
//   return false;
// };
// ===================================
// Graph vertex methods:
// ===================================
// Graph.prototype.getNeighbors = function(name) {
//   return this.graph[name];
// };
// ===================================
// Graph edge methods:
// ===================================
// Graph.prototype.hasEdge = function(vertex, neighbor) {
//   return this.graph[vertex].hasOwnProperty(neighbor);
// };
// Graph.prototype.getWeight = function(vertex, neighbor) {
//   return this.graph[vertex][neighbor];
// };
// ===================================
// Graph internal methods:
// ===================================
// Graph.prototype.getObjectSize = function(object) {
//   return Object.keys(object).length;
// };
