// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  label: string
}

const api_key = process.env.API_KEY;
const api_url = process.env.API_URL;

function getNLUInstance() {
  /*Type the code to create the NLU instance and return it.
  You can refer to the image in the instructions document
  to do the same.*/
  const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
  const { IamAuthenticator } = require('ibm-watson/auth');

  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
      version: '2022-04-07',
      authenticator: new IamAuthenticator ({
          apikey: api_key
      }),
      serviceUrl: api_url
  });
  return naturalLanguageUnderstanding;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let textToAnalyze = req.query.text
  console.log("dkafjsdlsdjklf =" + textToAnalyze);

  const analyzeParams = {
    'text': textToAnalyze,
    'features': {
      'keywords': {
        'emotion': false,
        'sentiment': true,
        'limit': 1,
      },
    },
  };
  

  const naturalLanguageUnderstanding = getNLUInstance();

  naturalLanguageUnderstanding.analyze(analyzeParams)
  .then((analysisResults: any) => {
      //Retrieve the sentiment and return it as a formatted string
      return res.send(analysisResults.result.keywords[0].sentiment);
  })
  .catch((err: string) => {
      // return console.log("Could not do desired operation " + err);
      return res.json({label: 'neutral'})
  });
}
