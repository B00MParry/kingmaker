import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredCampaigns } from '../store/campaigns'
import { TableRowCell } from './TableRowCell'
import { TableHeaderCell } from './TableHeaderCell'
import { TABLE_HEADERS } from '../lib/constants'

export const Table = () => {
	const filter = useRecoilValue(filteredCampaigns).filteredCampaigns

	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
				<div className="inline-block min-w-full py-2">
					<div className="overflow-hidden">
						<table className="min-w-full">
							<thead className="bg-white border-b">
								<tr>
									{
										TABLE_HEADERS.map((header, index) => <TableHeaderCell key={index} header={header} />)
									}
								</tr>
							</thead>
							<tbody>
								{filter.map((campaign, index) => <TableRowCell key={index} bgGray={!(index % 2)} {...campaign} />)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}