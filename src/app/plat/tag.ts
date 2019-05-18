enum Tag {
  vegetarien,
  vegan,
  halal,
  casher
}

// tslint:disable-next-line:no-namespace
namespace Tag {
  export function names(): string[] {
    return Object.keys(Tag);
  }
}
