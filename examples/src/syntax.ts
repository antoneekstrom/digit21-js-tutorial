
/**
 * 
 * Typescript syntax examples some things.
 * 
 * You can try like making the code wrong or something and see that typescript is angry when you are wrong.
 * In contrast to javascript who don't care about you at all, even when wrong 😭
 * 
 * If anything here seems interesting you should probably look it up elsewhere also to get a good understanding.
 * 
 * Some things to note:
 * Typescript needs to be compiled/transpiled into javascript in order to run in the browser.
 * There are several compilers, examples are babel and the official typescript "tsc" compiler
 * Most js bundlers do it for you nowadays 
 * 
 */

// You can "type annotate" in TS
let plupp: number = 7;

// Often you don't need to explicitly define types, as TS infers it
let plopp = "string"; // hover over "plopp" and you can see what type it is

// Define types of arguments and return
function tuta(ochKör: boolean): string {
   return `tut${ochKör && ' vroom'}`;
}

// Define a type
type Plupp = {
   plupp: string
   plopp?: number // ":?" means that this property is optional
   plipp: { // Nested objects!!
      snor: string[]
   }
}

// Using object types gives us typechecking if for example we forget a property
const typedPlupp: Plupp = {
   plupp: "pluppp",
   plipp: {
      snor: ["a", "b", "c"]
   }
}

// Union types
type UnionType = Plupp | string;
// you can define a type as any other type
type CoolString = string;

type Apa = {
   size: 'small' | 'medium' | 'large'
   type: 'gorilla' | 'orange tang' | 'some other monkey'
}

// I dont know what these are called, but it merges multiple object types
type PluppApa = Plupp & Apa;

const pluppigApa: PluppApa = {
   plupp: "",
   size: 'large',
   type: "orange tang",
   plopp: 7,
   plipp: {
      snor: []
   }
}

// dont forget object destructuring which is very cool and useful
const { size, type } = pluppigApa;

// there are also special built-in types!!

// makes all properties required, there is also Optional
type ImportantPluppApa = Required<PluppApa>;

// you can omit properties
type CoolImportantPluppApa = Omit<ImportantPluppApa, 'type' | 'plipp'>

// there are a lot more of them

// Interfaces are almost identical to types, the difference has something to do with classes im pretty sure
interface GorillaHuman {
   humanName: string
   gorillaName: string
   age: number
   getPassport(): Passport | undefined
}

type Passport = { legalName: string; birthday: Date; }

// Classes can implement both types and interfaces
class RealGorillaHuman implements GorillaHuman {

   // there are static variables (and methods), this one is also readonly
   private static readonly ILLEGITIMATE_PASSPORT: Passport = {
      birthday: new Date(1784, 1),
      legalName: 'Mr. TheRealGorilla'
   }

   // by prefixing constuctor arguments with "private" or "public" these fields are automatically set as properties on the class
   constructor(
      public humanName: string,
      public gorillaName: string,
      public age: number,
      private passport?: Passport
   ) {
      console.log(RealGorillaHuman.gorillaSound());
   }

   // static method
   private static gorillaSound() {
      return "*aggressive gorilla sounds*"
   }

   getPassport(): Passport | undefined {
      if (!this.passport) {
         return RealGorillaHuman.ILLEGITIMATE_PASSPORT;
      }
      return Math.random() < 0.5 ? this.passport : RealGorillaHuman.ILLEGITIMATE_PASSPORT;
   }
}