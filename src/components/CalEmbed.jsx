import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

/**
 * Inline Cal.com scheduler — styled to match the portfolio palette.
 * Accent color #4de297 (green) on the dark theme.
 */
export default function CalEmbed() {
  useEffect(() => {
    let mounted = true
    ;(async () => {
      const cal = await getCalApi({ namespace: '30min' })
      if (!mounted) return
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          dark: {
            'cal-brand': '#4de297',
            'cal-bg-emphasis': '#1a1a1a',
            'cal-bg': '#1a1a1a',
            'cal-bg-subtle': '#222222',
            'cal-bg-muted': '#2a2a2a',
            'cal-bg-inverted': '#e5e5e5',
            'cal-border': 'rgba(229, 229, 229, 0.15)',
            'cal-border-emphasis': 'rgba(77, 226, 151, 0.4)',
            'cal-text': '#e5e5e5',
            'cal-text-emphasis': '#ffffff',
            'cal-text-muted': 'rgba(229, 229, 229, 0.6)',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
    return () => { mounted = false }
  }, [])

  return (
    <div className="cal-embed-wrap">
      <Cal
        namespace="30min"
        calLink="marcelo-dev-rgpn5p/30min"
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{ layout: 'month_view', theme: 'dark' }}
      />
    </div>
  )
}
