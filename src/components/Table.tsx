import { useRecoilState, useRecoilValue } from "recoil"
import { campaignsFilterValue, campaignsState } from "../store/campaigns"
import { useEffect } from "react";

type Props = {}

export default function Table({ }: Props) {
    const filter = useRecoilValue(campaignsState);

    console.log(filter)
    return (
        <div>TABLE</div>
    )
}