# The Funniest Toaster Error Message

[![Make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/arestafirman/toaster-error/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/arestafirman/toaster-error/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entri untuk kompetisi Make.fun "The Funniest Toaster Error Message": satu baris
pesan error paling lucu yang bisa dikeluarkan sebuah toaster.

## Entri

> ERROR 04: BREAD NOT FOUND. Please insert bread, or lower your expectations for breakfast.

## Cara kerja

`main.ts` menulis entri di atas ke `/output/entry.txt`. Program ini deterministik:
tanpa network, tanpa random, tanpa jam — outputnya identik di setiap run.
Entri terdiri dari 89 karakter, satu baris, tanpa trailing newline.
Verifikasi cepat setelah run: `wc -c /output/entry.txt` harus menunjukkan 89.

Jalankan dengan:

```sh
node main.ts
```
