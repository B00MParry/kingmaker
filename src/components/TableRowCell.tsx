import React from 'react'
import { CampaignType } from '../store/campaigns'
import { addCommaSeparationToNumber } from '../lib/utils'
import { Icon } from './Icon'

type TableRowCellProps = CampaignType & {
	bgGray: boolean
}

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
						<Icon className="inline w-4 h-4 mr-1 text-gray-400 fill-green-600" name="active" />
						Active
					</>
					: <>
						<Icon className="inline w-4 h-4 mr-1 text-gray-400 fill-red-600" name="inactive" />
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
				{`$ ${addCommaSeparationToNumber(Budget)}`}
			</td>
		</tr>
	)
}