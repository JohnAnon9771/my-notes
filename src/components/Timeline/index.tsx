interface Props {
	isActive?: boolean
}

export default function Timeline({isActive}: Props): JSX.Element {
	return (
		<div className="flex flex-col items-center m-3">
			<div className="bg-secondary h-4 w-4 rounded-full"></div>
			<div className="h-5/6 w-[1px] bg-secondary"></div>
			<div className="rounded-full border-secondary border h-3 w-3"></div>
		</div>
	)
}
