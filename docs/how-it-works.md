---
slug: /how-it-works
---

# 🔬 How does it work? 

Quartz orchestrates user funds in order to minimize interest payments users have to pay on their loans. There are 6 actions can take place on Quartz: Deposit, Borrow, Withdraw, Off-ramp, Moving collateral & Repay. Quartz has been designed to minimize any need for user funds to sit in Quartz smart contracts.

## Deposit
Deposits into Quartz are automatically routed to the highest rate available at the time. Money flows directly from the user's wallet to the chosen dApp, it does not need to be deposited into Quartz.

## Borrow
A withdraw can be initiated by the original depositor. Only the original wallet that was used to create the deposit can receive the withdrawn funds. Quartz initiates a direct withdraw from the dApp holding the funds to the user wallet, it does not hold funds itself in between. A user can only withdraw funds that aren’t used as collateral within an active loan

## Off-ramp

A KYC’d user can off-ramp their deposits value seamlessly. Quartz initiates a Borrow action and redirects the user to mercuryo.io for seamless off-ramping within a Debit card.

## Moving collateral

Periodically, Quartz will check to see what rates are available on the Solana network and move user deposits if a lower interest rate loan is available. Quartz automatically repays the original loan, withdraws the collateral from the existing dApp, deposits into the new dApp and opens a new loan, no user intervention is required.

## Repay

A repay can be initiated by the original depositor at any time, or by any wallet if the users loan health gets too close to liquidation. Only the original wallet that was used to initiate the loan can receive the collateral back from the loan. The loan can either be paid by depositing usdc from an external wallet or by selling the loans collateral for usdc using those funds to repay the loan.