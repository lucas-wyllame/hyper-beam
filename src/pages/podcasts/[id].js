import React from "react";
import { useRouter } from "next/dist/client/router";
import {Post} from "./Post"

export default function Podcasts() {

    const router = useRouter();
    const parametro = router.query.id;

    const nome = "hyperbeam1"

    return(
        <>
        {parametro === nome?<Post/>
        :null
        }
        </>
    )
}