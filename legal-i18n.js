(function () {
  const languages = [
    ['en', 'English'],
    ['de', 'Deutsch'],
    ['it', 'Italiano'],
    ['tlh', 'Klingon'],
    ['pt', 'Portuguese'],
    ['ru', 'Русский'],
    ['tr', 'Türkçe'],
    ['sk', 'Slovenský'],
    ['ro', 'Română'],
  ]
  const notices = {
    de: 'Diese Übersetzung dient nur als Lesehilfe. Bei Abweichungen ist die englische Fassung maßgeblich.',
    it: 'Questa traduzione è fornita solo per comodità. In caso di discrepanze, prevale la versione inglese.',
    tlh: 'This translation aid is provided for convenience. The English version controls if there is any difference.',
    pt: 'Esta tradução é fornecida apenas por conveniência. Em caso de divergência, prevalece a versão em inglês.',
    ru: 'Этот перевод предоставлен только для удобства. В случае расхождений применяется английская версия.',
    tr: 'Bu çeviri yalnızca kolaylık sağlamak amacıyla sunulmuştur. Herhangi bir farklılık durumunda İngilizce sürüm geçerlidir.',
    sk: 'Tento preklad slúži len na uľahčenie čítania. V prípade nezrovnalostí je rozhodujúca anglická verzia.',
    ro: 'Această traducere este furnizată doar pentru comoditate. În caz de neconcordanță, prevalează versiunea în limba engleză.',
  }
  const translatedNodes = []

  function normalized(value) {
    return value.replace(/\s+/g, ' ').trim()
  }

  function applyLanguage(language) {
    const selected = languages.some(([code]) => code === language) ? language : 'en'
    const dictionary = window.LEGAL_TRANSLATIONS?.[selected] || window.LEGAL_TRANSLATIONS?.en || {}
    document.documentElement.lang = selected
    document.title = dictionary[document.documentElement.dataset.englishTitle] || document.documentElement.dataset.englishTitle
    const description = document.querySelector('meta[name="description"]')
    if (description) description.content = dictionary[description.dataset.english] || description.dataset.english

    translatedNodes.forEach(([node, original, prefix, suffix]) => {
      node.nodeValue = `${prefix}${dictionary[original] || original}${suffix}`
    })

    const label = document.querySelector('.legal-language-label')
    if (label) label.textContent = dictionary.Language || 'Language'
    const select = document.querySelector('.legal-language-select')
    if (select) select.value = selected
    const notice = document.querySelector('.translation-notice')
    if (notice) {
      notice.textContent = selected === 'en' ? '' : notices[selected]
      notice.hidden = selected === 'en'
    }
    localStorage.setItem('soloSatoshiFlasherLanguage', selected)
    if (select) select.setAttribute('aria-label', dictionary.Language || 'Language')
  }

  function prepareText() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    const nodes = []
    while (walker.nextNode()) nodes.push(walker.currentNode)
    nodes.forEach((node) => {
      if (node.parentElement?.closest('.legal-language-control, .translation-notice, code, pre')) return
      const original = normalized(node.nodeValue || '')
      if (!original) return
      const raw = node.nodeValue || ''
      const prefix = /^\s/.test(raw) ? ' ' : ''
      const suffix = /\s$/.test(raw) ? ' ' : ''
      translatedNodes.push([node, original, prefix, suffix])
      node.nodeValue = `${prefix}${original}${suffix}`
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    const title = document.title
    document.documentElement.dataset.englishTitle = title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.dataset.english = description.content
    prepareText()

    const control = document.createElement('label')
    control.className = 'legal-language-control'
    control.innerHTML = '<span class="legal-language-label">Language</span><select class="legal-language-select" aria-label="Language"></select>'
    const select = control.querySelector('select')
    languages.forEach(([code, name]) => select.add(new Option(name, code)))
    select.addEventListener('change', () => applyLanguage(select.value))
    const navigation = document.querySelector('.legal-header nav')
    if (navigation) {
      navigation.append(control)
    } else {
      control.classList.add('standalone')
      document.querySelector('.back')?.after(control)
    }

    const notice = document.createElement('p')
    notice.className = 'translation-notice'
    notice.hidden = true
    const noticeAnchor = document.querySelector('.legal-hero .meta') || document.querySelector('h1')
    noticeAnchor?.after(notice)

    const saved = localStorage.getItem('soloSatoshiFlasherLanguage')
    const browser = navigator.language.split('-')[0]
    applyLanguage(saved || browser || 'en')
  })
})()
