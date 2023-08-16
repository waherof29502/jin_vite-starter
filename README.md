## Authors

- [@JinWang Dev](https://github.com/waherof29502)


## Tech Stack

**Client:** Vite, React, TypeScript

**Styles:** Styled-Components

**Api Fetcher:** Axois, SWR 

## Deployment

To install package in this project

```bash
  npm install
```

Then to run this project

```bash
  npm run dev
```

## Features

- RWD Card List Design with Styled Components
- Router Provided with React-Router-Dom V6
- Linter with ESLint,CommitLint,StyleLint,Husky
- API Fetcher with axios and SWR 2.0 hook 
## File Structure


```
src
├── features
│   ├── subject
│   │   │ 
│   │   ├── components
│   │   │     └── Counter.tsx  
│   │   ├── hooks
│   │   │     └── Swr.ts  
│   │   ├── pages  
│   │   │     ├── ErrorPage.tsx
│   │   │     ├── List.tsx
│   │   │     └── Profile.tsx
│   │   └── index.ts
├── routes
│   └── index.tsx
├── utils
│   └── api.ts
└── main.tsx
└── index.css
└── .env.development
```
## Library Explain
**Axios:** Axios 是基於Promise的HTTP庫。
可用於「瀏覽器環境」及「Node.js」環境中。在瀏覽器環境下使用了XMLHttpRequest,而在Node.js環境則使用了http模組。
**SWR:** SWR 是 stale-while-revalidate的簡稱, 再抓取資料時，會先拿到cache（stale/舊資料）中的資料，然後再發請求抓取資料(revalidate),再回傳新資料。SWR是一個提供抓取資料功能的react hooks 資料庫，可以提供重複使用的react hooks及管理cache及避免重複發API請求及定期抓取資料。


