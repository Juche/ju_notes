const fs = require('fs');
const path = require('path');

let filePath = './config/dataApiList.json';

filePath = path.join(process.cwd(), filePath);

let ctn = fs.readFileSync(filePath, { encoding: 'utf-8' });

ctn = JSON.parse(ctn);

for (let i in ctn) {
  let item = ctn[i];

  item.sourceDataParam.primaryKey = {
    screenInfos: [
      {
        extObject: {},
        id: item.name,
      },
    ],
  };

  item.sourceDataParam.token =  'dovaNXgBuZkm_iD236aY'
};


fs.writeFileSync(filePath, JSON.stringify(ctn, null, '\t'));
