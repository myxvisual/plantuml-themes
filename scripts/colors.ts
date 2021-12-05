const hexSingleValue = 255 / 10;

let hexValues: [string, string][] = [];
/**
 * results
 * [
 *     [ '00', '00' ],
 *     [ '01', '19' ],
 *     [ '02', '33' ],
 *     [ '03', '4c' ],
 *     [ '04', '66' ],
 *     [ '05', '7f' ],
 *     [ '06', '99' ],
 *     [ '07', 'b2' ],
 *     [ '08', 'cc' ],
 *     [ '09', 'e5' ],
 *     [ '10', 'ff' ]
 * ];
 */

hexValues.push(["00", "00"]);
for (let i = 1; i < 10; i++) {
    const hex = Math.floor(i * hexSingleValue).toString(16);
    const key = `0${i}`;
    hexValues.push([key, hex]);
}
hexValues.push(["10", "ff"]);

console.log(hexValues);