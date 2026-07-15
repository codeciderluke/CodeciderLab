const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

// No-op when the measurement ID is not configured (e.g. local development),
// so dev traffic never pollutes production statistics.
export function initAnalytics() {
  if (!MEASUREMENT_ID) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  gtag('js', new Date())
  // page_view is sent manually on route changes (SPA), so disable the
  // automatic one to avoid double counting.
  gtag('config', MEASUREMENT_ID, { send_page_view: false })
}

export function trackPageView(path) {
  if (!MEASUREMENT_ID || !window.gtag) return

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}
