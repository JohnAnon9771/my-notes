import {useState} from 'react'

import {ChevronDown} from 'assets/icons'

export default function Select(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('Português')

  return (
    <div className="flex flex-col absolute bottom-3 right-3 w-3/4 gap-2">
      <div
        className={`border rounded-xl select-none font-semibold p-3 gap-2 shadow-sm z-10 opacity-0 ${
          isOpen && 'opacity-100'
        }`}
      >
        <option
          className="hover:bg-gray-100 rounded-md p-2 font-semibold"
          onClick={e => setValue(e.currentTarget.innerText)}
        >
          Português
        </option>
        <option
          className="hover:bg-gray-100 rounded-md p-2 font-semibold"
          onClick={e => setValue(e.currentTarget.innerText)}
        >
          English
        </option>
      </div>
      <div className="flex flex-col border-2 shadow-sm rounded-xl p-3 relative">
        <span className="absolute p-1 -top-5 left-3 font-semibold text-gray-300 bg-white">
          Idioma
        </span>
        <span>{value}</span>
        <button
          className="absolute right-3 "
          onClick={() => setIsOpen(state => !state)}
          onBlur={() => setIsOpen(false)}
        >
          <ChevronDown
            className={`transform transition ease-out duration-200 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>
    </div>
  )
}
