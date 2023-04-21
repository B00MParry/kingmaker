import { useRecoilState, useRecoilValue } from "recoil"
import { campaignsFilterValue, campaignsState } from "../store/campaigns"

type Props = {}

export default function Table({ }: Props) {
    const filter = useRecoilValue(campaignsState);

    console.log(filter)
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
                                            ['Name', 'Status', 'Start date', 'End date', 'Budget'].map(header => (
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left whitespace-no-wrap"
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
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {name}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Inactive
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {startDate}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {endDate}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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