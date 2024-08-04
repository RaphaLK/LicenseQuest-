const fs = require('fs');
const Papa = require('papaparse');

const inputFile = 'components/parsetest.csv';
const outputFile = 'QA.json';

const data = [];

// Read the CSV file using PapaParse
fs.readFile(inputFile, 'utf8', (err, fileData) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }

  Papa.parse(fileData, {
    header: true,
    delimeter: "",//automatic detect delimiter 
    newline: "",
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: (result) => {
      // Process each row
      result.data.forEach((row) => {
        let k = row.question.split('#').join(',');
        let j = row.answer.split('#').join(',');
        data.push({ "question":k, "answer":j });
      });

      // Convert the data array to a JSON object
      const jsonData = {};
      data.forEach((item) => {
        jsonData[item.question] = item.answer;
      });

      // Write the JSON object to a file
      fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));

      console.log(`Conversion complete. Output saved to ${outputFile}`);
    },
    error: (error) => {
      console.error('Error:', error.message);
    },
  });
});