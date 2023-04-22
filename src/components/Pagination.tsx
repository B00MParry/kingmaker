import { useRecoilState, useRecoilValue } from "recoil"
import { filteredCampaigns, filteredCampaignsCount, setFilter, setPagination } from "../store/campaigns"
import { useState } from "react";

export default function Pagination() {
    const [pagination, updatePagination] = useRecoilState(setPagination);
    const campaignCount = useRecoilValue(filteredCampaignsCount);

    const nextPage = () => {
        if (pagination.page < Math.ceil(campaignCount / pagination.limit)) {
            updatePagination({ ...pagination, page: pagination.page + 1 })
        }
    }

    const prevPage = () => {
        if (pagination.page > 1) {
            updatePagination({ ...pagination, page: pagination.page - 1 })
        }
    }

    return (
        <div>
            <select onChange={(e) => updatePagination({ page: 1, limit: Number(e.currentTarget.value) })} className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5">
                <option value={3}>3</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
            <svg
                className="w-4 h-4 text-gray-400 inline"
                viewBox="0 0 1024 1024"
            >
                <path
                    d="M640 832a21.333333 21.333333 0 0 1-15.146667-6.186667l-298.666666-298.666666a21.333333 21.333333 0 0 1 30.293333-30.293334l298.666667 298.666667a21.333333 21.333333 0 0 1 0 30.293333A21.333333 21.333333 0 0 1 640 832z"
                />
                <path
                    d="M341.333333 533.333333a21.333333 21.333333 0 0 1-15.146666-6.186666 21.333333 21.333333 0 0 1 0-30.293334l298.666666-298.666666a21.333333 21.333333 0 0 1 30.293334 30.293333l-298.666667 298.666667A21.333333 21.333333 0 0 1 341.333333 533.333333z"
                />
            </svg>
            <span onClick={prevPage}>prev</span>
            <span>{pagination.page}</span>
            <span onClick={nextPage}>next</span>
            <svg
                className="w-4 h-4 text-gray-400 inline"
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
    )
}