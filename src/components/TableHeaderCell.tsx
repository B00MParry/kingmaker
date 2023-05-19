import React  from 'react'

type TableHeaderCellProps = {
    header: string
}

export const TableHeaderCell = ({ header }: TableHeaderCellProps) => (
	<th
		scope="col"
		className="px-6 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase whitespace-nowrap"
	>
		{header}
	</th>
)