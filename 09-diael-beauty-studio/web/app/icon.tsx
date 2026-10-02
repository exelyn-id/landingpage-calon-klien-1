import { ImageResponse } from 'next/og'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

// Diael Beauty Studio tidak memiliki file logo, jadi ikon memakai inisial teks.
// Tidak membaca file apa pun agar tidak crash saat build.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: '#EC4899',
          color: 'white',
          fontSize: '36px',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        }}
      >
        D
      </div>
    ),
    {
      ...size,
    }
  )
}
