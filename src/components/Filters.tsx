import { useRecoilState } from "recoil"
import { setDates, setFilter, setPagination } from "../store/campaigns"
import { formatInputDate } from "../lib/utils";

export const Filters = () => {
    const [search, setSearch] = useRecoilState(setFilter);
    const [dates, updateDates] = useRecoilState(setDates);
    const [, updatePagination] = useRecoilState(setPagination);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
        updatePagination((pagination) => ({ ...pagination, page: 1 }));
    }

    console.log(dates)

    return (
        <>
            <input type="search" value={search} onChange={handleSearch} className="max-w-xs border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-2 py-1" placeholder="Search"></input>
            <input onChange={(e) => updateDates({ ...dates, startDate: e.currentTarget.value ? formatInputDate(e.currentTarget.value) : '' })} max={dates.endDate && dates.endDate} type="date" className="max-w-xs border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-2 py-1" />
            <input onChange={(e) => updateDates({ ...dates, endDate: e.currentTarget.value ? formatInputDate(e.currentTarget.value) : '' })} min={dates.startDate && dates.startDate} type="date" className="max-w-xs border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-2 py-1" />
            
        </>
    )
}