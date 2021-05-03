# Caesar cipher CLI tool

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool should accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

## Details:

**Basic Scope**

1. For command-line arguments could be used one of

- [https://www.npmjs.com/package/commander](https://www.npmjs.com/package/commander)
- [https://www.npmjs.com/package/minimist](https://www.npmjs.com/package/minimist)
  or any other module.

2. `Action` (**encode**/**decode**) and the `shift` are required, if one of them missed - an error should be shown, the process should exit with non-zero status code.
3. If the input file is missed - use `stdin` as an input source.
4. If the output file is missed - use `stdout` as an output destination.
5. If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - **human-friendly** error should be printed in `stderr`.
6. If passed params are fine the output (file or `stdout`) should contain encoded/decoded content of input (file or `stdin`).
7. For encoding/decoding **use only the English alphabet**, all other characters should be kept untouched.
8. Using `streams` for reading, writing and transformation of text **is mandatory**.
9. The tool must work correctly with an integer values of `shift (-s, --shift)` that are **greater than alphabet length**.

**Advanced Scope**

1. The tool must work correctly with an integer values of `shift (-s, --shift)` that are **lower than zero**.

**Hints:**
As suggested solution to make streams code more robust, and memory effective, consider to use [pipeline method](https://nodejs.org/api/stream.html#stream_stream_pipeline_streams_callback).
Structure can be the following:

```javascript
pipeline(
  input_stream, // input file stream or stdin stream
  transform_stream, // Transform stream
  output_stream // output file stream or stdout stream
)
.then(success and error callbacks)
```

**Usage example:**  
1. _-a (--action)_ is **encode**

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  
_Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

3. _(Optional) Negative shift handling_

```bash
$ node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`