const fs = require('fs');
const {pipeline} = require('stream');
const { Transform } = require('stream');
const yargs = require('yargs');

const encodingFunctions = require('./encodingFunctions.js');
const {encode, decode} = encodingFunctions;

//-------------------------------------------------------------

let inputFile;
let outputFile;
let shiftValue;

// is there -a --action -s --shift ?
let actionArg;
let shiftArg;
if (!yargs.argv.a || yargs.argv.a === true) {
  if (!yargs.argv.action || yargs.argv.action === true) {
  actionArg = false;
  }
};

if (!yargs.argv.s || yargs.argv.s === true) {
  if (!yargs.argv.shift || yargs.argv.shift === true) {
  shiftArg = false;
  } 
};

// encode or decode option determination
let transformDataStream;
if (yargs.argv.a === 'encode' || yargs.argv.a === 'encode') {
  transformDataStream = () => {
    return new Transform({
      transform(chunk, enc, cb) {
        const transformedData = encode(chunk.toString(), shiftValue);
        cb(null, transformedData)
      }
    })
  };
};

if (yargs.argv.a === 'decode' || yargs.argv.a === 'decode') {
  transformDataStream = () => {
    return new Transform({
      transform(chunk, enc, cb) {
        const transformedData = decode(chunk.toString(), shiftValue);
        cb(null, transformedData)
      }
    })
  };
};

const chiffre = transformDataStream();



if (actionArg === false || shiftArg === false ) {     //there are not -a --action -s --shift
    console.error("Error, no mandatory args!");
    process.exit(1);
} else {                                              //there are  -a --action -s --shift
      yargs.argv.s ? shiftValue = yargs.argv.s : shiftValue = yargs.argv.shift;
      
      if (!yargs.argv.i || yargs.argv.i === true) {             // is there an input file?
        if (!yargs.argv.input || yargs.argv.input === true) {
          inputFile = false;                                      //no input file
        }
      } else {                                                    // input file is there
        inputFile = true;

      proveFileExistenzAndAccessRights(yargs.argv.i, function(err, isReadable) {
          if (!isReadable) {
            process.stderr.write('file not readable!');
            process.exit(1);
          } 
        }); 
      };

    if ( !yargs.argv.o || yargs.argv.o === true ) {        // is there an output file?                         
      if (!yargs.argv.output || yargs.argv.output === true) {
        outputFile = false;                                       //no output file
      }                               
    } else {                                                        // output file is there
      outputFile = true;

    proveFileExistenzAndAccessRights(yargs.argv.o, function(err, isReadable) {
        if (!isReadable) {
          process.stderr.write('file not readable!');
          process.exit(1);
        } 
      }); 
     };
  
  

  pipeline(
    inputFile ?  fs.createReadStream('./readFile.txt', 'utf-8') :  process.stdin.on('readable', () => {
      var chunk = process.stdin.read();}), 
    chiffre, 
    outputFile ?  fs.createWriteStream('./writeFile.txt') :  process.stdout.on('writable', () => {
      var chunk = process.stdout.write();}), 
    (error) => {
      if (error) {console.log('error occured!')};
  });
}; 

function proveFileExistenzAndAccessRights (filePath, callback) {
  if (!fs.existsSync(filePath)) {
    process.stderr.write('no such file!'); 
  };
  fs.access(filePath, fs.R_OK, function(err) {
    callback(null, !err);
  });
};


// node index -a encode -s 5 -i './readFile.txt' -o "./writeFile.txt"