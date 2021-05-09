// Encoding function-----------------------------------------------------------------------------------------
function encode(str, shiftValue) {
  let value = '';
  shiftValue = Number(shiftValue)%26;
  if (shiftValue < 0) {                     // case for negative shift
    
    for (let i = 0; i < str.length; i++) {
      let ascii = str[i].charCodeAt();
      if  (ascii <= 90 && ascii + shiftValue >= 65) {            // for A-Z
        value += String.fromCharCode(ascii + shiftValue);

      } else if ((ascii + shiftValue) <= 64 && ascii >= 65) {
        value += String.fromCharCode(ascii + 26 + shiftValue);

      } else if (ascii <= 122 && (ascii + shiftValue) >= 97) {    // for a-z
        value += String.fromCharCode(ascii + shiftValue);

      } else if ((ascii + shiftValue) <= 96 && ascii >= 97) {
        value += String.fromCharCode(ascii + 26 + shiftValue);

      } else {                                                     // for all other signs
        value += str[i];
      }
  }; return value;
  };
  
  // case for positive shift
  for (let i = 0; i < str.length; i++) {
      let ascii = str[i].charCodeAt();
      if  (ascii >= 65 && ascii <= (90 - shiftValue)) {             // for A-Z
        value += String.fromCharCode(ascii + shiftValue);

      } else if (ascii >= (91 - shiftValue) && ascii <= 90) {
        value += String.fromCharCode(ascii - 26 + shiftValue);

      } else if (ascii >= 97 && ascii <= (122 - shiftValue)) {      // for a-z
        value += String.fromCharCode(ascii + shiftValue);

      } else if (ascii >= (123 - shiftValue) && ascii <= 122) {
        value += String.fromCharCode(ascii - 26 + shiftValue);

      } else {                                                        // for all other signs
        value += str[i];
      };
      
  };
  return value;
};



// Decoding function-------------------------------------------------------------------------------------------
function decode(str, shiftValue) {
  let value = '';
  shiftValue = Number(shiftValue)%26;
  if (shiftValue < 0) {                     // case for negative shift
    
    for (let i = 0; i < str.length; i++) {
      let ascii = str[i].charCodeAt();
      if  (ascii >= 65 && ascii <= (90 + shiftValue)) {             // for A-Z
        value += String.fromCharCode(ascii - shiftValue);

      } else if (ascii >= (91 + shiftValue) && ascii <= 90) {
        value += String.fromCharCode(ascii - 26 - shiftValue);

      } else if (ascii >= 97 && ascii <= (122 + shiftValue)) {    // for a-z
        value += String.fromCharCode(ascii - shiftValue);

      } else if (ascii >= (123 + shiftValue) && ascii <= 122) {
        value += String.fromCharCode(ascii - 26 - shiftValue);

      } else {                                                     // for all other signs
        value += str[i];
      }
  }; return value;
  };



  // case for positive shift
  for (let i = 0; i < str.length; i++) {
      let ascii = str[i].charCodeAt();
      console.log(ascii);
      if  (ascii >= 65 + shiftValue && ascii <= 90) {   // for A-Z
        value += String.fromCharCode(ascii - shiftValue);

      } else if (ascii > 64 && ascii <= 65 + shiftValue) {
        value += String.fromCharCode(ascii + 26 - shiftValue);

      } else if (ascii >= 97 + shiftValue && ascii <= 122 - shiftValue) {  // for a-z
        value += String.fromCharCode(ascii - shiftValue);

      } else if (ascii > 96 && ascii <= 97 + shiftValue) {
        value += String.fromCharCode(ascii + 26 - shiftValue);

      } else {                                                        // for all other signs
        value += str[i];
      }
  }
  return value;
};

module.exports = {encode, decode};