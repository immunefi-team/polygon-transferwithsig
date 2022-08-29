# This project demonstrates a PoC for the Polygon lack of balance check vulnerability


[Polygon Lack Of Balance Check Bugfix Review](https://medium.com/immunefi/polygon-lack-of-balance-check-bugfix-postmortem-2-2m-bounty-64ec66c24c7d)  
[Bug Bounty Reports Explained](https://www.youtube.com/watch?v=wc4jARFuVYg&ab_channel=BugBountyReportsExplained)


This example uses `MRC20` as target vulnerable token as the victim which contains 9260856583.14 MATIC.

The vulnerability was fixed on 22156659 block on December 5, 2021 , The average price of matic was around 1.53$

```
Estimated funds at risk at : 9260856583 MATIC * 2.29$ (AVERAGE PRICE on 4th Dec) = 21207361575.1 USD.
```

a prequisite of running this PoC is setting the `POLYGON_ALCHEMY_API_KEY` environment variable.

```
$ export POLYGON_ALCHEMY_API_KEY=https://polygon-mainnet.g.alchemy.com/v2/[API_KEY]  
$ npx hardhat test test/polygon-exploit.js
```

[or]

```
$ POLYGON_ALCHEMY_API_KEY=https://polygon-mainnet.g.alchemy.com/v2/[API_KEY]  npx hardhat test test/polygon-exploit.js
```

![PoC](./PolygonExploit.png)
