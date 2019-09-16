var edge = require('edge');
var helloDll = edge.func({
  assemblyFile: "Echo.dll",
  typeName: "Example.Greetings",
  methodName: "Greet"
});
