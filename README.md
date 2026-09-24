# Solo Satoshi Web Flasher

A browser-based firmware installer for supported Bitaxe and NerdAxe Bitcoin
miners. Use the flasher at **https://flash.solosatoshi.com/**.

## Capabilities

- Installs verified production releases from the official ESP-Miner projects.
- Offers newer official prereleases when an eligible build is available.
- Shows up to five compatible production releases for supported rollbacks.
- Filters firmware by miner family, model, board revision, and the version in
  which that hardware first became supported.
- Verifies official firmware with SHA-256 before writing it.
- Can preserve the miner's settings partition during verified-release installs.
- Restarts the miner automatically after a successful flash.
- Provides an Advanced tool for a local merged ESP32-S3 `.bin` built for
  address `0x0`. Custom firmware stays in the browser and is never uploaded.
- Provides a translated interface in nine languages.

A current desktop version of Chrome, Edge, or Brave is required because the
installer uses Web Serial. Firefox, Safari, and mobile browsers cannot flash a
connected miner with this tool.

## Firmware safety

Official releases are discovered from the upstream projects and checked by
release automation and again in the browser. The interface only offers releases
compatible with the selected hardware's recorded support date.

Custom firmware is not supplied, authenticated, or checked for hardware
compatibility by Solo Satoshi. The Advanced tool writes the complete image
without preserving settings, and the user is responsible for the selected file.

## Source and licenses

This production repository contains the deployed website and the exact
corresponding GPL source for its active browser application:

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
repositories.

The repository intentionally contains no development workflow, credentials,
infrastructure configuration, or internal business material.
