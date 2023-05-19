import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { filteredCampaignsCount, setPagination } from '../store/campaigns'
import { ROWS_PER_PAGE } from '../lib/constants'
import { Icon } from './Icon'

export default function Pagination() {
	const [pagination, updatePagination] = useRecoilState(setPagination)
	const campaignCount = useRecoilValue(filteredCampaignsCount)
	const lastPage = Math.ceil(campaignCount / pagination.limit) || 1

	const nextPage = () => {
		if (pagination.page < lastPage) {
			updatePagination({ ...pagination, page: pagination.page + 1 })
		}
	}

	const prevPage = () => {
		if (pagination.page > 1) {
			updatePagination({ ...pagination, page: pagination.page - 1 })
		}
	}

	return (
		<div className="flex flex-col-reverse items-center justify-between px-6 pt-2 pb-6 sm:flex-row">
			<div className="flex items-center mt-1 sm:mt-0">
				<select onChange={(e) => updatePagination({ page: 1, limit: Number(e.currentTarget.value) })} className="max-w-[100px] cursor-pointer outline-none border-b text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-2 py-1">
					{
						ROWS_PER_PAGE.map((row, index) => <option key={index} value={row}>{row}</option>)
					}
				</select>
				<span className="ml-4 text-xs font-medium tracking-wide text-gray-900 uppercase">Rows per page</span>
			</div>

			<div className="flex items-center justify-end mt-2 sm:mt-0">
				<div className="flex items-center justify-center space-x-4">
					<div onClick={prevPage} className="flex px-2 py-1 text-3xl leading-6 transition shadow-sm cursor-pointer align-items text-slate-400 hover:text-slate-500">
						<Icon className="inline w-4 h-4 text-gray-400" name="arrowLeft" />
					</div>
					<div className="text-slate-500">{pagination.page} / {lastPage}</div>
					<div onClick={nextPage} className="flex px-2 py-1 text-3xl leading-6 transition shadow-sm cursor-pointer align-items text-slate-400 hover:text-slate-500">
						<Icon className="inline w-4 h-4 text-gray-400" name="arrowRight" />
					</div>
				</div>
			</div>
		</div>
	)
}