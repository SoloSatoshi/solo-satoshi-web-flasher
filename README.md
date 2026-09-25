# [Solo Satoshi Web Flasher](https://flash.solosatoshi.com/)

A browser-based firmware installer for supported Bitaxe and NerdAxe Bitcoin
miners and the Bitaxe Turbo Touch display. Use the flasher at
**https://flash.solosatoshi.com/**.

**[Open the live Solo Satoshi Web Flasher](https://flash.solosatoshi.com/)**

## Capabilities

- Installs verified production releases from the official ESP-Miner projects.
- Installs verified BAP-GT-TOUCH releases on the Turbo Touch display
  controller, clearly separated from the Bitaxe GT miner inside the unit.
- Offers newer official prereleases when an eligible build is available.
- Shows the newest stable release and up to five earlier compatible stable
  releases for supported rollbacks.
- Filters firmware by miner family, model, board revision, and the version in
  which that hardware first became supported.
- Verifies official firmware with SHA-256 before writing it and checks the
  ESP bootloader's MD5 result after the write completes.
- Can preserve the miner's settings partition during verified-release installs.
- Shows write verification, restart, USB disconnect, and completion status,
  and restarts supported hardware automatically after a successful flash.
- Provides an Advanced tool for a local merged ESP32-S3 `.bin` built for
  address `0x0`. Custom firmware stays in the browser and is never uploaded.
- Provides a clearly marked Mujina beta for local Avalon Nano 3S
  `.kdimg` images. It validates the KDIMG structure and every embedded
  partition SHA-256 before writing the K230 device's SPI NAND through
  WebUSB, then restarts the miner.
- Routes Bitaxe Gamma Mujina bridge images to the Advanced ESP32-S3
  flasher, which verifies the connected chip before writing.
- Provides a translated interface in nine languages.

A current desktop version of Chrome, Edge, or Brave is required because the
installer uses Web Serial and WebUSB. Firefox, Safari, and mobile browsers
cannot flash connected hardware with this tool.

## Firmware safety

Official releases are discovered from the upstream projects and checked by
release automation and again in the browser. The interface only offers releases
compatible with the selected hardware's recorded support date.

Custom firmware is not supplied, authenticated, or checked for hardware
compatibility by Solo Satoshi. The Advanced tool writes the complete image
without preserving settings, and the user is responsible for the selected file.
The Nano 3S Mujina beta has the same local-file limitations, may be unstable,
and replaces the complete SPI NAND image. Interrupting power or USB can leave
the Nano unable to boot. Nano Mujina is a community fork rather than an
official 256 Foundation release.

When you are ready, [open the live flasher](https://flash.solosatoshi.com/)
in a supported desktop browser.

## Source and licenses

This production repository contains the deployed website and the exact
corresponding GPL source for its active browser application:

- [Live web flasher](https://flash.solosatoshi.com/)
- [Current corresponding source](https://flash.solosatoshi.com/source/latest.tar.gz)
- [Licenses and attribution](https://flash.solosatoshi.com/licenses.html)
- [Terms of Service](https://flash.solosatoshi.com/terms.html)
- [Privacy Policy](https://flash.solosatoshi.com/privacy.html)

The application is licensed under GNU GPL version 3 only. Portions of the
flashing workflow, hardware-selection approach, and initial language catalog
were adapted from
[bitaxeorg/bitaxe-web-flasher](https://github.com/bitaxeorg/bitaxe-web-flasher)
and
[shufps/nerdqaxe-web-flasher](https://github.com/shufps/nerdqaxe-web-flasher).
Firmware is obtained from the official
[Bitaxe ESP-Miner](https://github.com/bitaxeorg/ESP-Miner) and
[NerdAxe ESP-Miner](https://github.com/shufps/ESP-Miner-NerdQAxePlus)
repositories. Turbo Touch display firmware is obtained from the official
[BAP-GT-TOUCH](https://github.com/bitaxeorg/BAP-GT-TOUCH) repository.
The K230 implementation interoperates with the MIT-licensed
[K230 flash tool](https://github.com/kendryte/k230_flash_py). Its pinned SPI
NAND loader is fetched from that official repository and checked against a
fixed SHA-256 digest before use. The optional Nano 3S firmware is maintained
by the community [nano-mujina](https://github.com/aadhi1014/nano-mujina)
project; no Mujina firmware image is distributed by this repository.

The repository intentionally contains no development workflow, credentials,
infrastructure configuration, or internal business material.
