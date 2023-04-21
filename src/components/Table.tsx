import { useRecoilState, useRecoilValue } from "recoil"
import { campaignsFilterValue, campaignsState } from "../store/campaigns"

type Props = {}

export default function Table({ }: Props) {
    const filter = useRecoilValue(campaignsState);

    console.log(filter)
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            {filter.map(({ id, name, startDate, endDate, Budget }) => {
                return (
                    <div className='grid grid-cols-4 gap-4' key={id}>
                        <div>{name}</div>
                        <div>{startDate}</div>
                        <div>{endDate}</div>
                        <div>{Budget}</div>
                    </div>
                )
            })}
        </div>
    )
}