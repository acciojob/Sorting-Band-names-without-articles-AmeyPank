//your code here
const bandNames =  ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function stripArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '').trim();
}

const sortedBands = bandNames.sort((a, b) => stripArticles(a) > stripArticles(b) ? 1 : -1);

const bandList = document.querySelector('#band');
bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

