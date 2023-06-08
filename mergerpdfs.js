const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const pdfmerge = async (a,b) => {
  await merger.add(a);
  await merger.add(b); 
  let d = new Date().getTime();
  
  await merger.save(`result/${d}.pdf`); 
  return d;
};

module.exports = {pdfmerge};