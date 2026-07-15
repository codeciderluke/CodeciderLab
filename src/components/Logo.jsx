import logoUrl from '../assets/CodeciderLogo.png'

// The Codecider Lab wordmark logo (landscape, ~2.38:1). `size` sets the
// rendered height in px; width scales automatically to preserve the ratio.
export default function Logo({ size = 36, animated = false }) {
  return (
    <img
      src={logoUrl}
      alt="Codecider Lab"
      className={animated ? 'logo-img logo-img-animated' : 'logo-img'}
      style={{ height: size, width: 'auto', maxWidth: '100%', display: 'block' }}
    />
  )
}
