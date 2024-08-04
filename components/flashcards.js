const fs = require('fs');
const csv = require('csv-parser');

const inputFile = '/Users/nick/Downloads/PermitTest.csv';
const outputFile = 'QA.json';

const data = [];

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    // Assuming the CSV file has columns 'question' and 'answer'
    const question = row.question.trim();
    const answer = row.answer.trim();
    data.push({ question, answer });
  })
  .on('end', () => {
    // Convert the data array to a JSON object
    const jsonData = {};
    data.forEach((item) => {
      jsonData[item.question] = item.answer;
    });
    fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));

    console.log(`Conversion complete. Output saved to ${outputFile}`);
  })
  .on('error', (error) => {
    console.error('Error:', error.message);
  });