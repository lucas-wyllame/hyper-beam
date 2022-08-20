import React from "react";
import { useRouter } from "next/dist/client/router";

export default function Podcasts() {

    const router = useRouter();
    const parametro = router.query.id;

    return(
        <>
        {parametro === "podcasts"?<h1> Todos os podcasts</h1>
        :null
        }
        </>
    )
}