# cabal-docker-poc
POC to reproduce cabal replication bug on Node LTS `10.16.0`.

## Build
```
$ docker build -t poc .
```

## Run
This error will only occur if you follow these steps exactly. First start [https://github.com/cabal-club/cabal-cli](cabal-cli) in one bash session then in the next run the docker command one time, then exit it with `CTRL+C`, then run it once more.
```
$ cabal --temp cabal://6c3cc8b90a7fc9558de91fe47cbd23ed72917ade21da07d3ea4e689972bfc6a0
$ docker run --rm -it poc
> CTRL+C
$ docker run --rm -it poc
```

### Error
On my machine the second time I run the container and all times thereafter I get the output below:
```
swarm ok
local key> 24027b0e34203ff10b6ba03bc4d7c7f98aeed6a8871c3aab6285a0eefbafa162
/root/poc/node_modules/multifeed/mux.js:203
      feed.ready(function() { // wait for each feed to be ready before replicating.
           ^

TypeError: Cannot read property 'ready' of undefined
    at /root/poc/node_modules/multifeed/mux.js:203:12
    at Array.forEach (<anonymous>)
    at startFeedReplication (/root/poc/node_modules/multifeed/mux.js:202:11)
    at /root/poc/node_modules/multifeed/index.js:238:7
    at release (/root/poc/node_modules/mutexify/index.js:23:13)
    at /root/poc/node_modules/multifeed/index.js:275:11
    at /root/poc/node_modules/multifeed/index.js:307:27
    at /root/poc/node_modules/hypercore/index.js:213:15
    at apply (/root/poc/node_modules/thunky/index.js:44:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)
```
