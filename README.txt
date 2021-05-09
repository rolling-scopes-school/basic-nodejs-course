---------------------------------Caesar Cipher CLI Tool-----------------------------------------------

Allows to encode/decode a string message.


Usage example:

---'./readFile.txt' Content :   

'This is a message to encode/decode'


---encoding message with the shift of 5:

node index -a encode -s 5 -i './readFile.txt' -o './writeFile.txt'


---result in './writeFile.txt' file:

'Ymnx nx f rjxxflj yt jshtij/ijhtij'


Parameter options in command line:

                  Value                             Example                

-a, --action     encode or decode                   encode

-s, --shift      number (positive or negative)      12

-i, --input      inputfile path                     './readFile.txt'

-o, --output     outputfile path                    './writeFile.txt'