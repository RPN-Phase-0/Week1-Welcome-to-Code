//Belajar looping
//Choosing type of loop depend on cases. "for loop" and For...of match for array,
//"while" for dynamic condition, for...in for object. Always ensure condition loop can be granted to avoid infinite loop.
//Points that must be understand:
// Learn indexing on String and Array
// Flow looping
// Arah looping
// must create something that makes loop stop (except special infinite loop is needed)
// avoid infinite loop if not necessary
// play condition on looping
// undersatnd flow nested loop (main key)

//Keyword on indexing is:
// Index always start from 0, nothing else
// if you wanna touch item/element/letter last/right side use lenght - 1 on index

//INTRODUCTION LOOPING
// 1. Basic concept of Looping
// looping is process iteration of execution block code along certain condition granted.
// imagine a robot which lift box from a truck until nothing left. every iteration is
// once lift a box, and stop condition is "empty truck"
// [Start]  
//   ↓  
// [Kondisi?] → True → [Eksekusi Blok Kode] → [Update Variabel]  
//   ↓ False  
// [End]

// 2. For Loop
// used when how many times iteration has been known. the process is structural :
// 1) initiation : prepared count variable.
// 2) condition : check if iteration may continue.
// 3) update : add/minus value counter.
// for instance :
for (let i = 0; i < 3; i++) {
    console.log(i); // Output: 0, 1, 2
  }
// execution path :
// i=0 → 0 < 3? ✅ → Log 0 → i++ (i=1)  
// i=1 → 1 < 3? ✅ → Log 1 → i++ (i=2)  
// i=2 → 2 < 3? ✅ → Log 2 → i++ (i=3)  
// i=3 → 3 < 3? ❌ → STOP


// 3. While Loop
