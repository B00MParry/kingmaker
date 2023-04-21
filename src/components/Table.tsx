import { useRecoilValue } from "recoil"
import { campaignsFilterValue, campaignsState } from "../store/campaigns"

export default function Table() {
    const filter = useRecoilValue(campaignsFilterValue({page: 0, take: 10}));

    return (
        <div>
            <h1 className="px-6 py-4 inline-block min-w-full text-xl">
                Campaigns
            </h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                        {
                                            ['Name', 'Status', 'Start date', 'End date', 'Budget'].map((header, index) => (
                                                <th
                                                    key={index}
                                                    scope="col"
                                                    className="text-xs font-medium text-gray-500 px-6 py-4 text-left whitespace-nowrap uppercase tracking-wide"
                                                >
                                                    {header}
                                                </th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {filter.map(({ id, name, startDate, endDate, Budget }) => {
                                        return (
                                            <tr key={id} className={`${id % 2 ? 'bg-gray-100' : 'bg-white'} border-b`}>
                                                <td className="px-6 py-4 text-sm text-gray-900">
                                                    {name}
                                                </td>
                                                <td className="flex items-center text-sm text-gray-900  px-6 py-4">
                                                    <svg
                                                        className="w-5 h-5 text-gray-400 inline mr-1 fill-red-600"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    Inactive
                                                </td>
                                                <td className="text-sm text-gray-900 px-6 py-4">
                                                    {startDate}
                                                </td>
                                                <td className="text-sm text-gray-900 px-6 py-4">
                                                    {endDate}
                                                </td>
                                                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {`$ ${Budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}