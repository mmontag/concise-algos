// Creation of groups is implicit

var parents = {};
var numGroups = 0;

function union(u, v) {
  var p1 = find(u);
  var p2 = find(v);
  if (p1 != p2) {
    numGroups--;
    parents[p1] = p2;
  }
}

function find(u) {
  if (parents[u] == null) {
    numGroups++;
    parents[u] = u; // create self group
  } else if (parents[u] != u) {
    parents[u] = find(parents[u]); // path compression
  }
  return parents[u];
}
