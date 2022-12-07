#!/usr/bin/env node

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import logUpdate from 'log-update';

import { ChatGPT } from '../index.mjs';

const { CHATGPT_SESSION_TOKEN: sessionToken } = process.env;

const rl = readline.createInterface({ input, output });

rl.prompt(true)

const chat = new ChatGPT({
  sessionToken: `eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..OxwomLRGqzn72V2-.y6cdpMHYJ4LYdVm_see0B0V3RhYcz3_sg09bGqSzP1SsBDMjO7WLZZSdK_YmIE--Gh6L7vE4ikN2jLwQz7iR_P--oBRofp0qdWpYb8kXJTSHgiNrhCq2peKhhDsuRRilOoTkZ4SBG8gjSHU9hXDffsTM8IG66yi93i7yxtX_gdDH5yydAUGs7yk8Vbu2p1I931ee_jUS6tgEvPGV5Ouylf0wnwj1S5zS-_jhMxV-o0XTo7RetfKmU1qMhTbEf1dDyWI9AiB45WC6M-BAcLws0dZB2k4GdBDlwTn0DYvnk9YJ5HmhVRgtRrqq6GAVIOXNNt4P9qHV9hjugszseMUrA2FcNLZiiAlcKSLP-mH-HdQftlXYAxmanxG0JURuIJPNXuRN_ibgbNRgrPpSLufuF3-vuTDx14TKpwzDzv1mYMimlUgB_JTYKfs-SJgVI7K-Be9TjiFoSvp7QqEuR-fsc7rECGHXqwpe8AcOhH4OnHcaoNVKPDO6wE30WdwshmPHOsoSx7RPL83kP8S7Ech4OkiB7gdVFFhvEFOPF1zwlyKqn31jGOvsMQWG-Uvah-nZLdDe6Il_n4m9NA3SfHkQEgVgsjwdFH9pezRUTGt04TXfgBPB1ZAduJBcq1mDQcVYHHyw-Ghqk5NJ4gE5eZHBC-X4vjm_1dgUeQxMTG4QS1hwZwYfbDNEJviDvkYo3LwwbYhd8FeaeHcOSsPqNQ0vpQvc8R5V214T27JyMUhTVnbtYUc6uBG01OT4vxZXardZdxm4hpnpIu1upzwN94y9u92qlzEGWRsUMlcIlcZIhwBof_4uKXRLBQyCdJURzCsk3f2Ju938mJWFFqpXASymK19sFiek3AOs8GEStyXhMyklwdp2CIWRutkwsebnAVGX47f9kljxWizX8vD4oNsVt77AI5IGvQB9aIdUPJ3PUr6_6WVw8pRPtgBnS9oqddkPWCKkUkWJesM1lucJWijSFCI1dFr_Ablk3nsCbUnoCL92n8M-4kuj4_QdcsUMI-xh7dXjIeLSopflNEI6ly3s6WZKIiXwwDXsBl9t1X27bWDlcg9Sv3MBomFKZbQBOT9M5gB8rxZrLBCXsKtGB8iH16KKG28FSue1Xtje5NgFnQyS3yhKLlv-lSUDktYE6hsbgGE8QYH9hCFYHlG40ilDgZChGhSIgJL9pN5PQcvT9Vz1ANEXSTye5gxY5DVjegR0ovTrGutKqWqD_TIevuFAGqs98CEvWpPd60i71YsVQ0L7RSqPQyooedR3ZFfgPt2FMsYCPyM9EJrl8hLrxxxekizNfcvAIZZ_Yz4Vuo9D1vK1PJcspJL612jAqW4CzIg2yaYegbepWWzU_s-OTE7wD88OJ5RAwS8Z7SYTz4dho-zogGr0edCpeWPlaOIyLBpCtwG8Mw2LMl2N2jrVLzhdKEj3cTiUhgtr0i1UQ0RHK7PwaKL-lkRMHJ2j1F_eRTR1hrR0V_rAispiA2OzYT8V2F6MqZh5XZKr1EIb_42QHQ-fGwAWa-EoLCPCNJX09hWKJELL_RlkCEkNnw-CA2jMXOY7mRiy3_ucMFhg4IL6G2RZC0Cjv2I7nOwy4Yf-ywFTbzX_SHvwXR9rWeTgtYV2t_NgR9v8WdFDZ4MkL85eB_J8jWF52S8mC9NCnpjDeEfifI7rTNUuQVW41NK3gaAB_d4N9x6LHk1cvG0nz3iZNGy7FPV4d_JOPEsCH5Em01iYxN8S-ESD3w8wvnIIl59I5Xai1M7nQcuZwl1O_MqVOt5hC7TB_tF7Dn77lBnkrUTBaoJu-8ECcjZ4Uj9-iSFoYe4ITMX9RpQSJr_56TSOlSwsH0KmdyHWUqtetVRSHzQKbx71QZxVLCsuF-MvFTQHGAi3GQrj3b5eeYdmEY3HejNHtDS0wr1D4e1jUaNCjPlhPdG3oLfDJvFmMSd5tq06RK5kdEQekZhq2md_x_RguhbQPARhTuIQpTxXHgDeCK6zV044jRMRG4P4_1Eq7MPmOlVHbXvvYh5zABwR0MdWp7IMBYvfQB6RshFPC3YGi__j-AqnTifi9SQtvCumYHle1D2o51B6OkE-CYolQ006cMgTh9PkUrWt5gEIoTW8_YCz2Qz-E0IETqFEBgEWXF3iTDOVwA-MNPIetmE8qtazOAWZXHShqfh2ytG7FvQlUItGGSsnm3SxeGJllWv5LmXGTPwbJSrCquSGcyRaEuq99BszrL4-A0Z6O_KN9d7LbKnk7wlYENNHHITbveoE.jhkv4kCXdxLdyqDa7_TMAA`,
});

while (true) {
  const request = await rl.question("You > ");
  logUpdate(`ChatGPT: Waiting Response ...`);
  await new Promise(done => {
    chat.send(request, answer => {
      if (answer === '[DONE]') {
        done();
      } else {
        const data = JSON.parse(answer);
        logUpdate(`ChatGPT: ${data.message.content.parts[0]}`)
      }
    });
  });
  if (request === 'quit') {
    break;
  }
}

console.log(`ChatGPT: Goodbye!`);

rl.close();