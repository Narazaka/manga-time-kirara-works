# manga-time-kirara-works

```javascript
const works = require("manga-time-kirara-works"); // きらら作品(きららマギカ除く)
const magica = require("manga-time-kirara-works/magica"); // きららマギカ
const time = require("manga-time-kirara-works/time"); // きらら以外のまんがタイム
const near = require("manga-time-kirara-works/near"); // きららの話であがりがちな他作品
const all = require("manga-time-kirara-works/all"); // 全作品

const message = "まちカド";

const matchWorks = [];

for (const name of Object.keys(works)) {
    if (works[name].test(message)) matchWorks.push(name);
}

console.log(matchWorks);
```

## License

MIT
