const fs = require('fs');
const path = require('path');
const logsDir = path.join(process.cwd(), 'Logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}
process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  const text = `Hello this is David${i} Test1.`;
  fs.writeFileSync(fileName, text);
  console.log(fileName);
}