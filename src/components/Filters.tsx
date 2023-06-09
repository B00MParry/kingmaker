import React  from 'react'
import { useRecoilState } from 'recoil'
import { setDates, setFilter, setPagination } from '../store/campaigns'
import { formatInputDate, unFormatInputDate } from '../lib/utils'

export const Filters = () => {
	const [search, setSearch] = useRecoilState(setFilter)
	const [dates, updateDates] = useRecoilState(setDates)
	const [, updatePagination] = useRecoilState(setPagination)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.currentTarget.value)
		updatePagination((pagination) => ({ ...pagination, page: 1 }))
	}

	const handleDates = (e: React.ChangeEvent<HTMLInputElement>, date: 'endDate' | 'startDate') => {
		updateDates({ ...dates, [date]: e.currentTarget.value ? formatInputDate(e.currentTarget.value) : '' })
		updatePagination((pagination) => ({ ...pagination, page: 1 }))
	}

	return (
		<div className="px-6">
			<div className="py-4 sm:flex sm:justify-between sm:items-center">
				<h1 className="mr-2 text-2xl sm:mr-0">
                    Campaigns
				</h1>
				<div className="relative">
					<svg
						className="absolute w-4 h-4 -translate-y-1/2 fill-gray-400 top-1/2 left-2"
						viewBox="0 0 24 24"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z"
						/>
					</svg>
					<input type="search" value={search} onChange={handleSearch} className="max-w-[200px] w-full border-b outline-none text-gray-900 placeholder:text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-xs placeholder:font-medium placeholder:uppercase placeholder:tracking-wide block px-2 py-1 pl-8" placeholder="Search by name"></input>
				</div>
			</div>
			<h2 className="mb-2 text-md">Filter by period</h2>
			<div className="flex items-center mb-[5px]">
				<span className="text-xs w-[65px] block font-medium uppercase tracking-wide text-gray-900">Start</span>
				<input onChange={(e) => handleDates(e, 'startDate')} max={dates.endDate && unFormatInputDate(dates.endDate)} type="date" className="max-w-[200px] w-full border-b outline-none text-gray-900 mr-4 focus:ring-blue-500 focus:border-blue-500 text-xs font-medium uppercase tracking-wide block px-2 py-1" />
			</div>
			<div className="flex items-center">
				<span className="text-xs w-[65px] block font-medium uppercase tracking-wide text-gray-900">End</span>
				<input onChange={(e) => handleDates(e, 'endDate')} min={dates.startDate && unFormatInputDate(dates.startDate)} type="date" className="max-w-[200px] w-full border-b outline-none text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-xs font-medium uppercase tracking-wide block px-2 py-1" />
			</div>
		</div>
	)
}