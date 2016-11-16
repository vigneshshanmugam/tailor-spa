#tailor-spa

This is a RiotJS Single Page Application ported from [riotcodesplit](https://github.com/prateekbh/riotcodesplit)

# Installation 

```sh
npm install or yarn
```

# Running fragment

Run the build step before starting the fragment server.

```sh
npm run build
```

Fragment server servers the bundles(JS/CSS) as per Tailor specification mentioned [here](https://github.com/zalando/tailor/wiki/Single-Page-Application-with-Tailor).


```sh
npm run start-fragment
```

Fragment server starts at port 8084 and servers the assets from `/public` folder.

# Running tailor

```sh
npm run start-tailor
```

Tailor will start on http://localhost:8080. Now go to home page on [/home](http://localhost:8080/home)

* Tailor servers the home page from the `templates/home.html`

