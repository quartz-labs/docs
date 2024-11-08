---
slug: /how-it-works
---

# 🔬 How does it work? 

Quartz uses a smart contract on Solana to orchestrate user funds in order to minimize interest payments on loans and maximise yield on deposits. User funds are held in whichever integrated DeFi platform will provide the best rates. When off-ramping, Quartz takes out a USDC loan with these platforms and off-ramps that, so you don't need to sell your crypto deposits. 

## Deposits

Deposits into Quartz are automatically routed to the protocols with the highest yield and lowest interest rate available at the time. Quartz periodically checks to see which rates are available across our integrated platforms and will move user deposits if better rates become available. Quartz can only move funds between platforms, it cannot withdraw deposits out of the platform without user authorization. Only the wallet that deposited the funds can withdraw them. Money flows directly from the user's wallet to the chosen protocol, it does not need to be held in the Quartz smart contract.

<div align="center">
  <img width="1200" alt="Diagram showing flow of funds for deposits and protocol movements" src="/img/figure1.jpg" />
</div>

## Spend without selling

When you want to off-ramp USD or withdraw USDC, Quartz doesn't sell your assets for USD/USDC. Instead, Quartz takes out a USDC DeFi loan using your deposits as collateral. DeFi loans are over-collateralized, meaning you must always have enough collateral deposited to cover the loan balance (plus some extra to cover price fluctuations). 

If the value of your collateral goes up, you keep all the upside. If the value of your collateral drops close to the value of your loan, your loan is automatically repaid using your collateral at market rate. The balance shown in the Quartz app is the amount of funds you can actually spend, not the total collateral deposited (balance = collateral - loans). You can also view the details of your loans and collateral if you wish.

Any USDC received is withdrawn directly into your wallet, and USD can be off-ramped directly with bank transfers or a self-custody debit card. If you decide to sell your assets in the future, you can consolidate it all into one transaction, instead of needing to sell your crypto every time you tap your card. But, if the value of your assets doesn't decrease, you'll never need to sell.

## Self-custody debit card

The Quartz debit card is fully self-custody. This means that no one, not even Quartz, has access to your balance until you authorize a transaction. The card debits from your regular Quartz balance, and you can deposit or withdraw whenever you want. The debit card is virtual and can be used with Apple/Google Pay.

Before tapping your phone to pay, you first open the Quartz app and select the amount of funds you want to pre-authorize for spending. This gives Quartz access to those funds should you use your crypto card. If you don’t use your card, or you cancel the authorization, Quartz loses access again. Your Quartz virtual debit card can be used for both in-person and online transactions. For online card transactions that support 3D Secure, no pre-authorization is needed as confirming the transaction authorizes funds to Quartz. For other online card transactions, spending requires the same authorization as in-person transactions.

When you spend with your card, Quartz will take out a USDC loan against your collateral if it has received authorization for the required amount. This USDC is settled directly with the card issuer to cover your purchase.

While the Quartz protocol can be used by anyone permissionlessly, the card and bank transfers can only be used by users who pass KYC due to regulation.

<div align="center">
  <img width="1200" alt="Diagram showing flow of funds for authorizing self-custody card spending" src="/img/figure2.jpg" />
</div>

## How do DeFi loans work?

We integrate with DeFi lending protocols across Solana. The assets you have deposited are leant out to other users (which you earn a yield for), and you can borrow assets from other users' deposits (which you pay interest on). All DeFi loans are over-collateralized, meaning if you want to borrow USDC, you must have more than enough deposits to cover the value of that loan. If the value of your collateral drops too low, it is sold to cover the loan. 

This means that unlike with a fiat bank, DeFi protocols cannot lend out more money than they have received as deposits, and if users don't repay their loans their collateral is simply sold.

The ratio of your collateral's value to your outstanding loans is described by your account health. 100% account health means you have no outstanding loans. 0% account health means your collateral has reached the point where it no longer covers the loan, and will be sold.

## Account health notifications

Quartz provides a Telegram bot that can send you notifications whenever your account health drops to a low amount. If your health drops to 0%, your loan will be auto-repaid by selling your collateral, so depositing more assets or repaying some of the loan when you receive these notifications will avoid this.

Simply message your wallet address to [@QuartzLTVBot](https://telegram.me/QuartzLTVBot) and you'll receive a message if your Quartz account health drops below 25%, and again if it drops below 10%.

The Quartz account health notification bot is open-source, so you can run your own notification service by following the README in the [GitHub](https://github.com/quartz-labs/account-watcher).

## Auto-repay

If your account health drops to 0%, Quartz will automatically repay your loans by selling your collateral at market rate to avoid the usual liquidation fee of DeFi lending protocols (typically 5%). Quartz uses [Jupiter](https://jup.ag/) to swap your collateral for USDC, so you always get the best exchange rate.
