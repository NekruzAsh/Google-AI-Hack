
## Inspiration
Our inspiration came from our grandparents, most of our grandparents live in retirement homes and rarely get to see us and experience life with us. So, we wanted to help them out and bring out their happiness and connect them to the youth in the world again. We decided to build a platform that connects the young volunteers that are willing to get on a call and chat for a few minutes with the elderly. As researched by us, this helps the elderly people with depression and they tend to be more happy after socializing with the youth. 
## What it does
Our product connects the youth with the elderly to help reduce their depression and loneliness. With the use of the Gemini AI API, we can match their accounts and find the closest partner for them with the same interests.  This will help grow and bridge the community of both young and elderly people with the use of AI technology.
## How we built it
We developed this software with NextJS, React, Tailwind CSS, Agora RTC (for video calls), Supabase, and Gemini AI API. We used NextJS because it was full stack friendly, we implemented the frontend with React and Tailwind CSS. Our video calls came from the Agora RTC api. We stored the user account data in our Supabase database. Our matching algorithm is developed with Gemini AI API.
## Challenges we ran into
Some of the challenges that we encountered was correctly setting up the gemini AI API, like for instance, we couldn't use a .env file to store the API keys because they wouldnt work in the JS file afterwards, so we had to hard code the API keys in our JS files. Also, we had initial trouble testing the API where we learned how to make the API read and scan the user bio and for any likes or dislikes. We had trouble formatting the output the AI was giving. We also had trouble finishing the project because of our own work and coursework in our lives. This project is a great idea that can grow the community but we also needed more help in terms of developing the backend and different systems and features.
## Accomplishments that we're proud of
We are proud of implementing the AI matching algorithm and developing this platform to give back to the seniors because they have done their best to educate us the youngsters. So, we were really happy to give back to them by implementing such features as the video calls and using AI to connect both the young and elderly in this world.
## What we learned
We learned to identify the needs and emotional intelligence when coming up with our idea. In terms of technologies we learned how to use APIs correctly by fetching and calling. We also learned the two different ways we can develop a software like monolithic style or micro-services, which allows us to either scale or not scale our software.
## What's next for Friendli
In the future, we want keep working on this software and potentially start a non-profit so that our product ends up in every computer and desk in every elderly home in the United States. We want to refine our product, this includes making it responsive and accessible and possibly developing a mobile application for it so that it is available for mobile also. We want to first test this product in a nearby retirement home and see how it does within that home and we can identify the needs better by testing it there.










This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
