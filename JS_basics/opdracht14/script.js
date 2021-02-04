const paintWallsRed = () => console.log("the wall has been painted red");

const paintWalls = color => console.log(`the wall has been painted ${color}`);

const paintMultipleWalls = ( location, color) => console.log(`the ${location} wall has been painted ${color}`)

paintWallsRed()
paintWalls('green')
paintMultipleWalls( 'north', 'yellow')