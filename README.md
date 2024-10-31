# Deeplinker wallet deeplink SDK

Deeplinker is a SDK service for mobile crypto wallet connection .

Now , more and more crypto wallet for different chains , from EVM / Solana / TON / TRON to Bitcoin / Lighting network have it's mobile version for Android or IOS . 

During the mobile usage of crypto wallet , most of wallet/provider using `Deeplink` to listen outer called up . 

But most of wallets have it's own unique `Deeplink rules` and namesapce . 

Deeplinker is an adapter to turn different kinds of Deeplink rules of wallets into one stander Deeplink interface .

## How Deeplinker work ?

As an adapter of mobile crypto wallet . Deeplinker will adapte most of the major wallets Deeplink rules . And build it into a stander abstruct interface .

## What Deeplinker support now ? 

Currently deeplinker working on follow chains wallet support :

### Solana Deeplink Adapter

- Phanom

- Solflare 

- Okx

- Backpack