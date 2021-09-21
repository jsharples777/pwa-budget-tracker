import SidebarViewContainer from '../container/SidebarViewContainer';
import {SidebarLocation, SidebarPrefs} from "../ConfigurationTypes";

class UserSearchSidebar extends SidebarViewContainer {
    static SidebarPrefs: SidebarPrefs = {
        id: 'userSearchSideBar',
        expandedSize: '35%',
        location: SidebarLocation.left
    }

    static SidebarContainers = {
        recentSearches: 'userSearchZone',
        favourites: 'favouriteUsersDropZone',
        blocked: 'blockedUsersDropZone'
    }

    constructor() {
        super(UserSearchSidebar.SidebarPrefs);
    }
}

export default UserSearchSidebar;
