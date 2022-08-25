import React from "react";
import { useRouter } from "next/dist/client/router";
import { ListPodcast } from "./ListPodcast";

export default function HyperbeamList() {

    const router = useRouter();
    const parametro = router.query.id;

    return(
        <>
        {parametro === "podcasts"? <ListPodcast />
        :null
        }
        </>
    )
}