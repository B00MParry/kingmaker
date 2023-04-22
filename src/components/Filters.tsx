import { useRecoilState } from "recoil"
import { setFilter, setPagination } from "../store/campaigns"
import { useState } from "react";

export const Filters = () => {
    const [dates, setDates] = useState<{start: string, end: string}>({ start: '', end: '' })
    const [search, setSearch] = useRecoilState(setFilter);
    const [, updatePagination] = useRecoilState(setPagination);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
        updatePagination((pagination) => ({ ...pagination, page: 1 }));
    }

    console.log(dates)

    return (
        <>
            <input type="text" value={search} onChange={handleSearch} className="max-w-xs border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-2 py-1" placeholder="Search"></input>
            <input onChange={(e) => setDates({ ...dates, start: e.currentTarget.value })} max={dates.end && dates.end} type="date" className="max-w-xs border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-2 py-1" />
            <input onChange={(e) => setDates({ ...dates, end: e.currentTarget.value })} min={dates.start && dates.start} type="date" className="max-w-xs border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-2 py-1" />
        </>
    )
}