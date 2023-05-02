import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { filteredCampaignsCount, setPagination } from '../store/campaigns'

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
					<option value={10}>10</option>
					<option value={25}>25</option>
					<option value={50}>50</option>
					<option value={100}>100</option>
				</select>
				<span className="ml-4 text-xs font-medium tracking-wide text-gray-900 uppercase">Rows per page</span>
			</div>

			<div className="flex items-center justify-end mt-2 sm:mt-0">
				<div className="flex items-center justify-center space-x-4">
					<div onClick={prevPage} className="flex px-2 py-1 text-3xl leading-6 transition shadow-sm cursor-pointer align-items text-slate-400 hover:text-slate-500">
						<svg
							className="inline w-4 h-4 text-gray-400"
							viewBox="0 0 1024 1024"
						>
							<path
								d="M640 832a21.333333 21.333333 0 0 1-15.146667-6.186667l-298.666666-298.666666a21.333333 21.333333 0 0 1 30.293333-30.293334l298.666667 298.666667a21.333333 21.333333 0 0 1 0 30.293333A21.333333 21.333333 0 0 1 640 832z"
							/>
							<path
								d="M341.333333 533.333333a21.333333 21.333333 0 0 1-15.146666-6.186666 21.333333 21.333333 0 0 1 0-30.293334l298.666666-298.666666a21.333333 21.333333 0 0 1 30.293334 30.293333l-298.666667 298.666667A21.333333 21.333333 0 0 1 341.333333 533.333333z"
							/>
						</svg>
					</div>
					<div className="text-slate-500">{pagination.page} / {lastPage}</div>
					<div onClick={nextPage} className="flex px-2 py-1 text-3xl leading-6 transition shadow-sm cursor-pointer align-items text-slate-400 hover:text-slate-500">
						<svg
							className="inline w-4 h-4 text-gray-400"
							viewBox="0 0 1024 1024"
						>
							<path
								d="M682.666667 533.333333a21.333333 21.333333 0 0 1-15.146667-6.186666l-298.666667-298.666667a21.333333 21.333333 0 0 1 30.293334-30.293333l298.666666 298.666666a21.333333 21.333333 0 0 1 0 30.293334A21.333333 21.333333 0 0 1 682.666667 533.333333z"
							/>
							<path
								d="M384 832a21.333333 21.333333 0 0 1-15.146667-6.186667 21.333333 21.333333 0 0 1 0-30.293333l298.666667-298.666667a21.333333 21.333333 0 0 1 30.293333 30.293334l-298.666666 298.666666A21.333333 21.333333 0 0 1 384 832z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}