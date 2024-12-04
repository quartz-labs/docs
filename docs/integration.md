---
slug: /integration
---

# 🛠️ Integration

Quartz is a public smart contract on Solana. You can interact with it using any Solana wallet.

Program address: `6JjHXLheGSNvvexgzMthEcgjkcirDrGduc3HAKB2P1v2`

All information about a user, and all user funds, are routed through the Vault account, which is a PDA that is derived from the owner's wallet address:

```typescript
import { PublicKey } from "@solana/web3.js";
export const getVault = (owner: PublicKey) => {
    const [vault] = PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), owner.toBuffer()],
        new PublicKey("6JjHXLheGSNvvexgzMthEcgjkcirDrGduc3HAKB2P1v2")
    );
    return vault;
}
```

## SDK

Our SDK is open-source and available [here](https://github.com/quartz-labs/sdk). SDK documentation will be coming soon. 

Quartz bots and APIs are also open-source and available on our GitHub.
