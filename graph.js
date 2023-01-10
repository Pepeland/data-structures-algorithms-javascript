const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(' ');
const adjacencyList = new Map();

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];

function addNode(airport) {
    adjacencyList.set(airport, []);
}

// add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);

function hasRoute(origin, destination) {

}

function dfs(start, visited = new Set()) {
    console.log(start);
    visited.add(start);

    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {
        if(destination === 'BKK'){
            console.log('DFS found Bangkok in steps');
            return;
        }
        if(!visited.has(destination)) {
            dfs(destination, visited);
        }
    }
}

dfs('PHX');


