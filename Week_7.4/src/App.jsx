import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { allNotificationSelector, jobsAtom, messagingAtom, networkAtom, notificationAtom } from "./atoms";

function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);
  const allNotificationCount = useRecoilValue(allNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs({jobsCount}) </button>
      <button>Messaging({messagingCount}) </button>
      <button>Notifications({notificationCount}) </button>

      <button onClick={() => {
        setMessagingAtomCount(c => c+1)
      }}>Me ({allNotificationCount})</button>
    </>
  )
}
export default App
