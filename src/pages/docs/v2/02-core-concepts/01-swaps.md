---
title: Swaps
subtitle: Learn about the core functionality of the uniswap protocol. Token Swaps.
tags: swaps, documentation
---

# Introduction

Token swaps are a simple way to exchange one ERC-20 token for another.

For end-users, swapping is intuitive: a user picks an input token and an output token. They specify an input amount, and the protocol calculates how much of the output token they'll receive. They then execute the swap with one click, receiving the output token in their wallet immediately.

Beneath the surface, token swaps are fulfilled by a system of smart contracts that are constantly being interacted with by a marketplace of participants. Interactions between liquidity providers, traders, and arbitrageurs create the incentives and feedback loops necessary to keep markets liquid and prices accurate to broader market rates.

# Swaps at a glance

Swaps in Uniswap are different from trades on traditional exchanges. Uniswap does not use an order book to represent liquidity or determine prices. Uniswap uses an automated market maker mechanism to provide instant feedback on exchange rates and slippage.

Each token exchange pair on Uniswap is implemented by an underlying liquidity pool. A liquidity pool is a smart contract that holds two unique tokens and enforces rules around depositing and withdrawing them. In Uniswap, the rules specify that tokens can only be deposited and withdraw in accordance to a specific formula, `x * y = k`. `x` and `y` represent the quantities of the two tokens and `k` is their constant product.

The consequence of using this formula to govern the balance of each token in the pool is that when a token is deposited, a proportional amount must be withdrawn to maintain the constant. Contrariwise, if a token is withdrawn, a proportional amount must instead be also deposited.

# Unique properties of Swaps

This formula, known as an automated market maker, enables Uniswap to implement token exchange without needing an order book. This has a few important and novel consequences. An automated market maker obviates the need for active and explicit counterparties. Participants deposit tokens to the liquidity pool passively and asynchronously, at their convenience, and exchange is enabled autonomously by the Uniswap smart contract code running on Ethereum.

This means Uniswap's architecture is radically simplified and can run completely and natively on chain, giving it important properties equal to the underlying blockchain. Just like Ethereum, Uniswap is always online and doesn't require any centrally operated intermediary infrastructure. Because there is no order book, no external service is needed to match orders. Matching happens automatically by the contracts following the AMM formula.

In sum, Uniswap is a token swap marketplace designed from first principles to run natively on a blockchain network.