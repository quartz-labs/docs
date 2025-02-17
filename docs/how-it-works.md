---
slug: /how-it-works
---

# 🔬 How does it work? 

## Secured Line of Credit

The Quartz credit card pays for transactions through a secured lined of credit, backed by your crypto assets. This allows you to get liquidity out of your investments without needing to sell them, meaning you can spend their value while you stay holding. Staying holding means you keep all the gains if your assets increase in value.

## DeFi Loans

Quartz uses a smart contract on Solana to provide yield on your assets and DeFi loans for your card. Quartz DeFi loans are powered by [Drift](https://www.drift.trade/), which aggregates user funds together into lending pools. When Quartz takes out a loan to cover your card transaction, it borrows USDC from this lending pool (which you pay interest on). All DeFi loans are always over-collateralized, so if you want to borrow USDC, you must have more than enough collateral to cover the value of your loan.

This means that unlike with a fiat bank, DeFi protocols cannot lend out more money than they have received, and if users don't repay their loans their collateral is simply liquidated to cover the loan.

## Liquidation Protection

With other DeFi protocols, this liquidation comes with a fee (usually up to 10%), but loans on Quartz are protected from liquidation by auto-repay. If the value of your collateral approaches the value of your loan (either by prices falling or interest accruing), it will automatically be sold at market rate to avoid any liquidation fees. Quartz uses [Jupiter](https://jup.ag/) to swap your collateral for USDC, which aggregates decentralized exchanges so you always get the best price. If you want to manually repay your loan, you can do so by depositing USDC or selling some of your collateral through the dashboard. But, if the value of your collatearl is always more than your loans, you'll never have to repay.

## Available Credit

Other DeFi protocols also require you to manage your account health (a ratio of your collateral's value to your outstanding loans) in order to avoid liquidation, but Quartz handles all of this for you. On the dashboard you can see your available credit, which is the amount of money you can spend with your card through the secured line of credit. Since all loans are over-collateralized, this number is less than the total value of your collateral.

If your available credit reaches $0, the protocol will automatically sell some of your collateral to bring it back above $0 and avoid any liquidation fees.

## DeFi Yield

Since the assets you add to your account are added to the lending pool, they are leant out to other users. The interest they pay on their loans is paid to you in the form of yield. Any funds not currently required as collateral for your loans are routed to [Lulo](https://lulo.fi/), which sends funds to whichever protocol has the highest yield. Lulo periodically checks to see which rates are available across platforms and will move user funds if better rates become available. Quartz and Lulo can only move funds between lending protocols, and cannot withdraw funds out of the platform without user authorization. Only the wallet that originally added the funds can withdraw them. Money flows directly from the user's wallet to the chosen protocol, it does not need to be held in the Quartz or Lulo smart contracts.

## Self Custody

The Quartz protocol and credit card are fully self-custody. This means that no one, not even Quartz, has access to your balance until you authorize a transaction. In the app or website, you can set a spend limit that Quartz is authorized to use. This can be a daily, weekly, monthly, yearly, or all-time limit - which gives Quartz access to those funds should you use your crypto card, which can be used for both in-person and online transactions anywhere Visa is accepted. For online card transactions that support 3D Secure, no spend limit is needed as confirming the transaction authorizes Quartz to withdraw the required funds. This authorization is made possible through the Quartz protocol, which automically manages your funds and who has permission to use them. Your keys, your crypto.

## Account Notifications

Quartz provides a Telegram bot that can send you notifications whenever your available credit drops below a set amount. If your available credit drops to 0%, your loan will be auto-repaid by selling your collateral, so adding more assets or repaying some of the loan when you receive these notifications will avoid this. You can also receive notifications whenever a transaction is made with your Quartz card.

Simply message [@QuartzLTVBot](https://telegram.me/QuartzLTVBot) to start receiving notifications. You can set any threshold to be notified at, for any account you want, You'll be notified if an auto-repay occurs, including all the details of the collateral sale.

The Quartz notification bot is open-source, so you can run your own notification service by following the README in the [GitHub](https://github.com/quartz-labs/account-watcher).
