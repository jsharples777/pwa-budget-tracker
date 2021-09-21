import SidebarViewContainer from '../../framework/ui/container/SidebarViewContainer';
import {SidebarLocation, SidebarPrefs} from "../../framework/ui/ConfigurationTypes";

export default class WorkoutSummarySidebar extends SidebarViewContainer {
    static SidebarPrefs: SidebarPrefs = {
        id: 'workoutSummarySidebar',
        expandedSize: '100%',
        location: SidebarLocation.bottom
    }

    static SidebarContainers = {
        container: 'workoutSummary',
    }


    constructor() {
        super(WorkoutSummarySidebar.SidebarPrefs);
    }
}
