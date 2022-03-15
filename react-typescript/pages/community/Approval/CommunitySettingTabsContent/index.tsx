import React, { FC } from 'react'
import AllUsers from './UserManagementTabs/AllUsers'
import Empty from '../Empty'
import Banned from './UserManagementTabs/Banned'
import Muted from './UserManagementTabs/Muted'
import Approved from './UserManagementTabs/Approved'
import Moderator from './UserManagementTabs/Moderator'
import Emoji from './FlairAndEmojiTabs/Emoji'
import GrantUserFlair from './FlairAndEmojiTabs/GrantUserFlair'
import PostFlair from './FlairAndEmojiTabs/PostFlair'
import UserFlair from './FlairAndEmojiTabs/UserFlair'
import ScheduledPost from './ContentTabs/ScheduledPost'
import EventPosts from './ContentTabs/EventPosts'
import Automated from './RulesAndRegulationsTabs/Automated'
import ContentControl from './RulesAndRegulationsTabs/ContentControl'
import RemovalReason from './RulesAndRegulationsTabs/RemovalReason'
import Rules from './RulesAndRegulationsTabs/Rules'
import Edited from './QueuesTabs/Edited'
import ModQueue from './QueuesTabs/ModQueue'
import Reports from './QueuesTabs/Reports'
import Spam from './QueuesTabs/Spam'
import Unmoderator from './QueuesTabs/Unmoderator'
import Award from './Other/Award'
import WikiPage from '../../../../Component/onBoard/Community/CommunitySettings/WikiPage'
import CommunitySetting from './Other/CommunitySetting'




interface Props {
  activeTab: string
}

const CommunitySettingTabsContent: FC<Props> = ({ activeTab }) => {
  return (
    <>
      
        {activeTab == "modqueue" && <ModQueue />}
        {activeTab == "reports" && <Reports />}
        {activeTab == "spam" && <Spam />}
        {activeTab == "edited" && <Edited />}
        {activeTab == "unmoderator" && <Unmoderator />}


      
      

        {activeTab == "allusers" && <AllUsers />}
        {activeTab == "banned" && <Banned />}
        {activeTab == "muted" && <Muted />}
        {activeTab == "approved" && <Approved />}
        {activeTab == "moderator" && <Moderator />}
        {activeTab == "emoji" && <Emoji />}
        {activeTab == "grantuserflair" && <GrantUserFlair />}
        {activeTab == "userflair" && <UserFlair />}
        {activeTab == "postflair" && <PostFlair />}
        {activeTab == "scheduledpost" && <ScheduledPost />}
        {activeTab == "eventposts" && <EventPosts />}
        {activeTab == "automated" && <Automated />}
        {activeTab == "contentcontrol" && <ContentControl />}
        {activeTab == "removalreason" && <RemovalReason />}
        {activeTab == "rules" && <Rules />}
        {activeTab == "award" && <Award />}
        {activeTab == "wikipages" && <WikiPage />}
        {activeTab == "communitysetting" && <CommunitySetting />}

     

    </>
  )
}

export default CommunitySettingTabsContent