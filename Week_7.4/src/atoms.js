import {atom, selector} from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
});
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});


export const allNotificationSelector = selector({
    key: "allNotificationSelector",
    get: ({get}) => {
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const messagingCount = get(messagingAtom);
        const notificationCount = get(notificationAtom);


        return networkCount + jobsCount + messagingCount + notificationCount;
    }
})