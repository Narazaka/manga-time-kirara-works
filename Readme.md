# manga-time-kirara-works

```javascript
const works = require("manga-time-kirara-works");

const message = "まちカド";

const matchWorks = [];

for (const name of Object.keys(works)) {
    if (works[name].test(message)) matchWorks.push(name);
}

console.log(matchWorks);
```

## License

MIT
