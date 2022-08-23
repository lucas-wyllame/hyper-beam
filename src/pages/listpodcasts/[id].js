import React from "react";
import { useRouter } from "next/dist/client/router";

export default function ListPodcasts() {

    const router = useRouter();
    const parametro = router.query.id;

    return(
        <>
        {parametro === "podcasts"?<h1> Lista de podcast</h1>
        :null
        }
        </>
    )
}