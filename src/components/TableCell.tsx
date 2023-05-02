import React  from 'react'
import { CampaignType } from '../store/campaigns'

type TableHeaderCellProps = {
    header: string
}

type TableRowCellProps = CampaignType & {
    bgGray: boolean
}

// Separate components and make reusable (separation of concerns) + create a constants file with business logic / variables

export const TableHeaderCell = ({ header }: TableHeaderCellProps) => (
	<th
		scope="col"
		className="px-6 py-4 text-xs font-medium tracking-wide text-left text-gray-500 uppercase whitespace-nowrap"
	>
		{header}
	</th>
)

export const TableRowCell = ({ id, name, startDate, endDate, Budget, bgGray }: TableRowCellProps) => {
	// Start date is before today or end date is after today
	const active = new Date(startDate) <= new Date() || new Date(endDate) >= new Date()

	return (
		<tr key={id} className={`${bgGray ? 'bg-gray-100' : 'bg-white'} border-b`}>
			<td className="px-6 py-4 text-sm text-gray-900">
				{name}
			</td>
			<td className="flex items-center px-6 py-4 text-xs font-medium tracking-wide text-gray-900 uppercase">
				{active ?
					<>
						<svg
							className="inline w-4 h-4 mr-1 text-gray-400 fill-green-600"
							viewBox="0 0 24 24"
						>
							<path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z" />
						</svg>
                        Active
					</>
					: <>
						<svg
							className="inline w-4 h-4 mr-1 text-gray-400 fill-red-600"
							viewBox="0 0 30 30"
						>
							<path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.414,15 c0,0,3.139,3.139,3.293,3.293c0.391,0.391,0.391,1.024,0,1.414c-0.391,0.391-1.024,0.391-1.414,0C18.139,19.554,15,16.414,15,16.414 s-3.139,3.139-3.293,3.293c-0.391,0.391-1.024,0.391-1.414,0c-0.391-0.391-0.391-1.024,0-1.414C10.446,18.139,13.586,15,13.586,15 s-3.139-3.139-3.293-3.293c-0.391-0.391-0.391-1.024,0-1.414c0.391-0.391,1.024-0.391,1.414,0C11.861,10.446,15,13.586,15,13.586 s3.139-3.139,3.293-3.293c0.391-0.391,1.024-0.391,1.414,0c0.391,0.391,0.391,1.024,0,1.414C19.554,11.861,16.414,15,16.414,15z" />
						</svg>
                        Inactive
					</>}
			</td>
			<td className="px-6 py-4 text-sm text-gray-900">
				{startDate}
			</td>
			<td className="px-6 py-4 text-sm text-gray-900">
				{endDate}
			</td>
			<td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
				{`$ ${Budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
			</td>
		</tr>
	)
}