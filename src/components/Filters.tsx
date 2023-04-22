import { useRecoilState } from "recoil"
import { setFilter } from "../store/campaigns"

export const Filters = () => {
    const [search, setSearch] = useRecoilState(setFilter);

    return (
        <input type="text" value={search} onChange={(e) => setSearch(e.currentTarget.value)} className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search"></input>
    )
}