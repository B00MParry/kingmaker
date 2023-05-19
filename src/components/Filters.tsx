import React from 'react'
import { useRecoilState } from 'recoil'
import { setDates, setFilter, setPagination } from '../store/campaigns'
import { formatInputDate, unFormatInputDate } from '../lib/utils'
import { Icon } from './Icon'

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
					<Icon className="absolute w-4 h-4 -translate-y-1/2 fill-gray-400 top-1/2 left-2" name="search" />
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