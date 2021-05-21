interface Props {
  isActive?: boolean
}

export default function Card({isActive}: Props): JSX.Element {
  return (
    <div
      className={`flex flex-col justify-between w-full max-h-28 max-w-sm md:max-w-none h-full py-3 px-4 rounded-xl shadow-lg md:leading-6 ${
        isActive ? ' bg-secondary' : 'bg-white border'
      }`}
    >
      <h2>
        Estudo de <strong>conceitos</strong>
      </h2>
      <footer>
        <p className="font-bold">Tempo: 60min</p>
        {isActive && (
          <div className="w-full rounded-full bg-gray-200 flex items-center p-1">
            <div className="bg-primary w-5 h-1 rounded-full"></div>
          </div>
        )}
      </footer>
    </div>
  )
}
