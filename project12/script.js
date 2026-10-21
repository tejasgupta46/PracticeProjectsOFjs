
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function stripArticle(band) {
    // this is doing it removes articles like the, an , a and compare without article according to alphabetical order or sort 
  return band.replace(/^(a |an |the )/i, ''); 
}

bands.sort((a, b) =>
  stripArticle(a).localeCompare(stripArticle(b))
);

bands.forEach((val)=> console.log(val))