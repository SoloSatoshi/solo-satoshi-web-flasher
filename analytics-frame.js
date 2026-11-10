/* SPDX-License-Identifier: GPL-3.0-only; Copyright (C) 2026 Solo Satoshi LLC. */
(() => {
  'use strict'
  let initialized = false
  const pattern = /^[a-zA-Z0-9 ._:+-]{1,100}$/
  const waiting = []
  function blocked() { return navigator.doNotTrack === '1' || navigator.doNotTrack === 'yes' || navigator.globalPrivacyControl }
  function load(src, integrity, setup) {
    const script = document.createElement('script')
    script.src = src; script.integrity = integrity; script.crossOrigin = 'anonymous'; script.referrerPolicy = 'no-referrer'; script.async = true
    setup?.(script)
    document.head.append(script)
  }
  function emit(event) {
    if (blocked()) return
    try { window._paq?.push(['trackEvent', ...event]) } catch { /* Optional. */ }
    try {
      if (window.AhrefsAnalytics) window.AhrefsAnalytics.sendEvent(event[0] + ' - ' + event[1], { props: { selection: event[2] } })
      else if (waiting.length < 50) waiting.push(event)
    } catch { /* Optional. */ }
  }
  window.addEventListener('message', event => {
    if (window.parent === window || event.source !== window.parent || event.origin !== 'https://flash.solosatoshi.com' || blocked()) return
    if (event.data?.type === 'ss-analytics-init' && !initialized) {
      initialized = true
      // A permanently empty cookie interface; no browser storage is exposed.
      Object.defineProperty(document, 'cookie', { get: () => '', set: () => {}, configurable: false })
      window._paq = [ ['disableCookies'], ['HeatmapSessionRecording::disable'], ['HeatmapSessionRecording::disableCaptureKeystrokes'], ['setDoNotTrack', true], ['disableBrowserFeatureDetection'], ['disableCampaignParameters'], ['setCustomUrl', 'https://flash.solosatoshi.com/'], ['setDocumentTitle', 'Solo Satoshi Web Flasher'], ['setReferrerUrl', ''], ['setTrackerUrl', 'https://solosatoshi.matomo.cloud/matomo.php'], ['setSiteId', '5'], ['trackPageView'] ]
      load('https://cdn.matomo.cloud/solosatoshi.matomo.cloud/matomo.js', 'sha384-nwpPS8Wtz0sLttv5HvsuUteWirqxZ/P9tbn3nSKjxgGwW4pA0xJzancDp2czr8T6')
      load('https://analytics.ahrefs.com/analytics.js', 'sha384-W1wjYK8T9Gz7xq6XpVAitAMIbyk3r/jlMxGQAdL3M058ajAAUoV9TVg2+zPMr3jR', script => {
        script.dataset.key = '+z79XV3U+XLTQOyb5D2hTg'
        script.dataset.pageLocation = 'https://flash.solosatoshi.com/'
        script.onload = () => { for (const item of waiting.splice(0)) { try { window.AhrefsAnalytics?.sendEvent(item[0] + ' - ' + item[1], { props: { selection: item[2] } }) } catch { /* Optional. */ } } }
      })
      window.parent.postMessage({ type: 'ss-analytics-ready' }, 'https://flash.solosatoshi.com')
    } else if (initialized && event.data?.type === 'ss-analytics-event') {
      const value = event.data.event
      if (Array.isArray(value) && value.length === 3 && value.every(x => typeof x === 'string' && pattern.test(x))) emit(value)
    }
  })
})()
