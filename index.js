// Write your classes here
// 1.  Define a `Tree` class that will act as our parent.

//     - A `Tree` instance should take in one parameter when created, `species`,
//       and assign this to a property named `species`.

//     - A `Tree` should have a static method, `definition()`, that returns a short
//       definition of all trees.

//     > A tree is a perennial plant with an elongated stem, or trunk, supporting
//     > branches and leaves.
class Tree {
  constructor(species) {
    this.species = species;
  }
  static definition() {
    return "a short definition of all trees.";
  }
}
