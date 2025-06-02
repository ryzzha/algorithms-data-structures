class Graph {
    adjacencyList: Record<string, string[]> = {};
  
    addVertex(vertex: string): void {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(v1: string, v2: string): void {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  
    removeEdge(v1: string, v2: string): void {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
  
    removeVertex(vertex: string): void {
      while (this.adjacencyList[vertex]?.length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        if (adjacentVertex) this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  
    dfs(start: string, visited = new Set<string>()): void {
      if (!start || visited.has(start)) return;
      visited.add(start);
      console.log(start);
      for (const neighbor of this.adjacencyList[start]) {
        this.dfs(neighbor, visited);
      }
    }
  
    bfs(start: string): void {
      const queue = [start];
      const visited = new Set<string>([start]);
  
      while (queue.length > 0) {
        const vertex = queue.shift()!;
        console.log(vertex);
  
        for (const neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  