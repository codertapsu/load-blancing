import express from 'express';
import { generateKeyPair } from 'crypto';
import cors from 'cors';

const port = 8000 + Number(process.env.NODE_APP_INSTANCE! || 0);
const app = express();

app.use(
  cors({
    origin: '*',
  }),
);

interface Order {
  id: number;
  name: string;
  email: string;
  total: string;
  status: string;
  date: string;
}

const dataMock: Order[] = [
  {
    id: 1901,
    name: 'Marvin McKinney',
    email: 'marvin@example.com',
    total: '$9.00',
    status: 'Pending',
    date: '03.12.2019',
  },
  {
    id: 2300,
    name: 'Leslie Alexander	',
    email: 'leslie@example.com	',
    total: '$46.61	',
    status: 'Pending',
    date: '21.02.2020',
  },
  {
    id: 1233,
    name: 'Esther Howard	',
    email: 'esther@example.com	',
    total: '$12.00	',
    status: 'Canceled',
    date: '03.07.2020	',
  },
  {
    id: 1234,
    name: 'Esther Alexander	',
    email: 'esader@example.com	',
    total: '$19.00	',
    status: 'Canceled',
    date: '09.07.2020	',
  },
  {
    id: 2323,
    name: 'Jenny Wilson	',
    email: 'jenny@example.com	',
    total: '$589.99',
    status: 'Received',
    date: '22.05.2020	',
  },
  {
    id: 2112,
    name: 'Marvin McKinney	',
    email: 'marvin@example.com	',
    total: '$16.58',
    status: 'Received',
    date: '23.04.2020	',
  },
  {
    id: 7897,
    name: 'Albert Flores	',
    email: 'albertn@example.com	',
    total: '$10.00',
    status: 'Received',
    date: '13.03.2020	',
  },
  {
    id: 2322,
    name: 'Wade Warren	',
    email: 'waden@example.com	',
    total: '$105.55',
    status: 'Received',
    date: '23.09.2020	',
  },
  {
    id: 2324,
    name: 'Jane Cooper',
    email: 'jane@example.com	',
    total: '$710.68',
    status: 'Received',
    date: '28.04.2020	',
  },
  {
    id: 2325,
    name: 'Savannah Nguyen',
    email: 'savannah@example.com	',
    total: '$451.16',
    status: 'Received',
    date: '23.04.2020	',
  },
  {
    id: 2326,
    name: 'Guy Hawkins',
    email: 'guy@example.com	',
    total: '$767.50',
    status: 'Received',
    date: '22.04.2020	',
  },
  {
    id: 2327,
    name: 'Darrell Steward',
    email: 'darrel@example.com	',
    total: '$406.27',
    status: 'Received',
    date: '13.08.2020	',
  },
  {
    id: 2328,
    name: 'Jane Cooper',
    email: 'jane@example.com	',
    total: '$601.13',
    status: 'Received',
    date: '18.03.2020	',
  },
  {
    id: 2329,
    name: 'Darlene Robertson	',
    email: 'darlene@example.com	',
    total: '$948.18',
    status: 'Received',
    date: '02.02.2020	',
  },
  {
    id: 2330,
    name: 'Gol D.Ace',
    email: 'portgas@example.com',
    total: '$512.26',
    status: 'Received',
    date: '22.03.2020',
  },
  {
    id: 2331,
    name: 'Monkey D.Luf',
    email: 'monkey@example.com',
    total: '$981.52',
    status: 'Received',
    date: '13.01.2020',
  },
  {
    id: 2332,
    name: 'Nio Robin',
    email: 'nior@example.com',
    total: '$202.13',
    status: 'Received',
    date: '12.05.2020',
  },
  {
    id: 2333,
    name: 'Red Shank',
    email: 'shank@example.com',
    total: '$612.65',
    status: 'Received',
    date: '11.04.2020',
  },
  {
    id: 2334,
    name: 'Edward Negate',
    email: 'edward@example.com',
    total: '$853.26',
    status: 'Received',
    date: '06.06.2020',
  },
  {
    id: 2335,
    name: 'Tony Chopper',
    email: 'tony@example.com',
    total: '$153.26',
    status: 'Pending',
    date: '05.05.2020',
  },
  {
    id: 2335,
    name: 'Boa Hancock',
    email: 'boa@example.com',
    total: '$659.43',
    status: 'Canceled',
    date: '02.10.2021',
  },
  {
    id: 2336,
    name: 'Dracula Mihawk',
    email: 'mihawk@example.com',
    total: '$641.65',
    status: 'Pending',
    date: '09.08.2019',
  },
  {
    id: 2337,
    name: 'Vinsmoke Sanji',
    email: 'sanji@example.com',
    total: '$465.36',
    status: 'Pending',
    date: '19.06.2020',
  },
  {
    id: 2338,
    name: 'Water Law',
    email: 'law@example.com',
    total: '$458.19',
    status: 'Received',
    date: '23.05.2019',
  },
  {
    id: 2339,
    name: 'Premium Buggy',
    email: 'buggy@example.com',
    total: '$749.88',
    status: 'Pending',
    date: '03.05.2020',
  },
  {
    id: 2340,
    name: 'SoldKin Usopp',
    email: 'usopp@example.com',
    total: '$849.15',
    status: 'Pending',
    date: '05.09.2020',
  },
  {
    id: 2341,
    name: 'Sergeant Cobby',
    email: 'cobby@example.com',
    total: '$946.53',
    status: 'Pending',
    date: '16.03.2020',
  },
  {
    id: 2342,
    name: 'Aokiji Kuzan',
    email: 'kuzan@example.com',
    total: '$626.94',
    status: 'Pending',
    date: '25.06.2020',
  },
  {
    id: 2343,
    name: 'Musician Brook',
    email: 'brook@example.com',
    total: '$486.28',
    status: 'Pending',
    date: '24.07.2020',
  },
  {
    id: 2344,
    name: 'Moa Jinbei',
    email: 'jinbei@example.com',
    total: '$235.68',
    status: 'Pending',
    date: '26.02.2020',
  },
  {
    id: 2345,
    name: 'Junko Sabo',
    email: 'sabo@example.com',
    total: '$574.46',
    status: 'Pending',
    date: '28.07.2020',
  },
  {
    id: 2346,
    name: 'Monk Dragon',
    email: 'dragon@example.com',
    total: '$132.35',
    status: 'Pending',
    date: '06.08.2020',
  },
  {
    id: 2347,
    name: 'Docs Dore',
    email: 'doream@example.com',
    total: '$844.66',
    status: 'Pending',
    date: '09.08.2020',
  },
  {
    id: 2348,
    name: 'Cun Wantana',
    email: 'wantana@example.com',
    total: '$136.58',
    status: 'Pending',
    date: '10.08.2020',
  },
  {
    id: 2349,
    name: 'Align Conte',
    email: 'conte@example.com',
    total: '$562.66',
    status: 'Canceled',
    date: '12.08.2020',
  },
  {
    id: 2350,
    name: 'Same Frank',
    email: 'franky@example.com',
    total: '$568.12',
    status: 'Canceled',
    date: '15.08.2020',
  },
  {
    id: 2351,
    name: 'Kai Baron',
    email: 'baron@example.com',
    total: '$436.28',
    status: 'Canceled',
    date: '25.08.2020',
  },
  {
    id: 2352,
    name: 'Limo Teem',
    email: 'teemconte@example.com',
    total: '$232.69',
    status: 'Canceled',
    date: '02.09.2020',
  },
  {
    id: 2353,
    name: 'Van Verse',
    email: 'verse@example.com',
    total: '$351.23',
    status: 'Canceled',
    date: '10.09.2020',
  },
  {
    id: 2354,
    name: 'Math Liu',
    email: 'liu@example.com',
    total: '$582.34',
    status: 'Canceled',
    date: '12.09.2020',
  },
  {
    id: 2355,
    name: 'Hight Foam',
    email: 'foam@example.com',
    total: '$659.99',
    status: 'Canceled',
    date: '18.09.2020',
  },
];

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

console.log(`Worker ${process.pid} started`);

// Send public key as a response
app.get('/api/key', (req, res) => {
  generateKeyPair(
    'rsa',
    {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: 'top secret',
      },
    },
    (err, publicKey, privateKey) => {
      // Handle errors and use the
      // generated key pair.
      res.send(publicKey);
    },
  );
});

app.get('/api/orders/:id', async (req, res) => {
  await sleep(3000);
  const id = req.params.id;
  res.json(dataMock.find(item => item.id === Number(id)));
});

app.get('/api/orders', async (req, res) => {
  await sleep(3000);
  res.json(dataMock);
});

app.get('/api/slow', (req, res) => {
  // let total = 0;
  // for (let i = 0; i < 5_000_000; i++) {
  //   total++;
  // }
  // console.log(`Result number is ${total} - on process ${process.pid}`);
  // res.send(`The result of the CPU intensive task is ${total}\n`);
  const baseNumber = 7;
  let result = 0;
  for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }
  console.log(`Result number is ${result} - on process ${process.pid}`);
  res.send(`Result number is ${result}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
// 22466687100 No cluster ~23s
// 14893596400 Node cluster ~14s
// 13014012700 PM2 ~13s
