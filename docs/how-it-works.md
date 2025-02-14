---
slug: /how-it-works
---

# 🔬 How does it work? 

Quartz uses a smart contract on Solana to orchestrate user funds in order to minimize interest payments on loans and maximise yield on your crypto. User funds are held in whichever integrated DeFi platform will provide the best rates. When off-ramping, Quartz takes out a USDC loan with these platforms and off-ramps that, so you don't need to sell your crypto. 

## Funds

Funds added into Quartz are automatically routed to the protocols with the highest yield and lowest interest rate available at the time. Any funds not required as collateral for loans are routed to [Lulo](https://lulo.fi/), which sends funds to whichever protocol has the highest yield. Lulo periodically checks to see which rates are available across platforms and will move user funds if better rates become available. Quartz and Lulo can only move funds between lending protocols, and cannot withdraw funds out of the platform without user authorization. Only the wallet that originally added the funds can withdraw them. Money flows directly from the user's wallet to the chosen protocol, it does not need to be held in the Quartz or Lulo smart contracts.

<div align="center">
  <img width="1200" alt="Diagram showing flow of adding funds and protocol movements" src="/img/figure1.jpg" />
</div>

## Spend without selling

When you want to spend USD or withdraw USDC, Quartz doesn't sell your assets for USD/USDC. Instead, Quartz takes out a USDC DeFi loan using your crypto as collateral. DeFi loans are over-collateralized, meaning you must always have enough collateral in your account to cover the loan balance (plus some extra to cover price fluctuations). 

If the value of your collateral goes up, you keep all the upside. If the value of your collateral drops close to the value of your loan, your loan is automatically repaid using your collateral at market rate. The balance shown in the Quartz app and website is the amount of funds you can actually spend, not the total collateral in your account (balance = collateral - loans). You can also view the details of your loans and collateral if you wish.

USDC can be withdrawn to your wallet, or spend directly with the self-custody debit card. If you decide to sell your assets in the future, you can consolidate it all into one transaction, instead of needing to sell your crypto every time you tap your card. But, if the value of your assets doesn't decrease, you'll never need to sell!

## Self-Custody Debit Card

The Quartz debit card is fully self-custody. This means that no one, not even Quartz, has access to your balance until you authorize a transaction. The card debits from your regular Quartz balance, and you can add or withdraw whenever you want. The debit card is virtual and can be used with Apple/Google Pay.

In the app or website, you set a spend limit that Quartz is authorized to debit. This can be a daily, weekly, monthly, yearly, or all-time limit - which gives Quartz access to those funds should you use your crypto card. You can order virtual or physical Quartz cards which can be used anywhere Visa is accepted, for both in-person and online transactions. For online card transactions that support 3D Secure, no set limit is needed as confirming the transaction authorizes funds to Quartz.

When you spend with your card, Quartz will take out a USDC loan against your collateral if it has received authorization for the required amount. This USDC is settled directly with Visa to cover your purchase.

While the Quartz protocol can be used by anyone permissionlessly, regulation requires that the card is only used by users who pass KYC verification.

<div align="center">
  <img width="1200" alt="Diagram showing flow of funds for authorizing self-custody card spending" src="/img/figure2.jpg" />
</div>

## How do DeFi loans work?

Quartz DeFi loans are powered by [Drift](https://www.drift.trade/). The assets in your account are leant out to other users (which you earn a yield for), and you can borrow assets from other users' collateral (which you pay interest on). All DeFi loans are over-collateralized, meaning if you want to borrow USDC, you must have more than enough collateral to cover the value of that loan. If the value of your collateral drops too low, it is sold to cover the loan. 

This means that unlike with a fiat bank, DeFi protocols cannot lend out more money than they have received, and if users don't repay their loans their collateral is simply sold.

The ratio of your collateral's value to your outstanding loans is described by your account health. 100% account health means you have no outstanding loans. 0% account health means your collateral has reached the point where it no longer covers the loan, and will be sold.

## Auto-Repay

If your account health drops to 0%, Quartz will automatically repay your loans by selling your collateral at market rate to avoid the usual liquidation fee of DeFi lending protocols (typically up to 10%). Quartz uses [Jupiter](https://jup.ag/) to swap your collateral for USDC, which aggregates decentralized exchanges so you always get the best exchange rate.

Auto-Repay instructions are executed by Auto-Repay bots, which monitor Quartz accounts and execute the instruction on any accounts that reach 0% health. The bot is open-source, so you can run your own instance (and keep any profits from differences in exchange rates) by following the README in the [GitHub](https://github.com/quartz-labs/auto-repay-bot).

## Account health notifications

Quartz provides a Telegram bot that can send you notifications whenever your account health drops to a low amount. If your health drops to 0%, your loan will be auto-repaid by selling your collateral, so adding more assets or repaying some of the loan when you receive these notifications will avoid this.

Simply message [@QuartzLTVBot](https://telegram.me/QuartzLTVBot) to start receiving notifications. You can set any account health threshold to be notified at, for any account you want. You'll also receive a notification if an auto-repay occurs, including all the details of the collateral sale.

The Quartz account health notification bot is open-source, so you can run your own notification service by following the README in the [GitHub](https://github.com/quartz-labs/account-watcher).
