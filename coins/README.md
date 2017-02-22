# Coins Kata

## General Instructions

The goal of this kata is to be able to make change using the fewest number of coins possible. This kata can be completed using any set of coin denominations. For example, if using legal US coins, the change for $1.41 would include one $1 coin, one quarter, one dime, one nickel, and one penny.

Decisions the implementor should make:
- what is the public interface?
- what is the signature for the interface? (i.e. what input parameters does each method take, what are the input types, and what does the method return?)
- what (if any) objects will be used?
- how will the coins be represented in code?
- what (if any) order are the coins returned in?

## Iterations

### Legal US Coins

Make change using the fewest number of coins possible using legal US coins. You can review the legal US coins and their values [here](https://en.wikipedia.org/wiki/Coins_of_the_United_States_dollar).

|Coin Name|Coin Value|
|---|---|
|Cent|1¢|
|Nickel|5¢|
|Dime|10¢|
|Quarter|25¢|
|Half-Dollar|50¢|
|Dollar|$1|

### Historic US Coins

Once you can make change using the legal US coins, introduce all new set of coins that includes some or all of the obsolete US coins. Obsolete coins can be found [here](https://en.wikipedia.org/wiki/Coins_of_the_United_States_dollar#Obsolete_coins).

|Coin Name|Coin Value|
|---|---|
|Half Cent|1/2¢|
|Cent|1¢|
|Two-cent Piece|2¢|
|Trime|3¢|
|Nickel|5¢|
|Dime|10¢|
|Twenty-cent Piece|20¢|
|Quarter|25¢|
|Dollar|$1|

### Prime Coins

Who says coins should always work out evenly? But does the extra change go to the buyer or the seller? Hmmmmm... (Note that 2 is skipped in this prime series just to keep things a tad more interesting.) In this case, the correct answer should return the correct change (if possible) in as few coins as possible for making the correct change.

|Coin Name|Coin Value|
|---|---|
|A|3¢|
|B|5¢|
|C|7¢|
|D|11¢|
|E|13¢|
|F|17¢|
|G|18¢|
|H|23¢|
|I|29¢|
|J|31¢|
