import { HashtagIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setChannelInfo } from "../features/channelSlice";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { TrashIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/channelSlice";

function Channel({ id, channelName, email, }) {
  const [user] = useAuthState(auth);
  const channelId = useSelector(selectChannelId);
  const dispatch = useDispatch();
  const history = useHistory();

  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );

    history.push(`/channels/${id}`);
  };

  return (
    <div
      className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white"
      onClick={setChannel}
    >
      <HashtagIcon className="h-5 mr-2" /> {channelName}
      {user?.email === email && (
        <div
          className=" hover:bg-[#ed4245] p-1 ml-auto rounded-sm cursor-pointer"
          onClick={() =>
            db
              .collection("channels")
              .doc(channelId)
              .delete()
          }
        >
          <TrashIcon className="h-5 hidden group-hover:inline" />
        </div>
      )}
    </div>
  );
}

export default Channel;
