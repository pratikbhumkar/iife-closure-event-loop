// Here not using IIFE, var creates a global variable with var
// it changes i to 3 as Event loop is scheduled and we see
// (We’re at 3 ) *3
for (var i = 0; i < 3; i++) {
  setTimeout((_) => console.log(`We’re at ${i}`), 100);
}

// Here using IIFE, var creates a global variable with var
// it uses the js closure to reuse the value of index.
// Outcome:
// Holler from IIFE We’re at 0
// Holler from IIFE We’re at 1
// Holler from IIFE We’re at 2
for (var index = 0; index < 3; index++) {
  (function (index, yo) {
    setTimeout((_) => console.log(`Holler from IIFE We’re at ${index}`), 100);
  })(index);
}

const User = (() => {
  let username = "";
  return {
    setName: (name) => {
      username = name;
    },
    getName: () => {
      return username;
    }
  };
})();

const testUser = User;
testUser.setName("tester1");
console.log(`Holler from ${testUser.getName()}`);
