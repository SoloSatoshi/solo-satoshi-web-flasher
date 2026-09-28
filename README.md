# [Solo Satoshi Web Flasher](https://flash.solosatoshi.com/)

A browser-based firmware installer for supported Bitaxe, BitForge, NerdAxe,
and NerdNOS Bitcoin miners and the Bitaxe Turbo Touch display. Use the flasher at
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
[Bitaxe ESP-Miner](https://github.com/bitaxeorg/ESP-Miner),
[BitForge forge-os](https://github.com/WantClue/forge-os), and
[NerdAxe ESP-Miner](https://github.com/shufps/ESP-Miner-NerdQAxePlus)
repositories. Turbo Touch display firmware is obtained from the official
[BAP-GT-TOUCH](https://github.com/bitaxeorg/BAP-GT-TOUCH) repository.
NerdNOS uses an explicitly pinned image from the official Bitaxe web flasher
and the matching pinned source from
[WantClue/NerdMiner_v2](https://github.com/WantClue/NerdMiner_v2).

The repository intentionally contains no development workflow, credentials,
infrastructure configuration, or internal business material.
