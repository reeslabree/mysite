---
title: How do Solana NFT's Work?
date: April 28, 2022
excerpt: What I've learned working with the Solana token program
image: /images/okaybears.jpeg
index: 1
---

*This post was originally written under the title 'Developing a Post Protocol for Solana' from insights gained while working on Fora. Technical details about the implementation have been removed from the post to comply with liability issues. As such the stripped down version serves as a technical analysis of NFT's on Solana.*

## Ethereum and Solana
### A brief history of Ethereum
In 2015, Ethereum made headway as the first blockchain to include Smart Contracts, a concept that would go on to revolutionize the crypto currency space and define ‘the d-app’, or decentralized application. Until then, crypto currencies were incompliant with the Mises principle of sound money, mainly that money must have inherit value. In the case of Bitcoin, the main appeal was that the supply was predictable, and while inflationary was bound to a decreasing rate with a finite capacity for new bitcoins. This, however, did not change the fact that Bitcoin on its own was not useful, nor was the product of productive labor.

Ethereum changed this. While miners were still relegated to computing hashes to mine new Ethereum, a small portion of their labor was running ‘Smart Contracts’, i.e. code that lives on the blockchain. Not only did this create productive value for Ethereum itself, it also enabled entire applications to live without a centralized back end.

### Some inherent flaws
The d-app is an insane innovation on its own, but with several flaws. The first glaring flaw is the cap on transactions-per-second (TPS). Ethereum is technically limited to about 10 TPS. For reference, VISA processes approximately 1,700 transactions per second, and claims to be able to support up to approximately 24,000 transactions per second. This bottleneck alone means that a d-app simply can’t scale on Ethereum. There are some solutions currently being used to fix this. Layer 2 chains process transactions at a much quicker pace and fold the net changes back into the main chain. Additionally, sharding the Ethereum chain could help, although both of the aforementioned solutions come at a cost to security.

Another flaw with the Ethereum is the storage cost. A backendless-app sounds great in theory, but on-chain storage creates a nightmare of costs that users simply won’t pay for. At $76,000 per GB of storage, most applications you currently use would never be viable. Take for instance Facebook, who stores an estimated 500 terabytes of data on their backend per day. At Ethereum prices, thats about $38 billion dollars, which would consume their $525 billion market cap in less than 2 weeks. Simply infeasible.

The Interplanetary File System (IPFS) was a great first attempt at a solution to this. Similar to bittorrent, or even Limewire / Napster IPFS implemented decentralized storage for your data. Instead of storing your data on-chain, you would instead ‘upload’ your data to a network of machines storing data and be returned an endpoint for where your data was stored. The Ethereum contract now only has to maintain a single string with a link to the data, rather than all the data itself. This brings the storage costs down significantly- pennies for a link and a couple bucks to cache it.

IPFS has its own flaws, however. Without a financial incentive to store data, nodes would randomly drop leaving data lost. This is a pretty big flaw that lead to only a few nodes hosting almost all of the data, an environment that isn’t particularly decentralized.

### A potential solution- Solana
Solana uses a novel Verifiable Delay Function (VDF) to beat the TPS limitations of Proof of Stake (POS). Rather than ‘blocking’ the transactions, Solana’s Proof-of-History (POH) encodes each transaction in the moment on a chain of hashes, each derived from the prior hash. This means that you no longer have to wait for an entire block to get mined, rather the transactions get processed on the fly, and validation only requires checking if a transaction is downstream of a previously validated hash.

The theoretical upper bound in a perfect environment is about 900k TPS, however in reality this is approximately 100k TPS.

### Solana pitfalls
Byte storage cost on Solana still hurts. Solana uses ‘rent’ as a mechanism to charge for data storage. Data on chain has a per byte rate of storage per epoch (roughly 2 days) and to store data permanently you must attach 2 years rent to be considered ‘rent exempt’. This is by design to disincentive using the Solana chain to maintain large records permanently. Accordingly, closing an account storing this data will return the rent you paid when creating the account to your wallet. This would work well for an app like Snapchat, where the lifetime of the data being stored may only be for a few moments and disappears after it isn’t needed any more. For most other applications, however, you run into the same problem that Ethereum tried to solve using IPFS.

Additionally, Solana is considered to be a more ‘centralized’ blockchain. Solana uses a POS mechanism that burns about 1.2 SOL per day ( $120), and maintains pretty stringent requirements on validator nodes. Validator nodes must stay up to date on the latest version (this is not up to the community, rather is up to the Solana foundation). The hardware requirements set a minimum of 128GB of RAM, with a recommended amount of 256GB. For those unfamiliar, your typical high-end PC may only have 32 or 64 GB of RAM, and motherboards capable of accepting 128 or 256GB are limited to server motherboards.

These requirements keep transactions quick and strongly disincentive ‘wrong’ validation, but exclude many people from becoming validator nodes themselves. To this point, while it is possible to mine Ethereum using a decent graphics card for gaming, most miners participate in mining pools which leads you to a similar position as Solana where a decentralized blockchain is dominated by a handful of mining pools.

## On Chain Ownership
An intermission from the technical aspects of Ethereum and Solana, how do we represent on-chain ownership on Solana? The Solana ‘program’ is mostly analagous to the Ethereum ‘Smart Contract’. Programs contain code that can be triggered by a message signed by a wallet. Similarily to Ethereum, Solana uses an account model to store data in a one-to-many relationship with a program. An account can hold SOL, and store data. On both Ethereum and Solana, accounts can be owned by contracts/programs and can hold ETH/SOL, along with store data.

### The account model
Solana makes improvements to the account model by implementing the Program Derived Address (PDA). PDA’s are a 32 byte string that look similar to a public key, but don’t fall on the ed25519 elliptic curve used to derive secure keypairs. PDA’s are accounts that are predefined to be owned by a specific program, and their addresses are derived from the specific program address combined with predefined seeds. These accounts are ‘owned’ by the program, but typically specify a wallet that maintains ‘authority’ over the account.

A quick example- If a car dealership were to implement this model, they’d deploy a ‘dealership’ program that can create new ‘car’ accounts, as well as new ‘leasing’ accounts. Car accounts would be PDA’s of the ‘dealership’ program address, and seeded with the word VIN number of the car, and the word CAR. Similarlily, a ‘leasing’ account corresponding to a car would be a PDA of the ‘dealership’ program address and perhaps the byte address of the car it corresponds to.

The car account could then store information about the car like its make, model, mileage and VIN number, along with the owner of the car as the ‘authority’. The leasing account may maintain information about the leasing rate, totals and hold some SOL that the owner of the car transfers in every paycheck to pay off the car over time. The ‘dealership’ program maintains authority over these accounts, and the only updates that can be made to these accounts must be defined in the dealership program, i.e. the dealership program may have functions like `change_owner(new_owner: PublicKey)` or `increase_mileage(vin_number: u32, miles_increased: u16)`. Operations that are not declared by the program cannot be committed, i.e. the owner may not change the VIN number of their car if the dealership program does not have a `change_vin(old_vin: u32, new_vin: u32)` function.

This is a very contrived example, but makes the point that the owner of something is declared on the account itself, but the account technically belongs to the program.

### The token model
The Solana Foundation maintains the ‘Solana Program Library’ which has a slue of generic but useful programs. This includes the SPL20 token program (named after the ERC20 token on Ethereum). The SPL20 token program can create token accounts corresponding to wallet public keys, and as the standard for tokens most wallets will display these token accounts along with your SOL hodlings2. An SPL20 token has a mint account, which defines the mint public key, the total supply of the token, the number of decimals (what is the smallest fractino of a token you can hold) and the instantiator of the token. To hold some tokens, a wallet must have an SPL20 token account, which holds their wallet public key, the public key of the mint, and the volume of tokens they are holding.

These token accounts are no different than the account model defined above, however are a more broadly accepted standard for ownership over something on-chain since they render in wallets and are derived from a single accepted token program. Tokens have limitations, however since their use is so broad. The token program itself only defines certain actions someone can take like minting more tokens, transferring tokens, burning tokens, etc.

A quick note, the recommended token account that corresponds to each holder is the ‘associated token account’, which is a PDA of the token program, the mint and the holder’s public key. That being said, the token account address does not have to be a PDA.

### The non-fungible token
NFT’s on Solana work differently than NFT’s on Ethereum. Ethereum outlines two standards, ERC20 for fungible tokens and ERC721 for non-fungible tokens, whereas all Solana tokens, regardless of fungibility, are governed by the single SPL20 program. As I mentioned prior, Solana token mints have a maximum supply, a number of decimals and an update authority. An NFT on Solana must have a supply of 1 (no fungibility), zero decimals (i.e. I can’t partition my NFT into pieces) and the update authority must be set to null (I can’t make more tokens later). Otherwise these tokens are the same as any other token, they can be transferred and are held using associated token accounts.

Since the fungible and non-fungible tokens are derived from the same program, other variations have also sprouted up. The semi-fungible token, for instance, is a token with a supply greater than 1, zero decimals and the update authority set to null. Additionally, there are NFT3’s with ‘fractional ownership’ where the supply is 1, but the number of decimals is non-zero and thus multiple people may own a single ’NFT’.

So you may notice that I haven’t mentioned any data storage parameter of a token. So how do I make my token a monkey?

The simplest data tied to a token may be a logo and a link. D-apps frequently use this for their utility tokens- they want to make their utility token have their logo and a link to the application. For simple use cases like this, the Solana Foundation maintains the Solana Token List repository4 on Github. Anyone can issue a pull request to add their token to the list and store some data with the token that websites like Solscan and Solana Explorer lookup when they go to display the token.

The NFT’s you’re familiar with, however, store their data on chain. Let’s take a look at a Degen Ape, for instance “Degen Ape 9991”. On Solscan, you’ll see the image of the monkey and the attributes:

| Attribute | Value |
| --------| ----|
| Background | Yellow |
| Fur/Skin | Brown/Yellow |
| Head | Judge's Wig |
| Mouth | Hotdog |
| Teeth | Gold Tooth |

This image and attributes are tied to a metadata account that corresponds to the token mint. This metadata account is a PDA of the metadata program and the token mint. The metadata account holds the link to a url storing the metadata in a standardized format that Solscan knows how to interpret and render to a user.

```
{
    "name": "Degen Ape #9991",
    "symbol": "DAPE",

...

    "attributes": [
    { "trait_type": "Background", "value": "Yellow" },
    { "trait_type": "Fur/Skin", "value": "Brown/Yellow" },
    ...
    ],
    "files": [
        { "uri": "https://arweave.net/...",
            "type": "image/png" }]
    },
    "image": "https://arweave.net/..."
}
```

## On Chain Data Storage
We talked briefly about IPFS earlier and some of it’s failures for decentralized storage. As I alluded to, a better option now exists using financial incentives.

### Arweave
Arweave is another blockchain built around keeping file storage costs low. Miners on the Arweave chain earn by servicing files rather than by validating transactions. This keeps costs extremely affordable- your top of the line mining rig can be a 2008 Dell desktop retrofitted with 4TB of storage for a couple hundred dollars on Amazon. Validation is done client side, so when I’m served a file it’s on me to check with other nodes to ensure that it’s the same.

Arweave also has their own smart contracts that work as state machines. I declare an initial state for the smart contract, and operations that are possible from that state (a simple example would be a counter that starts at zero and can increment by one at a time). When I ‘call’ the increment function, all I am doing is pulling the initial state, running the increment code, and returning the new state where the counter is up by 1. Each state is stored on chain, and ‘validation’ requires checking that each subsequent state is possible from the prior and was signed with a valid wallet.

### Bundlr
As you may have noticed, all of the links within the metadata on Degen Ape 9991 are Arweave links. Arweave has become heavily embedded in the Solana ecosystem, storing almost all of the metadata for tokens. But how do you link two distinct chains together with a single Solana wallet? Bundlr was developed to pay for uploads to Arweave with most popular currencies (currently supports Ethereum, Solana, Avalance etc.). A wallet on Ethereum or Solana that wants to upload to Arweave instantiates a Bundlr node and sends it funds (another allusion to earlier when I mentioned that accounts can store native currency). This SOL is now property of the Bundlr node, and a Bundlr wallet on Arweave uses an off chain mechanism to ensure that the node has sufficient funds to pay for an Arweave file upload.
This now means you can pay for data storage using SOL, on Arweave, at a fraction of the cost of native Solana or Ethereum storage. The current Arweave5 storage rate is something like $8 per GB, much much less than the $76,000 for Ethereum.

## Arweave and Solana, "The Perfect Stack"
Following the trajectory of NFT’s, it’s likely that all Web3 content will have to follow an ownership model. This makes it so that content is available across multiple platforms, and potentially traded / the shares of which distributed. A posting program for Solana should probably use the token model of ownership, rather than a simple account structure. This is the standard for on-chain ownership and will likely continue to be the community accepted standard regardless of medium.

As we’ve seen, the on-chain storage costs are too absurd as it currently stands- the average blog post would cost around $10 to upload and store rent exempt. All storage space for an account must be declared ahead of time, which means that a simple sentence must occupy the same storage space as a 10,000 word blog post. To get around the storage costs, we’ll have to use Arweave.

If we put both of these together, we get an account structure similar to the token metadata for Solana NFT’s. Each post is represented as a token (perhaps a fractional ownership NFT if there are multiple contributors), with a post-metadata account that stores a uri pointing to the upload on Arweave.

## My Unsolicited 2 Cents
This project started out as developing a post protocol for Solana, and quickly evolved into a research project on the technical interface for NFT’s. This lead me to the larger philosophical question of what does ‘ownership’ over bytes really mean, if the bytes themselves are publicly accessible?

Intellectual property is one aspect to this that could make sense. The blockchain allows for a record that someone is the ‘owner’ to the rights over a digital asset. The Bored Ape collection on Ethereum, for instance, has turned over the intellectual property rights of the monkeys to whomever owns a particular monkey. If I want to license my monkey for a commercial, I can (perhaps Doritos would be interested, although its difficult to imagine any other company caring). IP in a decentralized world is pretty iffy, however without someone to enforce IP, and on top of that I’ve been thouroughly convinced by Stephen Kinsella that IP isn’t property6.

The ownership over digital assets gets even weirder with the cross-chain implentations using Arweave. Arweave’s ledger does not maintain a record of ownership on Solana, and if I wanted to I could mint an NFT that points to the same upload as Degenerate Ape 9991. This would seem to imply that the value of the NFT doesn’t come from the image or attributes itself, but rather the token mint account on Solana itself, which on it’s own has no productive value.

Along this train of thought, the best case for digital asset ownership will probably come from DAO’s and other types of ‘gated’ communities that will require ownership of an NFT to join. The NFT will be the ticket into these digital country clubs, and the art associated with it is mostly a vanity piece, similar to a bumper sticker on your car.

But these are just my musings over the course of researching this project, and as long as the speculative market holds maybe the best course of action is to continue day trading monkey’s and shilling projects on Twitter.

## Acronym Glossary
| Acronym | Term | Definition |
| ------| ---| ---------|
| d-app | Decentralized Application | Application, typically built on the blockchain without a centralized backend (and in some cases, without a centrally hosted front end). |
| TPS | Transactions per Second | Self explanatory. |
| POW | Proof of Work | A consensus algorithm where the new blocks are determined by performing ‘work’. Typically manifests as solving hash functions until an abstract constraint is met. |
| POS | Proof of Stake | A consensus algorithm where new blocks are determined by ‘staking’ your currency. Improper hashes are punished by burning your stake. |
| POH | Proof of History | Solana’s consensus mechanism where new blocks are determined by being ‘downstream’ of past block hashes. These ‘blocks’ are called ‘slots’. |
| VDF | Verifiable Delay Function | The algorithm used to ensure that POH slots have waited a certain interval before submitting a new transaction. |
| IPFS | Interplanetary File System | Decentralized file storage system, similar to bittorrent. |
| PDA | Program Derived Address | An account address derived from the parent program address and some seeds. |
| NFT | Non-Fungible Token | A type of token that is not interchangeable with any other token. Supply of 0 and indivisible. |