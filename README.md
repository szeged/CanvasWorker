# CanvasWorker

Experimental CanvasWorker for Chromium

This repository contains a working progress feature for Chromium which adds a new worker infrastructure for canvases.

## How to build

### Requirements

* The current changes tested on Ubuntu 14.04.3 LTS (x86_64)
* You will need depot_tools. Check out the install guide [here](https://www.chromium.org/developers/how-tos/install-depot-tools)!

### Initial build

Just call `./build.sh` from the base directory of this repository.

### Development and incremental build

For incremental build you can use `./build.sh` as well.

### Using ICECC

It is possible to boost the building process with icecc. See a guide [here](https://github.com/ds-hwang/wiki/wiki/Set-up-icecc-with-heterogeneous-env) how to setup such an environment.

## Testing

It is possible to execute the current very simple testing environment calling `./test.sh` script from the base directory of this repository.

If you are about to execute only one test, call the script with the path of required test (e.g. `./test.sh tests/methanol`).

## Links

* [Web Apocrypha](http://browser.sed.hu/) - Blog posts about web engines, browsers, and other interesting web developments.
