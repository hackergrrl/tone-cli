# tone-cli

> Generate a tone at a particular frequency from the command line.

## Usage

```
$ tone --duration 3 --frequency 500 --volume 0.5
```

This causes your computer plays a 500 Hz sine wave for 3 seconds at 50% volume.

## Arguments
```
  -d | --duration N        Play tone for N seconds. (Default Infinity)
  -f | --freq     M        Play tone at M Hz. (Default 262)
  -v | --volume   V        Play tone at volume V (0.0 - 1.0+) (Default 0.05)
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install -g tone-cli
```

## See Also

- [`baudio`](https://github.com/substack/baudio)
- [`minimist`](https://github.com/substack/minimist)

## License

MIT

