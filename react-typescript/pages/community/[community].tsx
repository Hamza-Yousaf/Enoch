import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import Header from "../../Component/onBoard/header";
import {useQuery} from '@apollo/client';
import {GET_COMMUNITY_BY_ID} from './../../graphql/Queries/getCommunityById';
import withApollo from "../../lib/withApollo";
import {getDataFromTree} from "@apollo/client/react/ssr";
import {gql} from '@apollo/client';
import Communities from './Communities';
const communityId = () => {
    const router = useRouter()
    const {community} = router.query

    const {loading, error, data} = useQuery(GET_COMMUNITY_BY_ID, {
        variables: {
            communityId: community
        }
    })

    console.log("show the community Details",data?.getCommunityById
    )

    if (loading) 
        return null;
    if (error) 
        return `Error! ${error}`;
    
    return (
        <div>
            <Header/>
            <Communities
                name={data?.getCommunityById?.communityName}
                id={community}
                about = {data?.getCommunityById?.about}
                coverImage1 ={data?.getCommunityById?.coverImage}
                communityHeader1={data?.getCommunityById?.communityHeader}
                communityDescription={data?.getCommunityById?.communityDescription}
                communityType={data?.getCommunityById?.communityType}
                adult_community={data?.getCommunityById?.adult_community}
                updated_at = {data?.getCommunityById?.updated_at}
                joinedUsers = {data?.getCommunityById?.joinedUsers}
                />
        </div>
    );
};

export default withApollo(communityId || {
    getDataFromTree
});