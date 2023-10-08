"use client";

import { CreateServerModel } from "@/components/models/create-server-model";
import { useEffect, useState } from "react";
import { InviteModel } from "@/components/models/invite-model";
import { EditServerModel } from "@/components/models/edit-server-model";
import { MembersModel } from "@/components/models/members-model";
import { CreateChannelModel } from "@/components/models/create-channel-model";

export const ModelProvider = () => {

    const [isMounted , setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null;
    }

    return(
        <>
        <CreateServerModel/>
        <InviteModel/>
        <EditServerModel/>
        <MembersModel />
        <CreateChannelModel />
        </>
    )

}