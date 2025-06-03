import { useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SerchMenu'
import CountriesList from './CountriesContainer'

import { useTheme } from '../hooks/useThemes'

export default function Home() {
  const [query, setQuery] = useState('')
  // const [isDark]= useOutletContext()
  const [isDark] = useTheme()
  // useEffect(()=>{
  //   window.addEventListener('resize', () => {
  //     console.log(window.innerWidth9);
  //   })
  // })
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}