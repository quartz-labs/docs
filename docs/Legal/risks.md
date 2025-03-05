---
slug: /risks
---

# Risks

The Quartz protocol is experimental and is provided to you "as is". User funds are managed by an on-chain program called a smart contract, the code for which is available [here](https://github.com/quartz-labs/quartz-app/). While the security of user funds is a top priority, there are risks involved in using any smart contract or DeFi protocol.

### 1. Smart Contract Risk

All smart contracts, even if audited, may contain vulnerabilities or bugs that attackers might exploit, potentially leading to a loss of funds.

### 2. Bad Debt Risk

To earn yield and take out DeFi loans, funds in Quartz are kept in lending pools. Borrowers (including Quartz users, and other lending pool users) access liquidity from these pools by depositing assets (eg: SOL) and borrowing another token (eg: USDC). While the protocol should liquidate user collateral if their loan value drops too low, it is possible that it won't be liquidated in time. In this case, their loan becomes bad debt.

While lending pools have insurance funds for this situation, a high rate of unsecured defaults can lead to insolvency, where the lending pool lacks sufficient funds to cover all depositor withdrawals, which can result in a loss of funds.

### 3. Oracle Risk

The Quartz smart contract and our integrated DeFi protocols rely on oracles to provide external data, like asset prices. While there are safety measures in place to protect against compromised/incorrect oracle data, it can still trigger unintended liquidations or other issues in the protocols.

# Using Quartz

Funds are not stored in the Quartz smart contract itself and are instead stored directly with integrated dApps, reducing the attack surface and risk. All the dApps we integrate are open source, audited, and backed by reputable teams and investors.

However, it is impossible to remove all risks from the system. Any use will be at your own risk and without warranties by Quartz of any kind.
