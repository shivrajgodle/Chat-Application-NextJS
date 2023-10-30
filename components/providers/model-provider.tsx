"use client";

import { CreateServerModel } from "@/components/models/create-server-model";
import { useEffect, useState } from "react";
import { InviteModel } from "@/components/models/invite-model";
import { EditServerModel } from "@/components/models/edit-server-model";
import { MembersModel } from "@/components/models/members-model";
import { CreateChannelModel } from "@/components/models/create-channel-model";
import { LeaveServerModel } from "@/components/models/leave-server-model";
import { DeleteServerModel } from "@/components/models/delete-server-model";
import { DeleteChannelModel } from "@/components/models/delete-channel-modal";
import { EditChannelModel } from "@/components/models/edit-channel-model";
import { MessageFileModal } from "@/components/models/message-file-modal";
import { DeleteMessageModel } from "@/components/models/delete-message-modal";

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
        <MembersModel/>
        <CreateChannelModel/>
        <LeaveServerModel/>
        <DeleteServerModel/>
        <DeleteChannelModel/>
        <EditChannelModel/>
        <MessageFileModal />
        <DeleteMessageModel />
        </>
    )

}