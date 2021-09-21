import SidebarViewContainer from '../../framework/ui/container/SidebarViewContainer';
import {SidebarLocation, SidebarPrefs} from "../../framework/ui/ConfigurationTypes";

export default class ExerciseTypesSidebar extends SidebarViewContainer {
    static SidebarPrefs: SidebarPrefs = {
        id: 'exerciseTypesSidebar',
        expandedSize: '50%',
        location: SidebarLocation.left
    }

    static SidebarContainers = {
        container: 'exerciseTypesContainer',
    }


    constructor() {
        super(ExerciseTypesSidebar.SidebarPrefs);
    }
}
