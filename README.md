# how-long-did-it-take

Measure elapsed time.


## CLI

Use `hldit` command.

```text
hldit (any command)
```

```text
hldit (any *.js filepath)
```


## API

### Import

```js
import * as hldit from "how-long-did-it-take";
```

### Stopwatch

```js
const getElapsedTime = hldit.stopwatch.withUnit("ms", 2); // give unit and fraction digits
console.log(getElapsedTime());
```

```js
const getElapsedTime = hldit.stopwatch.autoUnit(2); // give precision
console.log(getElapsedTime());
```

### Measure

```js
const anyAsyncCallback = () => Promise.resolve();

const measure = hldit.measure.autoUnit(2); // give precision
measure(anyAsyncCallback).then((elapsedTime) => console.log(elapsedTime));
```

```js
const anyAsyncCallback = () => Promise.resolve();

const measure = hldit.measure.withUnit("ms", 2); // give unit ant fraction digits
measure(anyAsyncCallback).then((elapsedTime) => console.log(elapsedTime));
```

`hldit.measure` has functions for sync callbacks as well.
