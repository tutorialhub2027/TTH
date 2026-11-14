import { useEffect, useRef, useState } from 'react'
import './App.css'

const icons = {
  home: 'M3 10l9-7 9 7v10H3z M9 20v-7h6v7',
  trophy: 'M8 3h8v7a4 4 0 0 1-8 0z M8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 3v6m-5 0h10',
  book: 'M12 6C9 4 5 4 2 5v14c3-1 7-1 10 1 3-2 7-2 10-1V5c-3-1-7-1-10 1zm0 0v14',
  people: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-4m-3-12a4 4 0 0 1 0 8M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
  setter: 'M2 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2m-2-14a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm7 1v8m-4-4h8',
  moon: 'M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z',
  sun: 'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19m0-14-1.5 1.5m-11 11L5 19m12-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0z',
  github: 'M9 20c-4 1-4-2-6-2m12 4v-3c0-1-.3-2-1-2 4-.4 6-2 6-5 0-2-.5-3-1.5-4 .5-1 .5-3 0-4-1 0-3 1-4 2a13 13 0 0 0-5 0c-1-1-3-2-4-2-.5 1-.5 3 0 4C4.5 9 4 10 4 12c0 3 2 4.6 6 5-.7.5-1 1-1 2v3',
  discord: 'M8 6 5 7c-2 3-3 6-3 9l5 2 1-2m8-10 3 1c2 3 3 6 3 9l-5 2-1-2M7 15c3 2 7 2 10 0m-8-3h.01m5.99 0h.01M8 7c3-1 5-1 8 0',
  chevron: 'm6 9 6 6 6-6',
  external: 'M13 4h7v7m0-7-9 9m-1-7H4v14h14v-6',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'm6 6 12 12M18 6 6 18',
}

function Icon({ name }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={icons[name]} /></svg>
}

function BrandAccent() {
  return <span className="brand-accent"><span className="brand-spark" aria-hidden="true" />AI</span>
}


export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('aicc-theme') === 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('aicc-theme', dark ? 'dark' : 'light')
  }, [dark])

  return ('x')
}
