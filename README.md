# ain-website
Arabs in Neuroscience Website



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To publish:
npm run export
gsutil version
gcloud auth login
gsutil -m rm -r gs://www.arabsinneuro.org/* && gsutil -m cp -r build/* gs://www.arabsinneuro.org/

ref for google cloud hosting:
https://www.notion.so/google-cloud-hosting-8c673d11c0ae40ceb2442843f07bcb21?source=copy_link
