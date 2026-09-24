# Licensing and attribution

Copyright © 2026 Solo Satoshi.

This application is distributed under the GNU General Public License version
3 only. See `LICENSE` and `LICENSE-SCOPE.md`. No trademark license is granted;
see `TRADEMARKS.md`.

Portions of the flashing workflow, hardware-selection approach, and initial
language catalog were adapted from these GPL-3.0 projects:

- [bitaxeorg/bitaxe-web-flasher](https://github.com/bitaxeorg/bitaxe-web-flasher)
- [shufps/nerdqaxe-web-flasher](https://github.com/shufps/nerdqaxe-web-flasher)

Copyright in those upstream works remains with their respective authors and
contributors. Solo Satoshi's modifications are identified by this application's
distinct source distribution and release history. The complete GPL-covered
source for the deployed version is published with the application.

It discovers and mirrors unmodified GPL-3.0 firmware from:

- [bitaxeorg/ESP-Miner](https://github.com/bitaxeorg/ESP-Miner)
- [bitaxeorg/BAP-GT-TOUCH](https://github.com/bitaxeorg/BAP-GT-TOUCH)
- [shufps/ESP-Miner-NerdQAxePlus](https://github.com/shufps/ESP-Miner-NerdQAxePlus)

Each mirrored firmware release is published with the corresponding tagged
source archive. The application and release pages link to source code and
license information.

Runtime components retain their own licenses. Copies required for distribution
are included under `public/licenses/` and summarized on `public/licenses.html`.

The browser K230 transport and KDIMG interoperability follow the public
protocol implemented by [kendryte/k230_flash_py](https://github.com/kendryte/k230_flash_py),
licensed under the MIT License by Canaan INC. The application downloads the
SPI NAND loader from a pinned commit in that official repository and accepts it
only when its SHA-256 digest matches the value fixed in the source. The loader
binary is not redistributed in this repository.

The optional Avalon Nano 3S firmware accepted by the Mujina beta is maintained
by the community [aadhi1014/nano-mujina](https://github.com/aadhi1014/nano-mujina)
project. No Nano Mujina firmware image is supplied or redistributed here. The
Bitaxe Gamma path accepts compatible local firmware through the Advanced ESP
flasher. The official 256 Foundation Mujina project is available at
[256foundation/mujina](https://github.com/256foundation/mujina).

The locally hosted Manrope and Newsreader typefaces are distributed under the
SIL Open Font License version 1.1. Their license notices are included under
`public/licenses/`.
